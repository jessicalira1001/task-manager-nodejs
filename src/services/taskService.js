const {insertTask, selectTasks, updateTask, selectTaskById, deleteTaskById } = require('../repositories/taskRepository.js')

const listTasks = async () => {
    return await selectTasks();
}

const createTask = async (id, descricao, status) => {
    if(!id || !descricao || id === "" || descricao === ""){
        throw new Error('É necessário um ID e uma descrição para criar uma task');
    }
    return await insertTask(id, descricao, status);
}

const findTaskById = async (id) => {
    return await selectTaskById(id);
}

const setTask = async (id, descricao, status) => {
    if(!id || !descricao || id === "" || descricao === ""){
        throw new Error('É necessário um ID para atualizar uma task');
    }
    /*
    if((!descricao || descricao === "")&&(!status || status === "")){
        throw new Error('É necessário uma descrição ou um status para atualizar uma task');
    }
    */
    return await updateTask(id, descricao, status);
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
};