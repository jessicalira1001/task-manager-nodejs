const pool = require('../models/db.js')

const insertUser = async (id, nome, email, senha) => {
    const result = await pool.query('INSERT INTO tasks (id, nome, email, senha) VALUES ($1, $2, $3, $4) RETURNING *', [id, nome, email, senha]);
    return result.rows[0];
}


module.exports = {
    insertUser
};