const Joi = require('joi');

const userSchema = Joi.object({
    nome: Joi.string().required().messages({
        'any.required': 'É obrigatório informar o nome do usuário',
        'string.empty': 'O nome não pode estar vazio'
    }),
    email: Joi.string().email().required().messages({
        'any.required': 'É obrigatório informar o email do usuário',
        'string.empty': 'O email não pode estar vazio',
        'string.email': 'O email deve ser válido'
    }),
    senha: Joi.string().min(6).required().messages({
        'any.required': 'É obrigatório informar a senha do usuário',
        'string.empty': 'A senha não pode estar vazio',
        'string.min': 'A senha deve ter no mínimo 6 caracteres'
    })
});

module.exports = {userSchema}