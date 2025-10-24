<?php
require 'conexao.php'; 

header('Content-Type: application/json');

$cidade = $_GET['cidade'] ?? '';
$tipo_nome = $_GET['tipo'] ?? '';

$sql = "
    SELECT 
        i.id_imovel as id,
        i.codigo,
        i.nome,
        i.cidade,
        i.latitude,
        i.longitude,
        t.nome as tipo,
        COALESCE(i.valor_venda, i.valor_aluguel) as valor
    FROM imoveis i
    JOIN tipos_imovel t ON i.id_tipo_imovel = t.id_tipo_imovel
    WHERE 
        i.latitude IS NOT NULL 
        AND i.longitude IS NOT NULL
        AND i.status = 'aprovado'
";

$params = [];

if (!empty($cidade)) {
    $sql .= " AND i.cidade = ?";
    $params[] = $cidade;
}

if (!empty($tipo_nome)) {
    $sql .= " AND t.nome = ?";
    $params[] = $tipo_nome;
}

try {
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    $imoveis = $stmt->fetchAll();
    
    echo json_encode($imoveis);

} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode(['erro' => 'Erro ao buscar imóveis para o mapa: ' . $e->getMessage()]);
}
?>