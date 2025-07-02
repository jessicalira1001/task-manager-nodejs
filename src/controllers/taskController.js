const {insertTask, selectTasks, updateTask, selectTaskId, deleteTask } = require('../models/taskModel.js')


const listarTarefas = async (req, res) => {

     const listaDeTasks = await selectTasks();
     res.status(200).json(listaDeTasks)
}

const criarTarefa = async (req, res) => {
    
    const {id, descricao} = req.body;
    
    const newTask = await insertTask(id, descricao);
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