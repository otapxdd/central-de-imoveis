<?php
require 'conexao.php';
header('Content-Type: application/json');

try {
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $stmt = $pdo->query("SELECT id_mensagem, email_remetente, assunto, conteudo, data_envio AS data, status_leitura, telefone 
                                FROM mensagens 
                                ORDER BY data_envio DESC");
        
        $mensagens = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode([
            'status' => 'ok',
            'mensagens' => $mensagens
        ]);
        exit;
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $dados = json_decode(file_get_contents('php://input'), true);

        if (isset($dados['marcarLida'])) {
            $id = intval($dados['marcarLida']);
            
            $stmt = $pdo->prepare("UPDATE mensagens SET status_leitura = 'S' WHERE id_mensagem = ?");
            $stmt->execute([$id]);

            echo json_encode(['status' => 'ok', 'mensagem' => 'Mensagem marcada como lida']);
            exit;
        }

        echo json_encode(['status' => 'erro', 'mensagem' => 'Parâmetro inválido']);
        exit;
    }

    echo json_encode(['status' => 'erro', 'mensagem' => 'Método inválido']);
} catch (PDOException $e) {
    echo json_encode(['status' => 'erro', 'mensagem' => $e->getMessage()]);
}
?>