const pool = require('../config/db.js')

const selectTasks = async (userId) => {
    const result = await pool.query('SELECT * FROM tasks WHERE usuario_id = $1 ORDER BY "data_vencimento" ASC', [userId]);
    return result.rows;
}

const insertTask = async (descricao, status, dataVencimento, userId) => {
    const result = await pool.query('INSERT INTO tasks (descricao, status, data_vencimento, usuario_id) VALUES ($1, $2, $3, $4) RETURNING *', [descricao, status, dataVencimento, userId]);
    return result.rows[0];
}

const updateDescricaoTask = async (id, descricao, userId) => { 
    const result = await pool.query('UPDATE tasks SET descricao = $1 WHERE id = $2 AND usuario_id = $3', [descricao, id, userId]);
    return result.rows[0];
}

const updateStatusTask = async (id, status, userId) => { 
    const result = await pool.query('UPDATE tasks SET status = $1 WHERE id = $2 AND usuario_id = $3', [status, id, userId]);
    return result.rows[0];
}

const updateDataVencimentoTask = async (id, dataVencimento, userId ) => { 
    const result = await pool.query('UPDATE tasks SET data_vencimento = $1 WHERE id = $2 AND usuario_id = $3', [dataVencimento, id, userId]);
    return result.rows[0];
}

const selectTaskById = async (id, userId) => {
    const result = await pool.query('SELECT * FROM tasks WHERE id = $1 AND usuario_id = $2', [id, userId]);
    return result.rows[0];
}

const selectTaskByStatus = async (status, userId) => {
    const result = await pool.query('SELECT * FROM tasks WHERE status = $1 AND usuario_id = $2 ORDER BY "data_vencimento" ASC', [status, userId]);
    return result.rows;
}

const deleteTaskById = async (id, userId) => {
    const result = await pool.query('DELETE FROM tasks WHERE id = $1 AND usuario_id = $2', [id, userId]);
    return result.rows[0];
}

module.exports = {
    insertTask,
    selectTasks,
    updateDescricaoTask,
    updateStatusTask,
    updateDataVencimentoTask,
    selectTaskById,
    deleteTaskById,
    selectTaskByStatus
};