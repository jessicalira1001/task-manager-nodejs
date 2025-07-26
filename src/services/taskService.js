const ApiError= require('../utils/ApiError.js')
const {insertTask, selectTasks, selectTaskById, deleteTaskById, updateDescricaoTask, updateStatusTask, selectTaskByStatus } = require('../repositories/taskRepository.js')

const listTasks = async (status) => {
    const statusValidos = ['pendente', 'concluida'];

    if(status){
        if(!statusValidos.includes(status.toLowerCase())){
            throw new ApiError(400, 'Status inválido. Os valores aceitos são: pendente e concluida.')
        }
        return await selectTaskByStatus(status.toLowerCase());
    }else{
        return await selectTasks();
    }
}

const createTask = async (descricao, dataVencimento) => {
    if(!descricao || descricao === "" || !dataVencimento || dataVencimento === ""){
        throw new ApiError(400, 'É necessário fornecer uma descrição e uma data de vencimento para criar uma task');
    }

    const status = "pendente";
    return await insertTask(descricao, status, dataVencimento);
}

const findTaskById = async (id) => {
    if(!id){
        throw new ApiError(400, 'É necessário fornecer um id para buscar uma task');
    }
    return await selectTaskById(id);
}

const setTask = async (id, descricao, status) => {
    if(!id || id === ""){
        throw new ApiError(400, 'É necessário um ID para atualizar uma task');
    }else if((!descricao || descricao === "")&&(!status || status === "")){
        throw new ApiError(400, 'É necessário uma descrição ou um status para atualizar uma task');
    } else if(!status){
        return await updateDescricaoTask(id, descricao);
    } else if(!descricao){
        return await updateStatusTask(id, status)
    } else {
        return await updateDescricaoTask(id, descricao).then(() => updateStatusTask(id, status));
    }
}

const removeTask = async (id) => {
    if(!id || id === ""){
        throw new ApiError(400, 'É necessário fornecer o ID referente a task que deseja excluir.');
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