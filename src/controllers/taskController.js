const {listTasks, createTask, findTaskById, setTask, removeTask} = require('../services/taskService.js')


const getTasks = async (req, res) => {
    const {status} = req.query;
    const listaDeTasks = await listTasks(status);
    res.status(200).json(listaDeTasks);
}

const postTask = async (req, res) => {
    const {id, descricao, dataVencimento} = req.body;
    const newTask = await createTask(id, descricao, dataVencimento);
    res.status(201).json(newTask);
}

const getTaskById = async (req, res) => {
    const {id} = req.params;
    const taskEncontrada = await findTaskById(id);    
    res.status(200).json(taskEncontrada);
}

const putTask = async (req, res) => {
    const {id} = req.params;
    const {descricao, status} = req.body;
    const taskAtualizada = await setTask(id, descricao,status);
    res.status(201).json(taskAtualizada);
}

const deleteTask = async (req, res) => {
    const {id} = req.params;
    const taskExcluida = await removeTask(id);
    res.status(200).json(taskExcluida);
}

module.exports = {
    getTasks,
    postTask,
    putTask,
    getTaskById,
    deleteTask
};