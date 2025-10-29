<?php
header('Content-Type: application/json');

$cacertPath = __DIR__ . '/certs/cacert.pem';
ini_set('curl.cainfo', $cacertPath);
ini_set('openssl.cafile', $cacertPath);
require 'conexao.php';

// Dados recebidos
$nome_proprietario = $_POST['proprietario_nome'] ?? null;
$email_proprietario = $_POST['proprietario_email'] ?? null;
$telefone_proprietario = $_POST['proprietario_telefone'] ?? null;
$cep = $_POST['cep'] ?? null;
$endereco = $_POST['endereco'] ?? null;
$numero = $_POST['numero'] ?? null;
$bairro = $_POST['bairro'] ?? null;
$cidade = $_POST['cidade'] ?? null;
$id_tipo_imovel = $_POST['id_tipo_imovel'] ?? null;
$finalidade = $_POST['finalidade'] ?? null;
$valor_pretendido = $_POST['valor_pretendido'] ?? null;
$quartos = $_POST['quartos'] ?? 0;
$banheiros = $_POST['banheiros'] ?? 0;
$area_m2 = $_POST['area_m2'] ?? 0;
$status = $_POST['status'] ?? 'Pendente';
$descricao = $_POST['descricao'] ?? null;
$nome_imovel = $_POST['nome'] ?? 'Imóvel sem nome';
$estado = $_POST['estado'] ?? 'SP';
$vagas_garagem = $_POST['vagas_garagem'] ?? 0;
$ocupado = 'N';

// Coordenadas via Google Maps
$apiKey = 'AIzaSyBFaqoKZx6uBpP15lvS30RJ5ZRcU_jWuio';
$latitude = null;
$longitude = null;

if (!empty($apiKey) && !empty($endereco) && !empty($cidade) && !empty($estado)) {
    $endereco_completo_api = "{$endereco}, {$numero} - {$bairro}, {$cidade}, {$estado}";

    $url = "https://maps.googleapis.com/maps/api/geocode/json?address=" . urlencode($endereco_completo_api) . "&key=" . $apiKey;

    $ch = curl_init();
    curl_setopt_array($ch, [
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CONNECTTIMEOUT => 10,
        CURLOPT_TIMEOUT => 20,
        CURLOPT_CAINFO => $cacertPath
    ]);
    $response = curl_exec($ch);
    curl_close($ch);

    if ($response) {
        $data = json_decode($response, true);
        if (isset($data['status']) && $data['status'] === 'OK') {
            $latitude = $data['results'][0]['geometry']['location']['lat'];
            $longitude = $data['results'][0]['geometry']['location']['lng'];
        }
    }
}

try {
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->beginTransaction();

    $endereco_completo_db = $endereco . ', ' . $numero;
    $valor_venda = ($finalidade === 'Venda') ? $valor_pretendido : null;
    $valor_aluguel = ($finalidade === 'Aluguel') ? $valor_pretendido : null;

    $sql = "INSERT INTO imoveis (
        nome, nome_proprietario, email_proprietario, telefone_proprietario,
        id_tipo_imovel, descricao, endereco, bairro, cidade, estado, cep,
        latitude, longitude, area_m2, quartos, banheiros, vagas_garagem,
        valor_venda, valor_aluguel, status, ocupado, data_cadastro
    ) VALUES (
        :nome, :nome_proprietario, :email_proprietario, :telefone_proprietario,
        :id_tipo_imovel, :descricao, :endereco, :bairro, :cidade, :estado, :cep,
        :latitude, :longitude, :area_m2, :quartos, :banheiros, :vagas_garagem,
        :valor_venda, :valor_aluguel, :status, :ocupado, NOW()
    )";

    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':nome' => $nome_imovel,
        ':nome_proprietario' => $nome_proprietario,
        ':email_proprietario' => $email_proprietario,
        ':telefone_proprietario' => $telefone_proprietario,
        ':id_tipo_imovel' => $id_tipo_imovel,
        ':descricao' => $descricao,
        ':endereco' => $endereco_completo_db,
        ':bairro' => $bairro,
        ':cidade' => $cidade,
        ':estado' => $estado,
        ':cep' => $cep,
        ':latitude' => $latitude,
        ':longitude' => $longitude,
        ':area_m2' => $area_m2,
        ':quartos' => $quartos,
        ':banheiros' => $banheiros,
        ':vagas_garagem' => $vagas_garagem,
        ':valor_venda' => $valor_venda,
        ':valor_aluguel' => $valor_aluguel,
        ':status' => $status,
        ':ocupado' => $ocupado
    ]);

    $id_imovel = $pdo->lastInsertId();

    // Função auxiliar
    function imagecopymerge_alpha($dst_im, $src_im, $dst_x, $dst_y, $src_x, $src_y, $src_w, $src_h, $pct) {
        $w = $src_w;
        $h = $src_h;
        $temp = imagecreatetruecolor($w, $h);
        imagealphablending($temp, false);
        imagesavealpha($temp, true);
        $transparent = imagecolorallocatealpha($temp, 255, 255, 255, 127);
        imagefill($temp, 0, 0, $transparent);
        imagecopy($temp, $src_im, 0, 0, $src_x, $src_y, $w, $h);

        for ($y = 0; $y < $h; $y++) {
            for ($x = 0; $x < $w; $x++) {
                $rgba = imagecolorat($temp, $x, $y);
                $alpha = ($rgba >> 24) & 0xFF;
                if ($alpha < 127) {
                    $novo_alfa = 127 - ((127 - $alpha) * ($pct / 100));
                    $r = ($rgba >> 16) & 0xFF;
                    $g = ($rgba >> 8) & 0xFF;
                    $b = $rgba & 0xFF;
                    $nova_cor = imagecolorallocatealpha($temp, $r, $g, $b, $novo_alfa);
                    imagesetpixel($temp, $x, $y, $nova_cor);
                }
            }
        }
        imagecopy($dst_im, $temp, $dst_x, $dst_y, 0, 0, $w, $h);
        imagedestroy($temp);
    }

    // Upload de fotos
    if (isset($_FILES['fotos'])) {

        $uploadDir = dirname(__DIR__) . '/imagens/imoveis/';
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }

        $sql_foto = "INSERT INTO imovel_fotos (id_imovel, url_foto, ordem)
                        VALUES (:id_imovel, :url_foto, :ordem)";
        $stmt_foto = $pdo->prepare($sql_foto);

        $caminhoMarcaDagua = dirname(__DIR__) . '/imagens/logo.png';
        $opacidade = 35;
        $proporcao_maxima = 0.4;

        foreach ($_FILES['fotos']['name'] as $key => $name) {

            if ($_FILES['fotos']['error'][$key] !== UPLOAD_ERR_OK) {
                continue;
            }

            $tmp_name = $_FILES['fotos']['tmp_name'][$key];
            $fileExtension = strtolower(pathinfo($name, PATHINFO_EXTENSION));
            $fileName = $id_imovel . '_' . uniqid() . '.' . $fileExtension;
            $filePath = $uploadDir . $fileName;


            if (!in_array($fileExtension, ['jpg', 'jpeg', 'png'])) {
                continue;
            }

            $original = ($fileExtension === 'png')
                ? @imagecreatefrompng($tmp_name)
                : @imagecreatefromjpeg($tmp_name);

            if (!$original) {
                continue;
            }

            $marca_original = @imagecreatefrompng($caminhoMarcaDagua);
            if (!$marca_original) {
                continue;
            }

            $orig_w = imagesx($original);
            $orig_h = imagesy($original);
            $marca_w = imagesx($marca_original);
            $marca_h = imagesy($marca_original);

            $nova_marca_w = (int)($orig_w * $proporcao_maxima);
            $ratio = $marca_w / $marca_h;
            $nova_marca_h = (int)($nova_marca_w / $ratio);

            $marca_redimensionada = imagecreatetruecolor($nova_marca_w, $nova_marca_h);
            imagealphablending($marca_redimensionada, false);
            imagesavealpha($marca_redimensionada, true);
            $transp = imagecolorallocatealpha($marca_redimensionada, 255, 255, 255, 127);
            imagefill($marca_redimensionada, 0, 0, $transp);

            imagecopyresampled(
                $marca_redimensionada,
                $marca_original,
                0, 0, 0, 0,
                $nova_marca_w, $nova_marca_h,
                $marca_w, $marca_h
            );

            $pos_x = ($orig_w / 2) - ($nova_marca_w / 2);
            $pos_y = ($orig_h / 2) - ($nova_marca_h / 2);

            imagecopymerge_alpha(
                $original,
                $marca_redimensionada,
                $pos_x,
                $pos_y,
                0, 0,
                $nova_marca_w,
                $nova_marca_h,
                $opacidade
            );

            imagejpeg($original, $filePath, 90);

            imagedestroy($marca_original);
            imagedestroy($marca_redimensionada);
            imagedestroy($original);

            $urlRelativa = 'imagens/imoveis/' . $fileName;
            $stmt_foto->execute([
                ':id_imovel' => $id_imovel,
                ':url_foto' => $urlRelativa,
                ':ordem' => $key
            ]);

        }
    } else {
    }

    $pdo->commit();

    echo json_encode([
        'success' => true,
        'message' => 'Imóvel e fotos salvos com sucesso!',
        'id_imovel' => $id_imovel
    ]);
} catch (Exception $e) {
    $pdo->rollBack();
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Erro: ' . $e->getMessage()]);
}
