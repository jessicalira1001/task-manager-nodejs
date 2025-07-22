const {selectUserByEmail} = require('../repositories/userRepository.js')
const bcrypt = require('bcrypt')

const login = async (email, senha) => {
    const user = await selectUserByEmail(email);
    
    if(!user){
        throw new Error('Email ou senha invalida');
    }

    const senhaValida = await bcrypt.compare(senha, user.rows[0].senha)

    if(!senhaValida){
        throw new Error('Email ou senha invalida');
    }else{
        throw new Error('Usuario autenticado');
    }
}

module.exports = {
    login
};