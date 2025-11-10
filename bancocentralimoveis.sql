# MySQL-Front Dump 2.5
#
# Host: localhost   Database: central_imoveis
# --------------------------------------------------------
# Server version 4.1.22-community-nt

USE central_imoveis;


#
# Table structure for table 'agendamentos'
#

CREATE TABLE agendamentos (
  id_agendamento int(11) NOT NULL auto_increment,
  id_imovel int(11) NOT NULL default '0',
  id_cliente int(11) NOT NULL default '0',
  id_corretor int(11) default NULL,
  data_agendamento datetime NOT NULL default '0000-00-00 00:00:00',
  status enum('pendente','confirmado','cancelado','realizado') NOT NULL default 'pendente',
  observacoes text,
  PRIMARY KEY  (id_agendamento),
  KEY id_imovel (id_imovel),
  KEY id_cliente (id_cliente),
  KEY id_corretor (id_corretor),
  CONSTRAINT agendamentos_ibfk_1 FOREIGN KEY (id_imovel) REFERENCES imoveis (id_imovel),
  CONSTRAINT agendamentos_ibfk_2 FOREIGN KEY (id_cliente) REFERENCES usuarios (id_usuario),
  CONSTRAINT agendamentos_ibfk_3 FOREIGN KEY (id_corretor) REFERENCES usuarios (id_usuario)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



#
# Dumping data for table 'agendamentos'
#



#
# Table structure for table 'atividades_log'
#

CREATE TABLE atividades_log (
  id_log int(11) NOT NULL auto_increment,
  id_usuario_acao int(11) default NULL,
  acao varchar(255) NOT NULL default '',
  data_acao timestamp NOT NULL default CURRENT_TIMESTAMP,
  PRIMARY KEY  (id_log),
  KEY id_usuario_acao (id_usuario_acao),
  CONSTRAINT atividades_log_ibfk_1 FOREIGN KEY (id_usuario_acao) REFERENCES usuarios (id_usuario) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



#
# Dumping data for table 'atividades_log'
#



#
# Table structure for table 'cidades'
#

CREATE TABLE cidades (
  id int(11) NOT NULL auto_increment,
  nome varchar(100) NOT NULL default '',
  uf varchar(2) NOT NULL default '',
  codigo_ibge varchar(7) NOT NULL default '',
  PRIMARY KEY  (id),
  UNIQUE KEY codigo_ibge (codigo_ibge),
  KEY idx_uf (uf),
  KEY idx_nome (nome)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;



#
# Dumping data for table 'cidades'
#

INSERT INTO cidades VALUES("1", "São José do Rio Pardo", "SP", "3549706");


#
# Table structure for table 'configuracoes'
#

CREATE TABLE configuracoes (
  chave varchar(100) NOT NULL default '',
  valor text,
  PRIMARY KEY  (chave)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



#
# Dumping data for table 'configuracoes'
#



#
# Table structure for table 'contratos'
#

CREATE TABLE contratos (
  id_contrato int(11) NOT NULL auto_increment,
  id_imovel int(11) NOT NULL default '0',
  id_inquilino int(11) NOT NULL default '0',
  tipo_contrato enum('aluguel','financiamento') NOT NULL default 'aluguel',
  data_inicio date NOT NULL default '0000-00-00',
  data_fim date default NULL,
  status_contrato enum('ativo','encerrado','pendente') NOT NULL default 'ativo',
  valor_mensal decimal(10,2) default NULL,
  dia_vencimento int(11) default NULL,
  duracao_meses int(11) default NULL,
  fin_valor_total decimal(12,2) default NULL,
  fin_valor_pago decimal(12,2) default '0.00',
  fin_total_parcelas int(11) default NULL,
  fin_parcelas_pagas int(11) default '0',
  fin_banco varchar(100) default NULL,
  fin_taxa_juros_anual decimal(5,2) default NULL,
  PRIMARY KEY  (id_contrato),
  KEY id_imovel (id_imovel),
  KEY idx_inquilino_ativo (id_inquilino,status_contrato),
  CONSTRAINT contratos_ibfk_1 FOREIGN KEY (id_imovel) REFERENCES imoveis (id_imovel),
  CONSTRAINT contratos_ibfk_2 FOREIGN KEY (id_inquilino) REFERENCES usuarios (id_usuario)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



#
# Dumping data for table 'contratos'
#

INSERT INTO contratos VALUES("1", "1", "2", "aluguel", "2024-01-01", NULL, "ativo", "2500.00", "5", "30", NULL, "0.00", NULL, "0", NULL, NULL);


#
# Table structure for table 'documentos'
#

CREATE TABLE documentos (
  id_documento int(11) NOT NULL auto_increment,
  id_contrato int(11) NOT NULL default '0',
  nome_documento varchar(255) NOT NULL default '',
  tipo_documento enum('contrato','vistoria_entrada','vistoria_saida','manual','comprovante','outro') NOT NULL default 'contrato',
  url_arquivo varchar(255) NOT NULL default '',
  data_upload timestamp NOT NULL default CURRENT_TIMESTAMP,
  PRIMARY KEY  (id_documento),
  KEY id_contrato (id_contrato),
  CONSTRAINT documentos_ibfk_1 FOREIGN KEY (id_contrato) REFERENCES contratos (id_contrato)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



#
# Dumping data for table 'documentos'
#



#
# Table structure for table 'imoveis'
#

CREATE TABLE imoveis (
  id_imovel int(11) NOT NULL auto_increment,
  nome varchar(255) NOT NULL default '',
  nome_proprietario varchar(255) default NULL,
  email_proprietario varchar(255) default NULL,
  telefone_proprietario varchar(20) default NULL,
  id_tipo_imovel int(11) NOT NULL default '0',
  descricao text,
  endereco varchar(255) default NULL,
  bairro varchar(100) default NULL,
  cidade varchar(100) default NULL,
  estado varchar(2) default NULL,
  cep varchar(9) default NULL,
  latitude decimal(10,8) default NULL,
  longitude decimal(11,8) default NULL,
  area_m2 int(11) default NULL,
  quartos int(11) default '0',
  banheiros int(11) default '0',
  vagas_garagem int(11) default '0',
  valor_venda decimal(12,2) default NULL,
  valor_aluguel decimal(10,2) default NULL,
  status enum('pendente','aprovado','reprovado','alugado','vendido','inativo') NOT NULL default 'pendente',
  ocupado varchar(3) NOT NULL default 'N',
  data_cadastro timestamp NOT NULL default CURRENT_TIMESTAMP,
  motivo_reprovacao text,
  finalidade enum('A','V') default NULL,
  PRIMARY KEY  (id_imovel),
  KEY idx_cidade (cidade),
  KEY idx_tipo_status (id_tipo_imovel,status),
  CONSTRAINT imoveis_ibfk_2 FOREIGN KEY (id_tipo_imovel) REFERENCES tipos_imovel (id_tipo_imovel)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



#
# Dumping data for table 'imoveis'
#

INSERT INTO imoveis VALUES("1", "Apartamento na Rua das Flores", "gabriel", NULL, NULL, "1", NULL, "Rua das Flores, 123 - Centro", NULL, "São José do Rio Pardo", "SP", NULL, "-21.59845000", "-46.89881400", "120", "3", "2", "0", NULL, "2500.00", "aprovado", "N", "2025-10-20 09:01:47", NULL, NULL);
INSERT INTO imoveis VALUES("3", "Apto na Av. Paulista", "joao", NULL, NULL, "1", NULL, "Av. Paulista, 1500", "Bela Vista", "São José do Rio Pardo", "SP", NULL, "-21.60119400", "-46.89825100", "85", "2", "2", "0", "1300000.00", NULL, "aprovado", "N", "2025-10-22 09:00:00", NULL, NULL);
INSERT INTO imoveis VALUES("4", "Escritório Gonzaga", "enzo", NULL, NULL, "1", NULL, "Av. Ana Costa, 100", "Gonzaga", "São José do Rio Pardo", "SP", NULL, "-21.60066500", "-46.89756400", "110", "0", "2", "0", NULL, "4500.00", "aprovado", "N", "2025-10-22 09:00:00", NULL, NULL);
INSERT INTO imoveis VALUES("5", "Terreno na Mooca", "pedro", NULL, NULL, "1", NULL, "Rua da Mooca, 4000", "Mooca", "São José do Rio Pardo", "SP", NULL, "-21.61061800", "-46.90841200", "500", "0", "0", "0", "900000.00", NULL, "aprovado", "N", "2025-10-22 09:11:37", NULL, NULL);
INSERT INTO imoveis VALUES("27", "Imóvel sem nome", "José Calegari", "pquack27@gmail.com", "19994866507", "2", "trhtrhtr", "Rua Jorive Alves Pinto, 100", "Parque Residencial Doutor Domingos de Sylos", "São José do Rio Pardo", "SP", "13720838", "-21.62818540", "-46.89371880", "676", "7", "8", "0", "12412421.00", NULL, "aprovado", "N", "2025-10-29 14:12:57", NULL, NULL);
INSERT INTO imoveis VALUES("28", "Imóvel sem nome", "José Calegari", "pquack27@gmail.com", "19994866507", "1", "thrt", "Rua Jorive Alves Pinto, 100", "Parque Residencial Doutor Domingos de Sylos", "São José do Rio Pardo", "SP", "13720838", "-21.62818540", "-46.89371880", "554", "7", "5", "0", "12412421.00", NULL, "reprovado", "N", "2025-10-29 14:22:07", NULL, NULL);
INSERT INTO imoveis VALUES("29", "Imóvel sem nome", "José Calegari", "pquack27@gmail.com", "19994866507", "3", "uhbuh", "Rua Jorive Alves Pinto, 100", "Parque Residencial Doutor Domingos de Sylos", "São José do Rio Pardo", "SP", "13720838", "-21.62818540", "-46.89371880", "800", "0", "9", "0", "12412421.00", NULL, "reprovado", "N", "2025-10-29 15:34:09", NULL, NULL);
INSERT INTO imoveis VALUES("30", "Imóvel sem nome", "José Calegari", "pquack27@gmail.com", "19994866507", "1", "wefwe", "Rua Jorive Alves Pinto, 100", "Parque Residencial Doutor Domingos de Sylos", "São José do Rio Pardo", "SP", "13720838", "-21.62818540", "-46.89371880", "344", "6", "4", "0", "12412421.00", NULL, "reprovado", "N", "2025-10-29 15:45:04", NULL, NULL);
INSERT INTO imoveis VALUES("31", "Imóvel sem nome", "José Calegari", "pquack27@gmail.com", "19994866507", "1", "wefwe", "Rua Jorive Alves Pinto, 100", "Parque Residencial Doutor Domingos de Sylos", "São José do Rio Pardo", "SP", "13720838", "-21.62818540", "-46.89371880", "344", "6", "4", "0", "12412421.00", NULL, "reprovado", "N", "2025-10-29 15:45:15", NULL, NULL);
INSERT INTO imoveis VALUES("32", "Imóvel sem nome", "José Calegari", "pquack27@gmail.com", "19994866507", "2", "efewf", "Rua Jorive Alves Pinto, 100", "Parque Residencial Doutor Domingos de Sylos", "São José do Rio Pardo", "SP", "13720838", "-21.62818540", "-46.89371880", "21", "4", "23", "0", NULL, "12412421.00", "reprovado", "N", "2025-10-29 15:46:10", NULL, NULL);
INSERT INTO imoveis VALUES("33", "Imóvel sem nome", "José Calegari", "pquack27@gmail.com", "19994866507", "2", "jybhy", "Rua Jorive Alves Pinto, 321", "Parque Residencial Doutor Domingos de Sylos", "São José do Rio Pardo", "SP", "13720838", "-21.62830750", "-46.89373370", "100", "8", "9", "0", "12412421.00", NULL, "aprovado", "N", "2025-10-29 16:24:55", NULL, NULL);
INSERT INTO imoveis VALUES("34", "ewfewfwefwefwe", "José Calegari", "pquack27@gmail.com", "19994866507", "1", "76676767", "Rua Jorive Alves Pinto, 321", "Parque Residencial Doutor Domingos de Sylos", "São José do Rio Pardo", "SP", "13720838", "-21.62830750", "-46.89373370", "76", "6", "7", "0", NULL, "12412421.00", "aprovado", "N", "2025-10-31 10:49:55", NULL, NULL);
INSERT INTO imoveis VALUES("35", "efewfewfew", "José Calegari", "pquack27@gmail.com", "19994866507", "1", "uyk", "Rua Jorive Alves Pinto, 321", "Parque Residencial Doutor Domingos de Sylos", "São José do Rio Pardo", "SP", "13720838", "-21.62830750", "-46.89373370", "98", "98", "9", "0", NULL, "12412421.00", "aprovado", "N", "2025-10-31 10:52:08", NULL, NULL);
INSERT INTO imoveis VALUES("36", "fewfewfwefwe", "José Henrique Calegari Aguiar", "pquack27@gmail.com", "19994866507", "2", "juhbyhuuh", "Rua Domingos Possebon, 321", "Vila Verde", "São José do Rio Pardo", "SP", "13727196", "-21.61120790", "-46.90821730", "8", "7", "8", "0", "822.00", NULL, "reprovado", "N", "2025-11-05 09:24:06", "teste", NULL);


#
# Table structure for table 'imovel_acessos'
#

CREATE TABLE imovel_acessos (
  id_acesso int(11) NOT NULL auto_increment,
  id_imovel int(11) NOT NULL default '0',
  tipo_acesso enum('LOCADOR','LOCATARIO') NOT NULL default 'LOCADOR',
  senha varchar(255) NOT NULL default '',
  status enum('ativo','inativo') default 'ativo',
  data_criacao timestamp NOT NULL default CURRENT_TIMESTAMP,
  PRIMARY KEY  (id_acesso),
  KEY id_imovel (id_imovel),
  CONSTRAINT imovel_acessos_ibfk_1 FOREIGN KEY (id_imovel) REFERENCES imoveis (id_imovel)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



#
# Dumping data for table 'imovel_acessos'
#



#
# Table structure for table 'imovel_fotos'
#

CREATE TABLE imovel_fotos (
  id_foto int(11) NOT NULL auto_increment,
  id_imovel int(11) NOT NULL default '0',
  url_foto varchar(255) NOT NULL default '',
  ordem int(11) default '0',
  PRIMARY KEY  (id_foto),
  KEY id_imovel (id_imovel),
  CONSTRAINT imovel_fotos_ibfk_1 FOREIGN KEY (id_imovel) REFERENCES imoveis (id_imovel) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



#
# Dumping data for table 'imovel_fotos'
#

INSERT INTO imovel_fotos VALUES("2", "27", "imagens/imoveis/27_69024b196a607.jpeg", "0");
INSERT INTO imovel_fotos VALUES("3", "27", "imagens/imoveis/27_69024b198774d.jpeg", "1");
INSERT INTO imovel_fotos VALUES("4", "27", "imagens/imoveis/27_69024b19a2b60.jpeg", "2");
INSERT INTO imovel_fotos VALUES("5", "27", "imagens/imoveis/27_69024b19be470.png", "3");
INSERT INTO imovel_fotos VALUES("6", "27", "imagens/imoveis/27_69024b19e7376.jpeg", "4");
INSERT INTO imovel_fotos VALUES("7", "28", "imagens/imoveis/28_69024d3fb6db6.jpeg", "0");
INSERT INTO imovel_fotos VALUES("8", "29", "imagens/imoveis/29_69025e21b197e.jpeg", "0");
INSERT INTO imovel_fotos VALUES("9", "30", "imagens/imoveis/30_690260b040e23.jpeg", "0");
INSERT INTO imovel_fotos VALUES("10", "30", "imagens/imoveis/30_690260b06928f.jpeg", "1");
INSERT INTO imovel_fotos VALUES("11", "31", "imagens/imoveis/31_690260bbc85ff.jpeg", "0");
INSERT INTO imovel_fotos VALUES("12", "31", "imagens/imoveis/31_690260bbe5291.jpeg", "1");
INSERT INTO imovel_fotos VALUES("13", "32", "imagens/imoveis/32_690260f2e7ff3.jpeg", "0");
INSERT INTO imovel_fotos VALUES("14", "32", "imagens/imoveis/32_690260f3112ab.jpeg", "1");
INSERT INTO imovel_fotos VALUES("15", "33", "imagens/imoveis/33_69026a077b814.jpeg", "0");
INSERT INTO imovel_fotos VALUES("16", "34", "imagens/imoveis/34_6904be835921e.jpeg", "0");
INSERT INTO imovel_fotos VALUES("17", "35", "imagens/imoveis/35_6904bf08775c5.jpeg", "0");
INSERT INTO imovel_fotos VALUES("18", "36", "imagens/imoveis/36_690b41e6d1c77.png", "0");


#
# Table structure for table 'mensagens'
#

CREATE TABLE mensagens (
  id_mensagem int(11) NOT NULL auto_increment,
  assunto varchar(255) default NULL,
  conteudo text,
  data_envio datetime default NULL,
  status_leitura char(1) default 'N',
  email_remetente varchar(255) default NULL,
  telefone varchar(20) default NULL,
  PRIMARY KEY  (id_mensagem)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



#
# Dumping data for table 'mensagens'
#

INSERT INTO mensagens VALUES("1", "Dúvida sobre contrato", "Olá, estou com uma dúvida sobre a cláusula 5 do contrato de aluguel. Pode me esclarecer?", "2025-10-30 14:30:00", "N", "cliente.ana@email.com", "19971289408");
INSERT INTO mensagens VALUES("2", "Interesse no imóvel Cód: 123", "Bom dia, gostaria de agendar uma visita ao apartamento no centro, código 123.", "2025-10-30 10:15:00", "S", "joao.silva@exemplo.com", "19971289408");
INSERT INTO mensagens VALUES("3", "Problema no apartamento", "Estou com um vazamento na pia da cozinha. Preciso de manutenção urgente.", "2025-10-31 09:05:00", "N", "maria.pereira@locatario.com", "19971289408");
INSERT INTO mensagens VALUES("4", "Envio de documentos", "Conforme solicitado, seguem anexos meus documentos para a ficha cadastral.", "2025-10-29 17:40:00", "S", "carlos.rodrigues@email.com", "19971289408");
INSERT INTO mensagens VALUES("5", "Proposta de compra", "Gostaria de formalizar uma proposta de R$ 450.000,00 pelo imóvel da Rua das Flores.", "2025-10-28 11:00:00", "S", "investidor.xp@mercado.com", "19971289408");
INSERT INTO mensagens VALUES("6", "Boleto de Aluguel", "Não recebi o boleto deste mês. Podem me enviar a segunda via?", "2025-10-31 11:20:00", "N", "lucia.fernandes@locatario.com", "19971289408");
INSERT INTO mensagens VALUES("7", "Atualização do Sistema", "O portal ficará fora do ar para manutenção programada na próxima sexta-feira.", "2025-10-27 08:00:00", "S", "admin@central_imoveis.com", "19971289408");
INSERT INTO mensagens VALUES("8", "RE: Visita ao imóvel 123", "Perfeito, João. Visita confirmada para amanhã às 10h. Att, Corretor Marcos", "2025-10-30 11:00:00", "N", "corretor.marcos@central_imoveis.com", "19971289408");
INSERT INTO mensagens VALUES("9", "Quero anunciar meu imóvel", "Bom dia, tenho uma casa para alugar no bairro Jardim. Como faço para anunciar com vocês?", "2025-10-31 15:10:00", "N", "proprietario.sa@email.com", "19971289408");
INSERT INTO mensagens VALUES("10", "Feedback sobre atendimento", "Queria agradecer ao corretor Marcos pelo excelente atendimento durante a visita.", "2025-10-30 18:00:00", "S", "joao.silva@exemplo.com", "19971289408");


#
# Table structure for table 'pagamentos'
#

CREATE TABLE pagamentos (
  id_pagamento int(11) NOT NULL auto_increment,
  id_contrato int(11) NOT NULL default '0',
  mes_referencia int(11) NOT NULL default '0',
  ano_referencia int(11) NOT NULL default '0',
  valor decimal(10,2) NOT NULL default '0.00',
  data_vencimento date NOT NULL default '0000-00-00',
  status enum('pendente','pago','atrasado') NOT NULL default 'pendente',
  data_pagamento date default NULL,
  codigo_barras varchar(255) default NULL,
  url_comprovante varchar(255) default NULL,
  PRIMARY KEY  (id_pagamento),
  KEY idx_contrato_data (id_contrato,ano_referencia,mes_referencia),
  CONSTRAINT pagamentos_ibfk_1 FOREIGN KEY (id_contrato) REFERENCES contratos (id_contrato)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



#
# Dumping data for table 'pagamentos'
#

INSERT INTO pagamentos VALUES("1", "1", "10", "2024", "2500.00", "2024-10-05", "pago", "2024-10-03", NULL, NULL);
INSERT INTO pagamentos VALUES("2", "1", "11", "2024", "2500.00", "2024-11-05", "pendente", NULL, NULL, NULL);


#
# Table structure for table 'solicitacoes_manutencao'
#

CREATE TABLE solicitacoes_manutencao (
  id_solicitacao int(11) NOT NULL auto_increment,
  protocolo varchar(20) NOT NULL default '',
  id_contrato int(11) NOT NULL default '0',
  tipo varchar(100) NOT NULL default '',
  descricao text NOT NULL,
  data_solicitacao timestamp NOT NULL default CURRENT_TIMESTAMP,
  status enum('pendente','em_andamento','concluido','cancelado') NOT NULL default 'pendente',
  PRIMARY KEY  (id_solicitacao),
  UNIQUE KEY protocolo (protocolo),
  KEY id_contrato (id_contrato),
  CONSTRAINT solicitacoes_manutencao_ibfk_1 FOREIGN KEY (id_contrato) REFERENCES contratos (id_contrato)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



#
# Dumping data for table 'solicitacoes_manutencao'
#



#
# Table structure for table 'tipos_imovel'
#

CREATE TABLE tipos_imovel (
  id_tipo_imovel int(11) NOT NULL auto_increment,
  nome varchar(100) NOT NULL default '',
  descricao text,
  PRIMARY KEY  (id_tipo_imovel),
  UNIQUE KEY nome (nome)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



#
# Dumping data for table 'tipos_imovel'
#

INSERT INTO tipos_imovel VALUES("1", "Apartamento", NULL);
INSERT INTO tipos_imovel VALUES("2", "Casa", NULL);
INSERT INTO tipos_imovel VALUES("3", "Terreno", NULL);
INSERT INTO tipos_imovel VALUES("4", "Comercial", NULL);
INSERT INTO tipos_imovel VALUES("5", "Residencial", "");
INSERT INTO tipos_imovel VALUES("6", "Barracão", "");
INSERT INTO tipos_imovel VALUES("7", "Chácara", "");


#
# Table structure for table 'transacoes_financeiras'
#

CREATE TABLE transacoes_financeiras (
  id_transacao int(11) NOT NULL auto_increment,
  id_contrato int(11) NOT NULL default '0',
  id_corretor int(11) NOT NULL default '0',
  tipo_transacao enum('venda','aluguel_primeiro_mes','comissao_mensal') NOT NULL default 'venda',
  valor_total decimal(12,2) NOT NULL default '0.00',
  valor_comissao decimal(10,2) NOT NULL default '0.00',
  data_transacao timestamp NOT NULL default CURRENT_TIMESTAMP,
  PRIMARY KEY  (id_transacao),
  KEY id_contrato (id_contrato),
  KEY id_corretor (id_corretor),
  KEY idx_data (data_transacao),
  CONSTRAINT transacoes_financeiras_ibfk_1 FOREIGN KEY (id_contrato) REFERENCES contratos (id_contrato),
  CONSTRAINT transacoes_financeiras_ibfk_2 FOREIGN KEY (id_corretor) REFERENCES usuarios (id_usuario)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



#
# Dumping data for table 'transacoes_financeiras'
#



#
# Table structure for table 'usuarios'
#

CREATE TABLE usuarios (
  id_usuario int(11) NOT NULL auto_increment,
  nome varchar(255) NOT NULL default '',
  email varchar(255) NOT NULL default '',
  senha varchar(255) NOT NULL default '',
  telefone varchar(20) default NULL,
  tipo_usuario enum('admin','proprietario','inquilino','corretor') NOT NULL default 'admin',
  data_cadastro timestamp NOT NULL default CURRENT_TIMESTAMP,
  PRIMARY KEY  (id_usuario),
  UNIQUE KEY email (email),
  KEY idx_tipo_usuario (tipo_usuario)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



#
# Dumping data for table 'usuarios'
#

INSERT INTO usuarios VALUES("1", "Administrador", "admin", "admin123", NULL, "admin", "2025-10-20 09:01:47");
INSERT INTO usuarios VALUES("2", "Inquilino Teste", "inquilino@teste.com", "inquilino123", NULL, "inquilino", "2025-10-20 09:01:47");
INSERT INTO usuarios VALUES("3", "Proprietário Teste", "prop@teste.com", "prop123", NULL, "proprietario", "2025-10-20 09:01:47");
