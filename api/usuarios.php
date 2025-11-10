<?php
header('Content-Type: application/json');

class Usuarios {
    private $pdo;

    public function __construct(PDO $pdo) {
        $this->pdo = $pdo;
    }

    /**
     * Lista todos os usuários
     * @return array
     * @throws \PDOException
     */
    public function listarTodos(): array {
        $sql = "
            SELECT 
                u.id_usuario,
                u.nome,
                u.email,
                u.tipo_usuario,
                u.status,
                u.data_cadastro,
                (SELECT COUNT(*) FROM imoveis i WHERE i.id_usuario = u.id_usuario) as total_imoveis
            FROM usuarios u
            ORDER BY u.nome
        ";
        
        $stmt = $this->pdo->query($sql);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    /**
     * Cria um novo usuário
     * @param array $dados
     * @return array
     * @throws \PDOException
     */
    public function criar(array $dados): array {
        $sql = "
            INSERT INTO usuarios 
                (nome, email, senha, tipo_usuario, status) 
            VALUES 
                (:nome, :email, :senha, :tipo_usuario, :status)
        ";
        
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            ':nome' => $dados['nome'],
            ':email' => $dados['email'],
            ':senha' => password_hash($dados['senha'], PASSWORD_DEFAULT),
            ':tipo_usuario' => $dados['tipo_usuario'],
            ':status' => $dados['status'] ?? 'ativo'
        ]);

        return [
            'id' => $this->pdo->lastInsertId(),
            'status' => 'success',
            'mensagem' => 'Usuário criado com sucesso'
        ];
    }

    /**
     * Atualiza um usuário existente
     * @param int $id
     * @param array $dados
     * @return array
     * @throws \PDOException
     */
    public function atualizar(int $id, array $dados): array {
        $campos = [];
        $parametros = [':id' => $id];

        if (isset($dados['nome'])) {
            $campos[] = 'nome = :nome';
            $parametros[':nome'] = $dados['nome'];
        }

        if (isset($dados['email'])) {
            $campos[] = 'email = :email';
            $parametros[':email'] = $dados['email'];
        }

        if (isset($dados['senha'])) {
            $campos[] = 'senha = :senha';
            $parametros[':senha'] = password_hash($dados['senha'], PASSWORD_DEFAULT);
        }

        if (isset($dados['tipo_usuario'])) {
            $campos[] = 'tipo_usuario = :tipo_usuario';
            $parametros[':tipo_usuario'] = $dados['tipo_usuario'];
        }

        if (isset($dados['status'])) {
            $campos[] = 'status = :status';
            $parametros[':status'] = $dados['status'];
        }

        if (empty($campos)) {
            throw new \InvalidArgumentException('Nenhum campo para atualizar');
        }

        $sql = "UPDATE usuarios SET " . implode(', ', $campos) . " WHERE id_usuario = :id";
        
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute($parametros);

        return [
            'status' => 'success',
            'mensagem' => 'Usuário atualizado com sucesso'
        ];
    }

    /**
     * Remove um usuário
     * @param int $id
     * @return array
     * @throws \PDOException
     */
    public function remover(int $id): array {
        $sql = "DELETE FROM usuarios WHERE id_usuario = ?";
        
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$id]);

        return [
            'status' => 'success',
            'mensagem' => 'Usuário removido com sucesso'
        ];
    }
}

try {
    require_once 'conexao.php';
    
    $gerenciadorUsuarios = new Usuarios($pdo);
    $metodo = $_SERVER['REQUEST_METHOD'];

    switch ($metodo) {
        case 'GET':
            echo json_encode($gerenciadorUsuarios->listarTodos());
            break;

        case 'POST':
            $dados = json_decode(file_get_contents('php://input'), true);

            if (empty($dados['nome']) || empty($dados['email']) || empty($dados['senha'])) {
                http_response_code(400);
                echo json_encode([
                    'erro' => 'Nome, email e senha são obrigatórios'
                ]);
                exit;
            }

            $resultado = $gerenciadorUsuarios->criar($dados);
            echo json_encode($resultado);
            break;

        case 'PUT':
            $dados = json_decode(file_get_contents('php://input'), true);

            if (empty($dados['id'])) {
                http_response_code(400);
                echo json_encode([
                    'erro' => 'ID do usuário é obrigatório'
                ]);
                exit;
            }

            $resultado = $gerenciadorUsuarios->atualizar($dados['id'], $dados);
            echo json_encode($resultado);
            break;

        case 'DELETE':
            $dados = json_decode(file_get_contents('php://input'), true);

            if (empty($dados['id'])) {
                http_response_code(400);
                echo json_encode([
                    'erro' => 'ID do usuário é obrigatório'
                ]);
                exit;
            }

            $resultado = $gerenciadorUsuarios->remover($dados['id']);
            echo json_encode($resultado);
            break;

        default:
            http_response_code(405);
            echo json_encode([
                'erro' => 'Método não permitido'
            ]);
            break;
    }

} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'erro' => 'Erro de banco de dados: ' . $e->getMessage()
    ]);
} catch (\Exception $e) {
    http_response_code(500);
    echo json_encode([
        'erro' => 'Erro inesperado: ' . $e->getMessage()
    ]);
}
