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
$motivo_reprovacao = isset($data['motivo']) ? trim($data['motivo']) : '';

if (empty($motivo_reprovacao)) {
    http_response_code(400);
    echo json_encode(['erro' => 'O motivo da reprovação é obrigatório.']);
    exit;
}

try {
    $sql = "UPDATE imoveis SET status = 'reprovado', motivo_reprovacao = ? WHERE id_imovel = ?";
    $stmt = $pdo->prepare($sql);
    
    $stmt->execute([$motivo_reprovacao, $id_imovel]);

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