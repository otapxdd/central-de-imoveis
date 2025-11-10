<?php
header('Content-Type: application/json');

class Imoveis {
    private $pdo;

    public function __construct(PDO $pdo) {
        $this->pdo = $pdo;
    }

    /**
     * @param int $id_imovel
     * @param string $motivo_reprovacao
     * @return array
     * @throws \PDOException
     */
    public function reprovar(int $id_imovel, string $motivo_reprovacao): array {
        if (empty($motivo_reprovacao)) {
            throw new \InvalidArgumentException('O motivo da reprovação é obrigatório.');
        }

        $sql = "UPDATE imoveis SET status = 'reprovado', motivo_reprovacao = ? WHERE id_imovel = ?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$motivo_reprovacao, $id_imovel]);

        if ($stmt->rowCount() > 0) {
            return [
                'sucesso' => true, 
                'mensagem' => 'Imóvel reprovado com sucesso!'
            ];
        } else {
            throw new \RuntimeException('Imóvel não encontrado ou já estava reprovado.');
        }
    }
}

try {
    require_once 'conexao.php';
    
    $data = json_decode(file_get_contents('php://input'), true);

    if (empty($data['id'])) {
        http_response_code(400);
        echo json_encode(['erro' => 'ID do imóvel não fornecido.']);
        exit;
    }

    $gerenciadorImoveis = new Imoveis($pdo);

    $resultado = $gerenciadorImoveis->reprovar(
        intval($data['id']),
        isset($data['motivo']) ? trim($data['motivo']) : ''
    );

    echo json_encode($resultado);

} catch (\InvalidArgumentException $e) {
    http_response_code(400);
    echo json_encode(['erro' => $e->getMessage()]);
} catch (\RuntimeException $e) {
    http_response_code(404);
    echo json_encode(['erro' => $e->getMessage()]);
} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode(['erro' => 'Erro de banco de dados: ' . $e->getMessage()]);
} catch (\Exception $e) {
    http_response_code(500);
    echo json_encode(['erro' => 'Erro inesperado: ' . $e->getMessage()]);
}