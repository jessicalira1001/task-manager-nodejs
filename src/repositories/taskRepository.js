const pool = require('../models/db.js')

const selectTasks = async () => {
    const result = await pool.query('SELECT * FROM tasks');
    return result.rows;
}

const insertTask = async (id, descricao) => {
    const result = await pool.query('INSERT INTO tasks (id, descricao) VALUES ($1, $2) RETURNING *', [id, descricao]);
    return result.rows[0];
}

const updateTask = async ( descricao, id) => { 
    const result = await pool.query('UPDATE tasks SET descricao = $1 WHERE id = $2', [descricao, id]);
    return result.rows[0];
}

const selectTaskById = async (id) => {
    const result = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
    return result.rows[0];
}

const deleteTaskById = async (id) => {
    const result = await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
    return result.rows[0];
}

module.exports = {
    insertTask,
    selectTasks,
    updateTask,
    selectTaskById,
    deleteTaskById
};