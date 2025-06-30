const tarefasTeste = require("../bdTeste")
const client = require('../config/conexao.js')
const selectTasks = require('../models/taskModel.js')

const listarTarefas = async (req, res) => {
     const listaDeTasks = await selectTasks();
     console.log("Aqui é controller")
     console.log(listaDeTasks)
     res.status(200).json(listaDeTasks)
}

const criarTarefa = (req, res) => {
    
    const {id, descricao} = req.body;

    tarefasTeste.push({id, descricao})

    res.status(201).json({ id, descricao });
}

const atualizarTarefa = (req, res) => {
    const {id} = req.params;

    const {descricao} = req.body;

    const objeto = tarefasTeste.find(item => item.id === parseInt(id, 10));
        if (objeto) {
            objeto.descricao = descricao; 
        }
    res.status(200).json(objeto);
    
}

const acharTarefa = (req, res) => {
    const {id} = req.params;

    const objeto = tarefasTeste.find(item => item.id === parseInt(id, 10));
        
    res.status(200).json(objeto.descricao);
}

const excluirTarefa = (req, res) => {
    const {id} = req.params;

    const indexToRemove = tarefasTeste.findIndex(item => item.id === parseInt(id, 10));

    if (indexToRemove !== -1) {
        tarefasTeste.splice(indexToRemove, 1);
    }

    res.status(200).json({});
}

module.exports = {
    listarTarefas,
    criarTarefa,
    atualizarTarefa,
    acharTarefa,
    excluirTarefa
};