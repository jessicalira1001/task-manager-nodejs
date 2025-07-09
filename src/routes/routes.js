const express = require('express');
const { postTask, getTasks, putTask, getTaskById, deleteTask} = require("../controllers/taskController")

const rotas = express.Router();

rotas.post("/task", postTask);
rotas.put("/task/:id", putTask);
rotas.get("/task", getTasks);
rotas.get("/task/:id", getTaskById)
rotas.delete("/task/:id", deleteTask)


module.exports = rotas;