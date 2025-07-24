const jwt = require('jsonwebtoken')
const senhaJWT = require('../config/senhaJWT')

const checkUserLoggedIn = async (req, res, next) => {
    const {authorization} = req.headers;

    if(!authorization){
        return res.status(401).json({mensagem: "Usuário não autorizado"});
    }

    const token = authorization.split(' ')[1];

    try {
        const decoded = jwt.verify(token, senhaJWT);
        req.usuario = decoded;
        next();
    } catch (error){
        return res.status(403).json({mensagem: "Token inválido ou expirado"});
    }
}

module.exports = checkUserLoggedIn;