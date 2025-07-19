const express = require("express");
const {postUser} = require("../controllers/userController")

const rotasUser = express.Router();

rotasUser.post("/user", postUser)


module.exports = rotasUser;