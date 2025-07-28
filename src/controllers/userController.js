const {createUser} = require('../services/userService.js')
const {userSchema} = require('../schemas/userSchema.js')

const postUser = async (req, res) => {
    try{
        const {error} = userSchema.validate(req.body);
        if(error){
            return res.status(400).json({mensagem: error.details[0].message});
        }

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