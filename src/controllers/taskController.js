const tarefasTeste = require("../bdTeste")
//const client = require('../config/conexao.js')
const {insertTask, selectTasks } = require('../models/taskModel.js')
//const = require('../models/taskModel.js')

const listarTarefas = async (req, res) => {
     const listaDeTasks = await selectTasks();
     console.log("Aqui é controller")
     console.log(listaDeTasks)
     res.status(200).json(listaDeTasks)
}

const criarTarefa = async (req, res) => {
    console.log("Passei aqui no controler antes de chamar a insertTask")
    const {id, descricao} = req.body;
    console.log(id)
    console.log(descricao)
    const newTask = await insertTask(id, descricao);
    console.log(newTask)
    res.status(201).json(newTask);
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