<?php
require 'conexao.php';

header('Content-Type: application/json');

try {
    $sql = "
        SELECT 
            i.id_imovel as id,
            i.codigo,
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
            
            u.nome as proprietario,
            t.nome as tipo,
            
            COALESCE(i.valor_venda, i.valor_aluguel) as valor
            
        FROM imoveis i
        JOIN usuarios u ON i.id_proprietario = u.id_usuario
        JOIN tipos_imovel t ON i.id_tipo_imovel = t.id_tipo_imovel
        ORDER BY i.id_imovel DESC
    ";

    $stmt = $pdo->query($sql);

    $imoveis = $stmt->fetchAll();

    echo json_encode($imoveis);

} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode(['erro' => 'Erro ao buscar imóveis: ' . $e->getMessage()]);
}