const {insertTask, selectTasks, selectTaskById, deleteTaskById, updateDescricaoTask, updateStatusTask, selectTaskByStatus } = require('../repositories/taskRepository.js')

const listTasks = async (status) => {
    if(status){
        return await selectTaskByStatus(status);
    }else{
            return await selectTasks();
    }
}

const createTask = async (id, descricao) => {
    if(!id || !descricao || id === "" || descricao === ""){
        throw new Error('É necessário um ID e uma descrição para criar uma task');
    }
    const status = "pendente";
    return await insertTask(id, descricao, status);
}

const findTaskById = async (id) => {
    return await selectTaskById(id);
}

const setTask = async (id, descricao, status) => {
    if(!id || id === ""){
        throw new Error('É necessário um ID para atualizar uma task');
    }else if((!descricao || descricao === "")&&(!status || status === "")){
        throw new Error('É necessário uma descrição ou um status para atualizar uma task');
    } else if(!status){
        return await updateDescricaoTask(id, descricao);
    } else if(!descricao){
        return await updateStatusTask(id, status)
    }
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