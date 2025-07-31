const bcrypt = require('bcrypt')
const ApiError = require('../utils/ApiError.js')
const {insertUser, selectUserByEmail} = require('../repositories/userRepository.js')


const createUser = async (nome, email, senha) => {
    const emailJaCadastrado = await selectUserByEmail(email);
    if(emailJaCadastrado.rows.length > 0){
        throw new ApiError(400, 'Já existe um usuário com esse email cadastrado');
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10)
    const newUser = await insertUser(nome, email, senhaCriptografada);
    
    const { senha: _, ...usuarioSemSenha } = newUser;

    return usuarioSemSenha;
}


module.exports = {
    createUser
};