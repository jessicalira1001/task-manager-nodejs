const jwt = require('jsonwebtoken')
const senhaJWT = require('../config/senhaJWT')

const checkUserLoggedIn = async (req, res, next) => {
    const {authorization} = req.headers;

    if(!authorization){
        throw new Error("Usuário não autorizado");
    }

    const token = authorization.split(' ')[1];

    try {
        const tokenUser = jwt.verify(token, senhaJWT);

        next();
    } catch (error){
        throw new Error("Usuário não autorizado");
    }
}

module.exports = checkUserLoggedIn;