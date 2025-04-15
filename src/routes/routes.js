const express = require('express');

const rotas = express.Router();

rotas.post("/task");
rotas.put("/task/:id?");
rotas.get("/task");
rotas.get("/task/:id?")
rotas.delete("/task/:id?")


module.exports = rotas;