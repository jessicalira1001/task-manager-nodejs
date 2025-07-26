const {listTasks, createTask, findTaskById, setTask, removeTask} = require('../services/taskService.js')


const getTasks = async (req, res) => {
    try {
        const {status} = req.query;
        const listaDeTasks = await listTasks(status);
        res.status(200).json(listaDeTasks);
    } catch (error) {
        const status = error.statusCode || 500;
        const mensagem = error.message || "Erro interno no servidor";
        res.status(status).json({mensagem});
    }
}

const postTask = async (req, res) => {
    try {
        const {descricao, dataVencimento} = req.body;
        const newTask = await createTask(descricao, dataVencimento);
        res.status(201).json(newTask);
    } catch (error){
        const status = error.statusCode || 500;
        const mensagem = error.message || "Erro interno no servidor";
        res.status(status).json({mensagem});
    }
}

const getTaskById = async (req, res) => {
    try {
        const {id} = req.params;
        const taskEncontrada = await findTaskById(id);    
        res.status(200).json(taskEncontrada);
    } catch (error){
        const status = error.statusCode || 500;
        const mensagem = error.message || "Erro interno no servidor";
        res.status(status).json({mensagem});
    }
}

const putTask = async (req, res) => {
    try {
        const {id} = req.params;
        const {descricao, status} = req.body;
        const taskAtualizada = await setTask(id, descricao,status);
        res.status(200).json(taskAtualizada);
    } catch (error){
        const status = error.statusCode || 500;
        const mensagem = error.message || "Erro interno no servidor";
        res.status(status).json({mensagem});
    }
}

const deleteTask = async (req, res) => {
    try {
        const {id} = req.params;
        const taskExcluida = await removeTask(id);
        res.status(200).json(taskExcluida);
    } catch (error){
        const status = error.statusCode || 500;
        const mensagem = error.message || "Erro interno no servidor";
        res.status(status).json({mensagem});
    }
}

module.exports = {
    getTasks,
    postTask,
    putTask,
    getTaskById,
    deleteTask
};