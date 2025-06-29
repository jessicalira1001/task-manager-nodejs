const express = require('express');
const { criarTarefa, listarTarefas, atualizarTarefa} = require("../controllers/taskController")


const rotas = express.Router();

rotas.post("/task", criarTarefa);
rotas.put("/task/:id", atualizarTarefa);
rotas.get("/task", listarTarefas);
//rotas.get("/task/:id?")
//rotas.delete("/task/:id?")


module.exports = rotas;