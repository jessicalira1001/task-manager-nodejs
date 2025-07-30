const Joi = require('joi');

const authSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'any.required': 'É obrigatório informar o email',
        'string.empty': 'É obrigatório informar o email',
        'string.email': 'O email informado é inválido '
    }),
    senha: Joi.string().required().messages({
        'any.required': 'É obrigatório informar a senha',
        'string.empty': 'É obrigatório informar a senha',
    })
});

module.exports = {authSchema}