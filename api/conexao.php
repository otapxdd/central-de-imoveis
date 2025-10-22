<?php
$host = '127.0.0.1';
$dbname = 'central_imoveis';
$username = 'root';
$password = '';

$conec = "mysql:host=$host;dbname=$dbname;charset=utf8";

$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($conec, $username, $password, $options);
} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode(['erro' => 'Falha na conexão com o banco de dados: ' . $e->getMessage()]);
    exit; 
}