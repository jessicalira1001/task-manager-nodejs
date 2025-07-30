const express = require("express");
const {postUser} = require("../controllers/userController")
const validateSchema = require('../middlewares/validateSchema')
const {userSchema} = require('../schemas/userSchema')


const rotasUser = express.Router();

rotasUser.post("/user", validateSchema(userSchema), postUser)


module.exports = rotasUser;