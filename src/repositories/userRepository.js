const pool = require('../config/db.js')

const insertUser = async (nome, email, senha) => {
    const result = await pool.query('INSERT INTO users (nome, email, senha) VALUES ($1, $2, $3) RETURNING *', [nome, email, senha]);
    return result.rows[0];
}

const selectUserByEmail = async (email) => {
    return await pool.query('SELECT * FROM users WHERE email = $1', [email]);
}


module.exports = {
    insertUser,
    selectUserByEmail
};