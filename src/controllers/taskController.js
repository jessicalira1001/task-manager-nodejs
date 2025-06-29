const tarefasTeste = require("../bdTeste")

const listarTarefas = (req, res) => {
    res.send(tarefasTeste);
}

const criarTarefa = (req, res) => {
    
    const {id, descricao} = req.body;

    tarefasTeste.push({id, descricao})

    res.status(201).json({ id, descricao });
}

module.exports = {
    listarTarefas,
    criarTarefa
};