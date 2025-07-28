const bcrypt = require('bcrypt')
const ApiError = require('../utils/ApiError.js')
const {insertUser} = require('../repositories/userRepository.js')


const createUser = async (nome, email, senha) => {
    
    if(!nome || nome === "" || !email || email === "" || !senha || senha === ""){
        throw new ApiError(400, 'É necessário um nome, um email e uma senha para criar um usuário');
    }
    
    const senhaCriptografada = await bcrypt.hash(senha, 10)
    const newUser = await insertUser(nome, email, senhaCriptografada);
    
    const { senha: _, ...usuarioSemSenha } = newUser;

    return usuarioSemSenha;
}


module.exports = {
    createUser
};