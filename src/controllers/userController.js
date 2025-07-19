const {createUser} = require('../services/userService.js')

const postUser = async (req, res) => {
    const {id, nome, email, senha} = req.body;
    const newUser = await createUser(nome, email, senha);
    res.status(201).json(newUser);
}



module.exports = {
    postUser
};