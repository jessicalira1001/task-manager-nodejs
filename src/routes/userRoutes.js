const express = require("express");
const {postUser} = require("../controllers/userController")

const rotas = express.Router();

rotas.post("/user", postUser)