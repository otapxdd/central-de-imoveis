<?php
require 'conexao.php';

header('Content-Type: application/json');

try {
    $sql = "
        SELECT 
            i.id_imovel as id,
            i.nome,
            i.cidade,
            i.quartos,
            i.banheiros,
            i.area_m2 as area,
            i.status,
            i.descricao,
            i.endereco,
            i.latitude,
            i.longitude,
            i.nome_proprietario as proprietario,
            t.nome as tipo,
            COALESCE(i.valor_venda, i.valor_aluguel) as valor,
            
            GROUP_CONCAT(f.url_foto ORDER BY f.ordem ASC SEPARATOR ';') as fotos
            
        FROM imoveis i
        JOIN tipos_imovel t ON i.id_tipo_imovel = t.id_tipo_imovel
        LEFT JOIN imovel_fotos f ON i.id_imovel = f.id_imovel
        GROUP BY i.id_imovel
        ORDER BY i.id_imovel DESC
    ";

    $stmt = $pdo->query($sql);
    $imoveis = $stmt->fetchAll(PDO::FETCH_ASSOC);

    foreach ($imoveis as $key => $imovel) {
        if (!empty($imovel['fotos'])) {
            $imoveis[$key]['fotos'] = explode(';', $imovel['fotos']);
        } else {
            $imoveis[$key]['fotos'] = [];
        }
    }

    echo json_encode($imoveis);

} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode(['erro' => 'Erro ao buscar imóveis: ' . $e->getMessage(), 'sql' => $sql]);
}