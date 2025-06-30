const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '635241',
    database: 'tarefas_teste'
})

module.exports = pool;

