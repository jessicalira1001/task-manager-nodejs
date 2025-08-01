const ApiError= require('../utils/ApiError.js')
const {insertTask, selectTasks, selectTaskById, deleteTaskById, updateDescricaoTask, updateStatusTask, updateDataVencimentoTask, selectTaskByStatus } = require('../repositories/taskRepository.js')

const listTasks = async (status, userId) => {
    const statusValidos = ['pendente', 'concluida'];

    if(status){
        if(!statusValidos.includes(status.toLowerCase())){
            throw new ApiError(400, 'Status inválido. Os valores aceitos são: pendente e concluida.')
        }
        return await selectTaskByStatus(status.toLowerCase(), userId);
    }else{
        return await selectTasks(userId);
    }
}

const createTask = async (descricao, dataVencimento, userId) => {
    const status = "pendente";
    return await insertTask(descricao, status, dataVencimento, userId);
}

const findTaskById = async (id, userId) => {
    if(!id){
        throw new ApiError(400, 'É necessário fornecer um id para buscar uma task');
    }
    const taskExiste = await selectTaskById(id, userId);
    if(!taskExiste){
        throw new ApiError(400, 'Não existe task com o id informado');
    }
    return await selectTaskById(id, userId);
}

const setTask = async (id, descricao, status, dataVencimento, userId) => {
    if(!id || id === ""){
        throw new ApiError(400, 'É necessário um ID para atualizar uma task');
    } 
  
    const taskExiste = await selectTaskById(id, userId);
    if(!taskExiste){
        throw new ApiError(400, 'Não existe task com o id informado');
    }

    const promises = [];

    if (descricao) {
        promises.push(updateDescricaoTask(id, descricao, userId));
    }

    if (status) {
        promises.push(updateStatusTask(id, status, userId));
    }

    if (dataVencimento) {
        promises.push(updateDataVencimentoTask(id, dataVencimento, userId));
    }

    await Promise.all(promises);

}

const removeTask = async (id, userId) => {
    if(!id || id === ""){
        throw new ApiError(400, 'É necessário fornecer o ID referente a task que deseja excluir.');
    }
    const taskExiste = await selectTaskById(id, userId);
    if(!taskExiste){
        throw new ApiError(400, 'Não existe task com o id informado');
    }
    return await deleteTaskById(id, userId);
}

module.exports = {
    listTasks,
    createTask,
    findTaskById,
    setTask,
    removeTask
};