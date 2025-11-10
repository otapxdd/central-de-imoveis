<?php
header('Content-Type: application/json');

class Mensagens {
    private $pdo;

    public function __construct(PDO $pdo) {
        $this->pdo = $pdo;
    }

    /**
     * Lista todas as mensagens ordenadas por data de envio
     * @return array
     * @throws \PDOException
     */
    public function listarTodas(): array {
        $stmt = $this->pdo->query("
            SELECT 
                id_mensagem, 
                email_remetente, 
                assunto, 
                conteudo, 
                data_envio AS data, 
                status_leitura, 
                telefone 
            FROM mensagens 
            ORDER BY data_envio DESC
        ");
        
        $mensagens = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return [
            'status' => 'ok',
            'mensagens' => $mensagens
        ];
    }

    /**
     * Marca uma mensagem como lida
     * @param int $idMensagem
     * @return array
     * @throws \PDOException
     */
    public function marcarComoLida(int $idMensagem): array {
        $stmt = $this->pdo->prepare("
            UPDATE mensagens 
            SET status_leitura = 'S' 
            WHERE id_mensagem = ?
        ");
        
        $stmt->execute([$idMensagem]);

        return [
            'status' => 'ok', 
            'mensagem' => 'Mensagem marcada como lida'
        ];
    }
}

try {
    require_once 'conexao.php';
    
    $gerenciadorMensagens = new Mensagens($pdo);
    $metodo = $_SERVER['REQUEST_METHOD'];

    switch ($metodo) {
        case 'GET':
            echo json_encode($gerenciadorMensagens->listarTodas());
            break;

        case 'POST':
            $dados = json_decode(file_get_contents('php://input'), true);

            if (isset($dados['marcarLida'])) {
                echo json_encode(
                    $gerenciadorMensagens->marcarComoLida(
                        intval($dados['marcarLida'])
                    )
                );
            } else {
                http_response_code(400);
                echo json_encode([
                    'status' => 'erro', 
                    'mensagem' => 'Parâmetro inválido'
                ]);
            }
            break;

        default:
            http_response_code(405);
            echo json_encode([
                'status' => 'erro', 
                'mensagem' => 'Método inválido'
            ]);
            break;
    }

} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'erro', 
        'mensagem' => 'Erro de banco de dados: ' . $e->getMessage()
    ]);
} catch (\Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'erro', 
        'mensagem' => 'Erro inesperado: ' . $e->getMessage()
    ]);
}