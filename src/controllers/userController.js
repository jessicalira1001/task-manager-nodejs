const {createUser} = require('../services/userService.js')

const postUser = async (req, res) => {
    try{
        const {nome, email, senha} = req.body;
        const newUser = await createUser(nome, email, senha);
        res.status(201).json(newUser); 
    }catch (error) {
        const status = error.statusCode || 500;
        const mensagem = error.message || "Erro interno no servidor";
        res.status(status).json({mensagem});
    }
}


module.exports = {
    postUser
};