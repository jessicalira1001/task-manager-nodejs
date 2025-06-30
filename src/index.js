const express = require("express")
const app = express();
const rotas = require("./routes/routes")

const { Client } = require('pg')

app.get('/', async (req, res) => {
    const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '635241',
    database: 'tarefas_teste'
    })
    try{
        await client.connect()

        const resultado = await client.query('select * from tasks')

        await client.end()

        return res.json(resultado.rows)
    }catch (error){
        console.log(error.message)
    }

});

app.use(express.json())

app.use(rotas)

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})
