const pool = require('../config/conexao.js')

const selectTasks = async (req, res) => {

    const result = await pool.query('SELECT * FROM tasks');
    console.log("Aqui é model")
    console.log(result.rows)
    return result.rows;

}


const insertTask = async (req, res) => {
    await client.connect()

    await client.query('INSERT INTO tasks (descricao) VALUES (?)', [descricao]);

    await client.end()
}

module.exports = (
    insertTask,
    selectTasks
)