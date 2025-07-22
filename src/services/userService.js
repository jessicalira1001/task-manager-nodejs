const {insertUser} = require('../repositories/userRepository.js')
const bcrypt = require('bcrypt')

const createUser = async (nome, email, senha) => {
    console.log(nome)
    if(!nome || nome === "" || !email || email === "" || !senha || senha === ""){
        throw new Error('É necessário um ID, um nome, um email e uma senha para criar um usuário');
    }
    
    const senhaCriptograda = await bcrypt.hash(senha, 10)

    return await insertUser(nome, email, senhaCriptograda);
}


module.exports = {
    createUser
};