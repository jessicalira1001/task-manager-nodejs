const {insertUser} = require('../repositories/userRepository.js')

const createUser = async (nome, email, senha) => {
    console.log(nome)
    if(!nome || nome === "" || !email || email === "" || !senha || senha === ""){
        throw new Error('É necessário um ID, um nome, um email e uma senha para criar um usuário');
    }
    const status = "pendente";
    return await insertUser(nome, email, senha);
}


module.exports = {
    createUser
};