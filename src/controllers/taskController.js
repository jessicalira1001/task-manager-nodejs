const tarefasTeste = require("../bdTeste")

const listarTarefas = (req, res) => {
    res.send(tarefasTeste);
}

module.exports = listarTarefas;