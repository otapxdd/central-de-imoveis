<?php
header('Content-Type: application/json');

class Imoveis {
    private PDO $pdo;
    private string $cacertPath;
    private string $apiKey;
    private string $uploadDir;
    
    public function __construct(PDO $pdo) {
        $this->pdo = $pdo;
        $this->cacertPath = __DIR__ . '/certs/cacert.pem';
        $this->apiKey = 'AIzaSyBFaqoKZx6uBpP15lvS30RJ5ZRcU_jWuio';
        $this->uploadDir = dirname(__DIR__) . '/imagens/imoveis/';
        
        ini_set('curl.cainfo', $this->cacertPath);
        ini_set('openssl.cafile', $this->cacertPath);
    }

    /**
     * Salva um novo imóvel com suas fotos
     * @param array $dados Dados do imóvel
     * @param array $fotos Array de arquivos de fotos
     * @return array Resultado da operação
     */
    public function salvar(array $dados, array $fotos = []): array {
        try {
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->pdo->beginTransaction();

            $coordenadas = $this->obterCoordenadas($dados);
            $endereco_completo_db = $dados['endereco'] . ', ' . $dados['numero'];
            $valor_venda = ($dados['finalidade'] === 'Venda') ? $dados['valor_pretendido'] : null;
            $valor_aluguel = ($dados['finalidade'] === 'Aluguel') ? $dados['valor_pretendido'] : null;

            $id_imovel = $this->inserirImovel([
                'nome' => $dados['nome'] ?? 'Imóvel sem nome',
                'nome_proprietario' => $dados['proprietario_nome'],
                'email_proprietario' => $dados['proprietario_email'],
                'telefone_proprietario' => $dados['proprietario_telefone'],
                'id_tipo_imovel' => $dados['id_tipo_imovel'],
                'descricao' => $dados['descricao'],
                'endereco' => $endereco_completo_db,
                'bairro' => $dados['bairro'],
                'cidade' => $dados['cidade'],
                'estado' => $dados['estado'] ?? 'SP',
                'cep' => $dados['cep'],
                'latitude' => $coordenadas['latitude'],
                'longitude' => $coordenadas['longitude'],
                'area_m2' => $dados['area_m2'] ?? 0,
                'quartos' => $dados['quartos'] ?? 0,
                'banheiros' => $dados['banheiros'] ?? 0,
                'vagas_garagem' => $dados['vagas_garagem'] ?? 0,
                'valor_venda' => $valor_venda,
                'valor_aluguel' => $valor_aluguel,
                'status' => $dados['status'] ?? 'Pendente',
                'ocupado' => 'N'
            ]);

            // Processar e salvar fotos
            if (!empty($fotos['fotos'])) {
                $this->processarFotos($fotos['fotos'], $id_imovel);
            }

            $this->pdo->commit();

            return [
                'success' => true,
                'message' => 'Imóvel e fotos salvos com sucesso!',
                'id_imovel' => $id_imovel
            ];

        } catch (Exception $e) {
            $this->pdo->rollBack();
            http_response_code(500);
            return ['success' => false, 'message' => 'Erro: ' . $e->getMessage()];
        }
    }

    /**
     * Obtém as coordenadas do endereço via Google Maps API
     * @param array $dados Dados do endereço
     * @return array Coordenadas (latitude e longitude)
     */
    private function obterCoordenadas(array $dados): array {
        $latitude = null;
        $longitude = null;

        if (!empty($this->apiKey) && !empty($dados['endereco']) && !empty($dados['cidade']) && !empty($dados['estado'])) {
            $endereco_completo_api = "{$dados['endereco']}, {$dados['numero']} - {$dados['bairro']}, {$dados['cidade']}, {$dados['estado']}";
            $url = "https://maps.googleapis.com/maps/api/geocode/json?address=" . urlencode($endereco_completo_api) . "&key=" . $this->apiKey;

            $ch = curl_init();
            curl_setopt_array($ch, [
                CURLOPT_URL => $url,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_CONNECTTIMEOUT => 10,
                CURLOPT_TIMEOUT => 20,
                CURLOPT_CAINFO => $this->cacertPath
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

        return ['latitude' => $latitude, 'longitude' => $longitude];
    }

    /**
     * Insere um novo imóvel no banco de dados
     * @param array $dados Dados do imóvel
     * @return int ID do imóvel inserido
     */
    private function inserirImovel(array $dados): int {
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

        $stmt = $this->pdo->prepare($sql);
        $stmt->execute($dados);
        return (int)$this->pdo->lastInsertId();
    }

    /**
     * Processa e salva as fotos do imóvel
     * @param array $fotos Array de arquivos de fotos
     * @param int $id_imovel ID do imóvel
     * @return void
     */
    private function processarFotos(array $fotos, int $id_imovel): void {
        if (!is_dir($this->uploadDir)) {
            mkdir($this->uploadDir, 0777, true);
        }

        $stmt = $this->pdo->prepare("INSERT INTO imovel_fotos (id_imovel, url_foto, ordem) VALUES (:id_imovel, :url_foto, :ordem)");
        $caminhoMarcaDagua = dirname(__DIR__) . '/imagens/logo.png';
        $opacidade = 35;
        $proporcao_maxima = 0.4;
        $tiposPermitidos = ['jpg', 'jpeg', 'png', 'webp'];
        $tamanhoMaximo = 2 * 1024 * 1024;

        foreach ($fotos['name'] as $key => $name) {
            if ($fotos['error'][$key] !== UPLOAD_ERR_OK || $fotos['size'][$key] > $tamanhoMaximo) {
                continue;
            }

            $fileExtension = strtolower(pathinfo($name, PATHINFO_EXTENSION));
            if (!in_array($fileExtension, $tiposPermitidos)) {
                continue;
            }

            $fileName = $id_imovel . '_' . uniqid() . '.' . $fileExtension;
            $filePath = $this->uploadDir . $fileName;
            $original = $this->carregarImagem($fotos['tmp_name'][$key], $fileExtension);

            if (!$original) {
                continue;
            }

            $marca_original = @imagecreatefrompng($caminhoMarcaDagua);
            if (!$marca_original) {
                continue;
            }

            $this->aplicarMarcaDagua($original, $marca_original, $proporcao_maxima, $opacidade);
            imagejpeg($original, $filePath, 90);

            imagedestroy($marca_original);
            imagedestroy($original);

            $urlRelativa = 'imagens/imoveis/' . $fileName;
            $stmt->execute([
                ':id_imovel' => $id_imovel,
                ':url_foto' => $urlRelativa,
                ':ordem' => $key
            ]);
        }
    }

    /**
     * Carrega uma imagem baseado no tipo do arquivo
     * @param string $tmp_name Caminho temporário do arquivo
     * @param string $fileExtension Extensão do arquivo
     * @return GdImage|false
     */
    private function carregarImagem(string $tmp_name, string $fileExtension): GdImage|false {
        switch ($fileExtension) {
            case 'png':
                return @imagecreatefrompng($tmp_name);
            case 'webp':
                return function_exists('imagecreatefromwebp') ? @imagecreatefromwebp($tmp_name) : false;
            default: // jpg ou jpeg
                return @imagecreatefromjpeg($tmp_name);
        }
    }

    /**
     * Aplica marca d'água na imagem
     * @param GdImage $original Imagem original
     * @param GdImage $marca_original Marca d'água
     * @param float $proporcao_maxima Proporção máxima da marca d'água
     * @param int $opacidade Opacidade da marca d'água
     * @return void
     */
    private function aplicarMarcaDagua(GdImage $original, GdImage $marca_original, float $proporcao_maxima, int $opacidade): void {
        $orig_w = imagesx($original);
        $orig_h = imagesy($original);
        $marca_w = imagesx($marca_original);
        $marca_h = imagesy($marca_original);

        $nova_marca_w = (int)($orig_w * $proporcao_maxima);
        $ratio = $marca_w / $marca_h;
        $nova_marca_h = (int)($nova_marca_w / $ratio);

        $marca_redimensionada = imagecreatetruecolor($nova_marca_w, $nova_marca_h);
        if ($marca_redimensionada === false) return;
        
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

        $this->imagecopymerge_alpha(
            $original,
            $marca_redimensionada,
            $pos_x,
            $pos_y,
            0, 0,
            $nova_marca_w,
            $nova_marca_h,
            $opacidade
        );

        imagedestroy($marca_redimensionada);
    }

    /**
     * Função auxiliar para mesclar imagens com suporte a transparência
     * @param GdImage $dst_im Imagem de destino
     * @param GdImage $src_im Imagem fonte
     * @param int $dst_x Posição X no destino
     * @param int $dst_y Posição Y no destino
     * @param int $src_x Posição X na fonte
     * @param int $src_y Posição Y na fonte
     * @param int $src_w Largura da fonte
     * @param int $src_h Altura da fonte
     * @param int $pct Porcentagem de opacidade
     */
    private function imagecopymerge_alpha(GdImage $dst_im, GdImage $src_im, int $dst_x, int $dst_y, int $src_x, int $src_y, int $src_w, int $src_h, int $pct): void {
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
}

// Uso da classe
require 'conexao.php';

$imoveis = new Imoveis($pdo);
$resultado = $imoveis->salvar($_POST, $_FILES);
echo json_encode($resultado);
