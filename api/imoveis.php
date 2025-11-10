<?php

header('Content-Type: application/json');

class Imoveis
{
    /** @var PDO */
    private $pdo;

    /**
     * @param PDO $pdo
     */
    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    /**
     * @return array
     * @throws \PDOException
     */
    public function listarTodos(): array
    {
        $sql = "
            SELECT 
                i.id_imovel as id,
                i.nome,
                i.cidade,
                i.quartos,
                i.banheiros,
                i.area_m2 as area,
                i.status,
                i.descricao,
                i.endereco,
                i.latitude,
                i.longitude,
                i.nome_proprietario as proprietario,
                t.nome as tipo,
                COALESCE(i.valor_venda, i.valor_aluguel) as valor,
                GROUP_CONCAT(f.url_foto ORDER BY f.ordem ASC SEPARATOR ';') as fotos
            FROM imoveis i
            JOIN tipos_imovel t ON i.id_tipo_imovel = t.id_tipo_imovel
            LEFT JOIN imovel_fotos f ON i.id_imovel = f.id_imovel
            GROUP BY i.id_imovel
            ORDER BY i.id_imovel DESC
        ";

        try {
            $stmt = $this->pdo->query($sql);
            $imoveis = $stmt->fetchAll(PDO::FETCH_ASSOC);

            return $this->processarResultados($imoveis);

        } catch (\PDOException $e) {
            throw new \PDOException(
                "Erro ao executar SQL: " . $e->getMessage(), 
                (int)$e->getCode(), 
                $e
            );
        }
    }

    /**
     * @param array $imoveis
     * @return array
     */
    private function processarResultados(array $imoveis): array
    {
        foreach ($imoveis as $key => $imovel) {
            if (!empty($imovel['fotos'])) {
                $imoveis[$key]['fotos'] = explode(';', $imovel['fotos']);
            } else {
                $imoveis[$key]['fotos'] = [];
            }
        }
        return $imoveis;
    }
}


try {
    require_once 'conexao.php'; 

    $gerenciadorImoveis = new Imoveis($pdo);

    $listaDeImoveis = $gerenciadorImoveis->listarTodos();

    echo json_encode($listaDeImoveis);

} catch (\PDOException $e) {
    http_response_code(500); // Erro Interno do Servidor
    echo json_encode(['erro' => 'Erro de banco de dados: ' . $e->getMessage()]);
    
} catch (\Exception $e) {
    http_response_code(500);
    echo json_encode(['erro' => 'Erro inesperado: ' . $e->getMessage()]);
}

?>