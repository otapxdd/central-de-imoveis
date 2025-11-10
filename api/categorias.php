<?php
header('Content-Type: application/json');

class Categorias {
    private $pdo;

    public function __construct(PDO $pdo) {
        $this->pdo = $pdo;
    }

    /**
     * Lista todas as categorias com contagem de imóveis
     * @return array
     * @throws \PDOException
     */
    public function listarTodas(): array {
        $sql = "
            SELECT 
                t.id_tipo_imovel AS id,
                t.nome,
                t.descricao,
                (SELECT COUNT(*) FROM imoveis i WHERE i.id_tipo_imovel = t.id_tipo_imovel) AS quantidade
            FROM 
                tipos_imovel t
            ORDER BY 
                t.nome
        ";
        
        $stmt = $this->pdo->query($sql);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    /**
     * @param string $nome
     * @param string|null $descricao
     * @return array
     * @throws \PDOException
     */
    public function criar(string $nome, ?string $descricao = null): array {
        $sql = "INSERT INTO tipos_imovel (nome, descricao) VALUES (:nome, :descricao)";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            ':nome' => $nome,
            ':descricao' => $descricao
        ]);

        $novoId = $this->pdo->lastInsertId();
        return ['status' => 'success', 'id' => $novoId, 'nome' => $nome];
    }

    /**
     * Atualiza uma categoria existente
     * @param int $id
     * @param string $nome
     * @param string|null $descricao
     * @return array
     * @throws \PDOException
     */
    public function atualizar(int $id, string $nome, ?string $descricao = null): array {
        $sql = "UPDATE tipos_imovel SET nome = :nome, descricao = :descricao WHERE id_tipo_imovel = :id";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            ':nome' => $nome,
            ':descricao' => $descricao,
            ':id' => $id
        ]);

        return ['status' => 'success'];
    }
}

try {
    require_once 'conexao.php';
    
    $metodo = $_SERVER['REQUEST_METHOD'];
    $gerenciadorCategorias = new Categorias($pdo);
    
    switch ($metodo) {
        case 'GET':
            $categorias = $gerenciadorCategorias->listarTodas();
            echo json_encode($categorias);
            break;

        case 'POST':
            $data = json_decode(file_get_contents('php://input'), true);

            if (empty($data['nome'])) {
                http_response_code(400);
                echo json_encode(['erro' => 'O nome da categoria é obrigatório.']);
                exit;
            }

            $resultado = $gerenciadorCategorias->criar(
                $data['nome'],
                $data['descricao'] ?? null
            );
            echo json_encode($resultado);
            break;

        case 'PUT':
            $data = json_decode(file_get_contents('php://input'), true);

            if (empty($data['id']) || empty($data['nome'])) {
                http_response_code(400);
                echo json_encode(['erro' => 'ID e Nome são obrigatórios para editar.']);
                exit;
            }

            $resultado = $gerenciadorCategorias->atualizar(
                $data['id'],
                $data['nome'],
                $data['descricao'] ?? null
            );
            echo json_encode($resultado);
            break;

        default:
            http_response_code(405);
            echo json_encode(['erro' => 'Método não permitido']);
            break;
    }

} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode(['erro' => 'Erro de banco de dados: ' . $e->getMessage()]);
} catch (\Exception $e) {
    http_response_code(500);
    echo json_encode(['erro' => 'Erro inesperado: ' . $e->getMessage()]);
}
