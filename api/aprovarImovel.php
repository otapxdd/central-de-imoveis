<?php
header('Content-Type: application/json');

class Imoveis
{
    private $pdo;

    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    /**
     *
     * @param int
     * @return bool 
     * @throws \PDOException
     */
    public function aprovar(int $id_imovel): bool
    {
        $sql = "UPDATE imoveis SET status = 'aprovado' WHERE id_imovel = ?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$id_imovel]);
        
        return $stmt->rowCount() > 0;
    }
}

try {
    $data = json_decode(file_get_contents('php://input'), true);

    if (empty($data['id'])) {
        http_response_code(400);
        echo json_encode(['erro' => 'ID do imóvel não fornecido.']);
        exit;
    }

    $id_imovel = $data['id'];
    
    require_once 'conexao.php'; 

    $gerenciadorImoveis = new Imoveis($pdo);
    
    $foiAprovado = $gerenciadorImoveis->aprovar($id_imovel);

    if ($foiAprovado) {
        echo json_encode(['sucesso' => true, 'mensagem' => 'Imóvel aprovado com sucesso!']);
    } else {
        http_response_code(404);
        echo json_encode(['erro' => 'Imóvel não encontrado ou já estava aprovado.']);
    }

} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode(['erro' => 'Erro de banco de dados: ' . $e->getMessage()]);
    
} catch (\Exception $e) {
    http_response_code(500);
    echo json_encode(['erro' => 'Erro inesperado: ' . $e->getMessage()]);
}
?>