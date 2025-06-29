const express = require('express');
const listarTarefas = require("../controllers/taskController")

const rotas = express.Router();

//rotas.post("/task");
//rotas.put("/task/:id?");
rotas.get("/task", listarTarefas);
//rotas.get("/task/:id?")
//rotas.delete("/task/:id?")


module.exports = rotas;