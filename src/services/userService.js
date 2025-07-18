const {insertUser} = require('../repositories/userRepository.js')

const createUser = async (id, nome, email, senha) => {
    if(!id || !nome || id === "" || nome === "" || !email || email === "" || !senha || senha === ""){
        throw new Error('É necessário um ID, um nome, um email e uma senha para criar um usuário');
    }
    const status = "pendente";
    return await insertUser(id, nome, email, senha);
}


module.exports = {
    createUser
};