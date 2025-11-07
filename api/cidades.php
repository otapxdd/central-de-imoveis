<?php
header('Content-Type: application/json');

require 'conexao.php';

$metodo = $_SERVER['REQUEST_METHOD'];

switch ($metodo) {
    case 'GET':
        try {
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
            
            $stmt = $pdo->query($sql);
            $cidades = $stmt->fetchAll();
            
            echo json_encode($cidades);

        } catch (\PDOException $e) {
            http_response_code(500);
            echo json_encode(['erro' => 'Erro ao buscar cidades: ' . $e->getMessage()]);
        }
        break;

    default:
        http_response_code(405);
        echo json_encode(['erro' => 'Método não permitido']);
        break;
}