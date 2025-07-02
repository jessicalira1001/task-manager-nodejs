const tarefasTeste = require("../bdTeste")
//const client = require('../config/conexao.js')
const {insertTask, selectTasks, updateTask, selectTaskId, deleteTask } = require('../models/taskModel.js')
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

const atualizarTarefa = async (req, res) => {
    const {id} = req.params;

    const {descricao} = req.body;

    const taskAtualizada = await updateTask(descricao, id);
    res.status(201).json(taskAtualizada);
    
}

const acharTarefa = async (req, res) => {
    const {id} = req.params;

    const taskEncontrada = await selectTaskId(id);
        
    res.status(200).json(taskEncontrada);
}

const excluirTarefa = async (req, res) => {
    const {id} = req.params;

    const taskExcluida = await deleteTask(id);

    res.status(200).json(taskExcluida);
}

module.exports = {
    listarTarefas,
    criarTarefa,
    atualizarTarefa,
    acharTarefa,
    excluirTarefa
};