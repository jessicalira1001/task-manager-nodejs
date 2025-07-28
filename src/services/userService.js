const bcrypt = require('bcrypt')
const ApiError = require('../utils/ApiError.js')
const {insertUser} = require('../repositories/userRepository.js')


const createUser = async (nome, email, senha) => {

    const senhaCriptografada = await bcrypt.hash(senha, 10)
    const newUser = await insertUser(nome, email, senhaCriptografada);
    
    const { senha: _, ...usuarioSemSenha } = newUser;

    return usuarioSemSenha;
}


module.exports = {
    createUser
};