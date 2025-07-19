const pool = require('../models/db.js')

const insertUser = async (nome, email, senha) => {
    const result = await pool.query('INSERT INTO users (nome, email, senha) VALUES ($1, $2, $3) RETURNING *', [nome, email, senha]);
    return result.rows[0];
}


module.exports = {
    insertUser
};