const express = require('express');
const { postLogin} = require("../controllers/authController")

const rotasAuth = express.Router();

rotasAuth.post("/login", postLogin);

module.exports = rotasAuth;