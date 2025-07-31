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
    const status = "pendente";
    return await insertTask(descricao, status, dataVencimento);
}

const findTaskById = async (id) => {
    if(!id){
        throw new ApiError(400, 'É necessário fornecer um id para buscar uma task');
    }
    const taskExiste = await selectTaskById(id);
    if(!taskExiste){
        throw new ApiError(400, 'Não existe task com o id informado');
    }
    return await selectTaskById(id);
}

const setTask = async (id, descricao, status) => {
    if(!id || id === ""){
        throw new ApiError(400, 'É necessário um ID para atualizar uma task');
    } 
  
    const taskExiste = await selectTaskById(id);
    if(!taskExiste){
        throw new ApiError(400, 'Não existe task com o id informado');
    }

    if(!status){
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
    const taskExiste = await selectTaskById(id);
    if(!taskExiste){
        throw new ApiError(400, 'Não existe task com o id informado');
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