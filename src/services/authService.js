const {selectUserByEmail} = require('../repositories/userRepository.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const senhaJWT = require('../config/senhaJWT.js')

const login = async (email, senha) => {
    const user = await selectUserByEmail(email);
    
    if(!user){
        throw new Error('Email ou senha invalida');
    }

    const senhaValida = await bcrypt.compare(senha, user.rows[0].senha)

    if(!senhaValida){
        throw new Error('Email ou senha invalida');
    }

const token = jwt.sign({id: user.rows[0].id}, senhaJWT, {expiresIn: '8h'})

const {senha: _, ...userLogado} = user.rows[0]

    return ({usuario: userLogado, token});
    
}

module.exports = {
    login
};