//const { updateTask,  deleteTask } = require('../repositories/taskRepository.js')
const {listTasks, createTask, findTaskById, setTask, removeTask} = require('../services/taskService.js')

const getTasks = async (req, res) => {
    console.log("Passei em controller")
     const listaDeTasks = await listTasks();
     res.status(200).json(listaDeTasks)
     
}

const postTask = async (req, res) => {
    
    const {id, descricao} = req.body;
    
    const newTask = await createTask(id, descricao);
    res.status(201).json(newTask);
}

const getTaskById = async (req, res) => {

    const {id} = req.params;

    const taskEncontrada = await findTaskById(id);    
    res.status(200).json(taskEncontrada);
}

const putTask = async (req, res) => {

    const {id} = req.params;
    const {descricao} = req.body;

    const taskAtualizada = await setTask(descricao, id);
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