-- Criação do banco de dados (opcional, caso já esteja criado)
CREATE DATABASE tarefas_bd;

-- Tabela de usuários
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL
);

-- Tabela de tarefas
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    descricao TEXT NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('pendente', 'concluido')),
    data_vencimento DATE,
    usuario_id INTEGER NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE
);