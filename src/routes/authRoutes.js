const express = require('express');
const { postLogin} = require("../controllers/authController")
const validateSchema = require('../middlewares/validateSchema')
const {authSchema} = require('../schemas/authSchema')

const rotasAuth = express.Router();

rotasAuth.post("/login",validateSchema(authSchema), postLogin);

module.exports = rotasAuth;