const {login} = require('../services/authService.js')

const postLogin = async (req, res) => {
    const {email, senha} = req.body;
    const newLogin = await login(email, senha);
    res.status(201).json(newLogin);
}


module.exports = {
    postLogin
}