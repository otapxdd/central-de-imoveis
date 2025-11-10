<?php
header('Content-Type: application/json');

class Cidades {
    private $pdo;

    public function __construct(PDO $pdo) {
        $this->pdo = $pdo;
    }

    /**
     * @return array
     * @throws \PDOException
     */
    public function listarTodas(): array {
        $sql = "
            SELECT 
                id,
                nome,
                uf,
                codigo_ibge
            FROM 
                cidades
            ORDER BY 
                nome
        ";
        
        $stmt = $this->pdo->query($sql);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}

try {
    require_once 'conexao.php';
    
    $metodo = $_SERVER['REQUEST_METHOD'];
    
    if ($metodo === 'GET') {
        $gerenciadorCidades = new Cidades($pdo);
        $cidades = $gerenciadorCidades->listarTodas();
        echo json_encode($cidades);
    } else {
        http_response_code(405);
        echo json_encode(['erro' => 'Método não permitido']);
    }

} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode(['erro' => 'Erro ao buscar cidades: ' . $e->getMessage()]);
} catch (\Exception $e) {
    http_response_code(500);
    echo json_encode(['erro' => 'Erro inesperado: ' . $e->getMessage()]);
}