const Joi = require('joi');

const taskSchema = Joi.object({
    descricao: Joi.string().required().messages({
        'any.required': 'É obrigatório informar uma descrição',
        'string.empty': 'É obrigatório informar uma descrição'
    }),
    dataVencimento: Joi.date().iso().required().messages({
        'date.base': 'A data de vencimento deve ser uma data válida.',
        'date.format': 'A data de vencimento deve estar no formato ISO (YYYY-MM-DD).',
        'any.required': 'A data de vencimento é obrigatória.'
    })
})

const updateTaskSchema = Joi.object({
    descricao: Joi.string().messages({
        'any.required': 'É obrigatório informar uma descrição',
        'string.empty': 'É obrigatório informar uma descrição'
    }),
    status: Joi.string().valid('pendente', 'concluido').messages({
        'any.only': 'O status deve ser pendente ou concluido.',
        'any.required': 'O campo status é obrigatório.'
    }),
    dataVencimento: Joi.date().iso().messages({
        'date.base': 'A data de vencimento deve ser uma data válida.',
        'date.format': 'A data de vencimento deve estar no formato ISO (YYYY-MM-DD).',
        'any.required': 'A data de vencimento é obrigatória.'
    })
}).or('descricao', 'status', 'dataVencimento').messages({
    'object.missing': 'É necessário fornecer ao menos um campo (descrição, status ou data de vencimento) para atualizar a task'
});


module.exports = {
    taskSchema,
    updateTaskSchema
};