<?php
header('Content-Type: application/json');

class MapaImoveis {
    private $pdo;

    public function __construct(PDO $pdo) {
        $this->pdo = $pdo;
    }

    /**
     * Busca imóveis para exibição no mapa com filtros opcionais
     * @param string|null $cidade
     * @param string|null $tipo
     * @return array
     * @throws \PDOException
     */
    public function buscarImoveisMapa(?string $cidade = null, ?string $tipo = null): array {
        $whereClauses = ["i.status = 'aprovado'"]; // Filtro base
        $params = []; // Parâmetros para o PDO

        if ($cidade) {
            $whereClauses[] = 'i.cidade = :cidade';
            $params[':cidade'] = $cidade;
        }

        if ($tipo) {
            $whereClauses[] = 't.nome = :tipo'; 
            $params[':tipo'] = $tipo;
        }
        
        $whereSql = 'WHERE ' . implode(' AND ', $whereClauses);

        $sql = "
            SELECT 
                i.id_imovel as id, i.nome, i.cidade, i.quartos, i.banheiros,
                i.area_m2 as area, i.status, i.descricao, i.endereco,
                i.latitude, i.longitude, i.nome_proprietario as proprietario,
                t.nome as tipo,
                COALESCE(i.valor_venda, i.valor_aluguel) as valor,
                GROUP_CONCAT(f.url_foto SEPARATOR ';') as fotos
                
            FROM imoveis i
            JOIN tipos_imovel t ON i.id_tipo_imovel = t.id_tipo_imovel
            
            LEFT JOIN imovel_fotos f ON i.id_imovel = f.id_imovel
            
            $whereSql -- Aplica os filtros
            
            GROUP BY i.id_imovel
            ORDER BY i.id_imovel DESC
        ";

        $stmt = $this->pdo->prepare($sql);
        $stmt->execute($params);
        $imoveis = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $this->processarResultados($imoveis);
    }

    /**
     * Processa os resultados para converter string de fotos em array
     * @param array $imoveis
     * @return array
     */
    private function processarResultados(array $imoveis): array {
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
    
    $gerenciadorMapa = new MapaImoveis($pdo);
    
    $imoveis = $gerenciadorMapa->buscarImoveisMapa(
        $_GET['cidade'] ?? null,
        $_GET['tipo'] ?? null
    );
    
    echo json_encode($imoveis);

} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode(['erro' => 'Erro ao buscar imóveis para o mapa: ' . $e->getMessage()]);
} catch (\Exception $e) {
    http_response_code(500);
    echo json_encode(['erro' => 'Erro inesperado: ' . $e->getMessage()]);
}