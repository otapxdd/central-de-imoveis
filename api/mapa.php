<?php
require 'conexao.php';
header('Content-Type: application/json');

try {
    $whereClauses = ["i.status = 'aprovado'"]; // Filtro base
    $params = []; // Parâmetros para o PDO

    if (!empty($_GET['cidade'])) {
        $whereClauses[] = 'i.cidade = :cidade';
        $params[':cidade'] = $_GET['cidade'];
    }

    if (!empty($_GET['tipo'])) {
        $whereClauses[] = 't.nome = :tipo'; 
        $params[':tipo'] = $_GET['tipo'];
    }
    
    $whereSql = 'WHERE ' . implode(' AND ', $whereClauses);

    $sql = "
        SELECT 
            i.id_imovel as id, i.nome, i.cidade, i.quartos, i.banheiros,
            i.area_m2 as area, i.status, i.descricao, i.endereco,
            i.latitude, i.longitude, i.nome_proprietario as proprietario,
            t.nome as tipo,
            COALESCE(i.valor_venda, i.valor_aluguel) as valor,
            GROUP_CONCAT(f.url_foto SEPARATOR ';') as fotos
            
        FROM imoveis i
        JOIN tipos_imovel t ON i.id_tipo_imovel = t.id_tipo_imovel
        
        LEFT JOIN imovel_fotos f ON i.id_imovel = f.id_imovel
        
        $whereSql -- Aplica os filtros
        
        GROUP BY i.id_imovel
        ORDER BY i.id_imovel DESC
    ";

    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    $imoveis = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // --- Processamento final (transforma a string de fotos em array) ---
    foreach ($imoveis as $key => $imovel) {
        if (!empty($imovel['fotos'])) {
            // Transforma a string "foto1.jpg;foto2.jpg" em um array ["foto1.jpg", "foto2.jpg"]
            $imoveis[$key]['fotos'] = explode(';', $imovel['fotos']);
        } else {
            // Garante que é um array vazio se não houver fotos
            $imoveis[$key]['fotos'] = [];
        }
    }

    echo json_encode($imoveis);

} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode(['erro' => 'Erro ao buscar imóveis para o mapa: ' . $e->getMessage()]);
}
?>