const {insertTask, selectTasks, updateTask, selectTaskById, deleteTaskById } = require('../repositories/taskRepository.js')

const listTasks = async () => {
    console.log("Passei em Service")
    return await selectTasks();
    
}

const createTask = async (id, descricao) => {
    if(!id || !descricao || id === "" || descricao === ""){
        throw new Error('É necessário um ID e uma descrição para criar uma task');
    }
    return await insertTask(id, descricao);
}

const findTaskById = async (id) => {
    return await selectTaskById(id);
}

const setTask = async (id, descricao) => {
    if(!id || !descricao || id === "" || descricao === ""){
        throw new Error('É necessário um ID e uma descrição para atualizar uma task');
    }
    return await updateTask(id, descricao);
}

const removeTask = async (id) => {
    if(!id || id === ""){
        throw new Error('É necessário um ID');
    }
    return await deleteTaskById(id);
}

module.exports = {
    listTasks,
    createTask,
    findTaskById,
    setTask,
    removeTask
}