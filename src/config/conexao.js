const { Client } = require('pg')

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '635241',
    database: 'tarefas_teste'
})

module.exports = client;

