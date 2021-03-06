USE DAREDE_DB
GO

INSERT INTO tipoUsuario(nomeTipoUsuario)
VALUES 
	('Cliente'),
	('Funcionário')
GO

INSERT INTO usuario(idTipoUsuario, nomeUsuario, email, senha)
VALUES
	('1', 'Jorge', 'jorge@email.com','jorge123'),
	('1', 'Rebeca', 'rebeca@email.com', 'rebeca123'),
	('2', 'Romário', 'romario@email.com', 'romario123')
GO

INSERT INTO software(nomeSoftware)
VALUES
	('Linux'),
	('Windows')
GO

INSERT INTO zona(nomeZona)
VALUES
	('us-east-1'),
	('us-west-1')
GO

INSERT INTO armInstancia(tipoArmInstancia)
VALUES
	('HDD'),
	('SSD')
GO

INSERT INTO tipoInstancia(nomeTipoInstancia)
VALUES
	('t2.micro'),
	('c4.xlarge')
GO

INSERT INTO instancia(idArmInstancia, idTipoInstancia, vCPU, memoriaGIB)
VALUES
	('1', '1', '1', 'xxGB'),
	('1', '2', '2', 'xxGB'),
	('2', '2', '3', 'xxGB')
GO

INSERT INTO infraestrutura
(idUsuario, idInstancia, idSoftware, idZona)
VALUES
	('1', '1', '1',  '1'),
	('2', '2', '2', '2'),
	('2', '3', '2',  '2')
GO