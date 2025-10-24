<?php
header('Content-Type: application/json');

require 'conexao.php';

$metodo = $_SERVER['REQUEST_METHOD'];

switch ($metodo) {
    case 'GET':
        try {

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

            $stmt = $pdo->query($sql);
            $categorias = $stmt->fetchAll();
            echo json_encode($categorias);
        } catch (\PDOException $e) {
            http_response_code(500);
            echo json_encode(['erro' => 'Erro ao buscar categorias: ' . $e->getMessage()]);
        }
        break;

    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);

        if (empty($data['nome'])) {
            http_response_code(400);
            echo json_encode(['erro' => 'O nome da categoria é obrigatório.']);
            exit;
        }

        try {
            $sql = "INSERT INTO tipos_imovel (nome, descricao) VALUES (:nome, :descricao)";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([
                ':nome' => $data['nome'],
                ':descricao' => $data['descricao'] ?? null
            ]);

            $novoId = $pdo->lastInsertId();
            echo json_encode(['status' => 'success', 'id' => $novoId, 'nome' => $data['nome']]);
        } catch (\PDOException $e) {
            http_response_code(500);
            echo json_encode(['erro' => 'Erro ao criar categoria: ' . $e->getMessage()]);
        }
        break;

    case 'PUT':
        $data = json_decode(file_get_contents('php://input'), true);

        if (empty($data['id']) || empty($data['nome'])) {
            http_response_code(400);
            echo json_encode(['erro' => 'ID e Nome são obrigatórios para editar.']);
            exit;
        }

        try {
            $sql = "UPDATE tipos_imovel SET nome = :nome, descricao = :descricao WHERE id_tipo_imovel = :id";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([
                ':nome' => $data['nome'],
                ':descricao' => $data['descricao'] ?? null,
                ':id' => $data['id']
            ]);

            echo json_encode(['status' => 'success']);
        } catch (\PDOException $e) {
            http_response_code(500);
            echo json_encode(['erro' => 'Erro ao atualizar categoria: ' . $e->getMessage()]);
        }
        break;

    default:
        http_response_code(405);
        echo json_encode(['erro' => 'Método não permitido']);
        break;
}
