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
    $sql = "UPDATE imoveis SET status = 'aprovado' WHERE id_imovel = ?";
    $stmt = $pdo->prepare($sql);
    
    $stmt->execute([$id_imovel]);

    if ($stmt->rowCount() > 0) {
        echo json_encode(['sucesso' => true, 'mensagem' => 'Imóvel aprovado com sucesso!']);
    } else {
        http_response_code(404);
        echo json_encode(['erro' => 'Imóvel não encontrado ou já estava aprovado.']);
    }

} catch (\PDOException $e) {
    http_response_code(500); // Internal Server Error
    echo json_encode(['erro' => 'Erro ao aprovar imóvel: ' . $e->getMessage()]);
}
?>