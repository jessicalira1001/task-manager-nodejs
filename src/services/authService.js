const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const ApiError= require('../utils/ApiError.js')
const {selectUserByEmail} = require('../repositories/userRepository.js')

const login = async (email, senha) => {
    const user = await selectUserByEmail(email);
    
    if(!user || user.rows.length === 0){
        throw new ApiError(401,'Email ou senha inválida');
    }

    const usuario = user.rows[0];

    const senhaValida = await bcrypt.compare(senha, usuario.senha)

    if(!senhaValida){
        throw new ApiError(401,'Email ou senha invalida');
    }

    const token = jwt.sign({id: usuario.id}, process.env.JWT_SECRET, {expiresIn: '8h'})

    const {senha: _, ...userLogado} = usuario;

    return ({usuario: userLogado, token});
    
}

module.exports = {
    login
};