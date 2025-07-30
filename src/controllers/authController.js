const {login} = require('../services/authService.js')
const {authSchema} = require('../schemas/authSchema.js')

const postLogin = async (req, res) => {
    try {
        const {error} = authSchema.validate(req.body);
        if(error){
            return res.status(400).json({mensagem: error.details[0].message});
        }

        const {email, senha} = req.body;
        const newLogin = await login(email, senha);
        res.status(200).json(newLogin);
    } catch(error){
        const status = error.statusCode || 500;
        const mensagem = error.message || "Erro interno no servidor";
        res.status(status).json({mensagem});
    }
}


module.exports = {
    postLogin
}