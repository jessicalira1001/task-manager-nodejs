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

const updateTask = async (descricao, id) => {
    
    const result = await pool.query('UPDATE tasks SET descricao = $1 WHERE id = $2', [descricao, id])
    return result.rows[0];
}

const selectTaskId = async (id) => {
    const result = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
    return result.rows[0]
}

const deleteTask = async (id) => {
    const result = await pool.query('DELETE FROM tasks WHERE id = $1', [id])
    return result.rows[0]
}

module.exports = {
    insertTask,
    selectTasks,
    updateTask,
    selectTaskId,
    deleteTask
};