const pool = require('../config/db.js')

const selectTasks = async () => {
    const result = await pool.query('SELECT * FROM tasks ORDER BY "data_vencimento" ASC');
    return result.rows;
}

const insertTask = async (descricao, status, dataVencimento) => {
    const result = await pool.query('INSERT INTO tasks (descricao, status, data_vencimento) VALUES ($1, $2, $3) RETURNING *', [descricao, status, dataVencimento]);
    return result.rows[0];
}

const updateDescricaoTask = async (id, descricao ) => { 
    const result = await pool.query('UPDATE tasks SET descricao = $1 WHERE id = $2', [descricao, id]);
    return result.rows[0];
}

const updateStatusTask = async (id, status ) => { 
    const result = await pool.query('UPDATE tasks SET status = $1 WHERE id = $2', [status, id]);
    return result.rows[0];
}

const updateDataVencimentoTask = async (id, dataVencimento ) => { 
    const result = await pool.query('UPDATE tasks SET data_vencimento = $1 WHERE id = $2', [dataVencimento, id]);
    return result.rows[0];
}

const selectTaskById = async (id) => {
    const result = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
    return result.rows[0];
}

const selectTaskByStatus = async (status) => {
    const result = await pool.query('SELECT * FROM tasks WHERE status = $1 ORDER BY "data_vencimento" ASC', [status]);
    return result.rows;
}

const deleteTaskById = async (id) => {
    const result = await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
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