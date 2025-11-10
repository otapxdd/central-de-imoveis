<?php
header('Content-Type: application/json');

class Dashboard {
    private $pdo;

    public function __construct(PDO $pdo) {
        $this->pdo = $pdo;
    }

    /**
     * Busca estatísticas gerais do dashboard
     * @return array
     * @throws \PDOException
     */
    public function buscarEstatisticas(): array {
        $sql = "
            SELECT 
                COUNT(*) as total,
                SUM(CASE WHEN status = 'pendente' THEN 1 ELSE 0 END) as pendentes,
                SUM(CASE WHEN status = 'aprovado' THEN 1 ELSE 0 END) as aprovados,
                SUM(CASE WHEN status = 'reprovado' THEN 1 ELSE 0 END) as reprovados
            FROM imoveis
        ";
        
        $stmt = $this->pdo->query($sql);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    /**
     * Busca distribuição de imóveis por tipo
     * @return array
     * @throws \PDOException
     */
    public function buscarDistribuicaoPorTipo(): array {
        $sql = "
            SELECT 
                t.nome as tipo,
                COUNT(*) as quantidade
            FROM imoveis i
            JOIN tipos_imovel t ON i.id_tipo_imovel = t.id_tipo_imovel
            WHERE i.status = 'aprovado'
            GROUP BY t.id_tipo_imovel, t.nome
            ORDER BY quantidade DESC
        ";
        
        $stmt = $this->pdo->query($sql);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    /**
     * Busca distribuição de imóveis por cidade
     * @return array
     * @throws \PDOException
     */
    public function buscarDistribuicaoPorCidade(): array {
        $sql = "
            SELECT 
                cidade,
                COUNT(*) as quantidade
            FROM imoveis
            WHERE status = 'aprovado'
            GROUP BY cidade
            ORDER BY quantidade DESC
            LIMIT 10
        ";
        
        $stmt = $this->pdo->query($sql);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    /**
     * Busca as últimas atividades do sistema
     * @param int $limite
     * @return array
     * @throws \PDOException
     */
    public function buscarUltimasAtividades(int $limite = 10): array {
        $sql = "
            (
                SELECT 
                    'imovel' as tipo,
                    id_imovel as id,
                    nome as titulo,
                    status,
                    data_cadastro as data
                FROM imoveis
                ORDER BY data_cadastro DESC
                LIMIT $limite
            )
            UNION ALL
            (
                SELECT 
                    'mensagem' as tipo,
                    id_mensagem as id,
                    assunto as titulo,
                    status_leitura as status,
                    data_envio as data
                FROM mensagens
                ORDER BY data_envio DESC
                LIMIT $limite
            )
            ORDER BY data DESC
            LIMIT $limite
        ";
        
        $stmt = $this->pdo->query($sql);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    /**
     * Retorna todos os dados necessários para o dashboard
     * @return array
     * @throws \PDOException
     */
    public function buscarDadosDashboard(): array {
        return [
            'estatisticas' => $this->buscarEstatisticas(),
            'distribuicaoPorTipo' => $this->buscarDistribuicaoPorTipo(),
            'distribuicaoPorCidade' => $this->buscarDistribuicaoPorCidade(),
            'ultimasAtividades' => $this->buscarUltimasAtividades()
        ];
    }
}

try {
    require_once 'conexao.php';
    
    $gerenciadorDashboard = new Dashboard($pdo);
    
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        echo json_encode($gerenciadorDashboard->buscarDadosDashboard());
    } else {
        http_response_code(405);
        echo json_encode([
            'erro' => 'Método não permitido'
        ]);
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
