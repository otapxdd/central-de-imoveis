<?php
require 'conexao.php';

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

if (empty($data['id'])) {
    http_response_code(400);
    echo json_encode(['erro' => 'ID do imóvel não fornecido.']);
    exit;
}

$id_imovel = $data['id'];

try {
    $sql = "UPDATE imoveis SET status = 'reprovado' WHERE id_imovel = ?";
    $stmt = $pdo->prepare($sql);
    
    $stmt->execute([$id_imovel]);

    if ($stmt->rowCount() > 0) {
        echo json_encode(['sucesso' => true, 'mensagem' => 'Imóvel reprovado com sucesso!']);
    } else {
        http_response_code(404);
        echo json_encode(['erro' => 'Imóvel não encontrado ou já estava reprovado.']);
    }

} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode(['erro' => 'Erro ao reprovar imóvel: ' . $e->getMessage()]);
}
?>