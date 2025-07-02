const pool = require('../config/conexao.js')


const insertTask = async (id, descricao) => {
    

    const result = await pool.query('INSERT INTO tasks (id, descricao) VALUES ($1, $2) RETURNING *', [id, descricao]);
    console.log("Passei aqui depois de chamar insertTask")
    console.log(result)
    return result.rows[0];

   
}

const selectTasks = async () => {

    const result = await pool.query('SELECT * FROM tasks');
    console.log("Aqui é model")
    console.log(result.rows)
    return result.rows;

}

const updateTask = async (id, descricao)


module.exports = {
    insertTask,
    selectTasks
};