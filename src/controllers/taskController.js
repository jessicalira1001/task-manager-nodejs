const tarefasTeste = require("../bdTeste")

const listarTarefas = (req, res) => {
    res.send(tarefasTeste);
}

const criarTarefa = (req, res) => {
    
    const {id, descricao} = req.body;

    tarefasTeste.push({id, descricao})

    res.status(201).json({ id, descricao });
}

const atualizarTarefa = (req, res) => {
    const {id} = req.params;

    const {descricao} = req.body;

    const objeto = tarefasTeste.find(item => item.id === parseInt(id, 10));
        if (objeto) {
            objeto.descricao = descricao; 
        }
    res.status(200).json(objeto);
    
}

module.exports = {
    listarTarefas,
    criarTarefa,
    atualizarTarefa
};