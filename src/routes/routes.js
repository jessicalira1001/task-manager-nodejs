const express = require('express');
const { criarTarefa, listarTarefas, atualizarTarefa, acharTarefa, excluirTarefa} = require("../controllers/taskController")


const rotas = express.Router();

rotas.post("/task", criarTarefa);
rotas.put("/task/:id", atualizarTarefa);
rotas.get("/task", listarTarefas);
rotas.get("/task/:id", acharTarefa)
rotas.delete("/task/:id", excluirTarefa)


module.exports = rotas;