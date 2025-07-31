const express = require('express');
const { postTask, getTasks, putTask, getTaskById, deleteTask} = require("../controllers/taskController")
const checkUserLoggedIn = require("../middlewares/authMiddleware")
const validateSchema = require('../middlewares/validateSchema')
const {taskSchema, updateTaskSchema} = require('../schemas/taskSchema');

const rotasTask = express.Router();

rotasTask.post("/task", checkUserLoggedIn, validateSchema(taskSchema), postTask);
rotasTask.put("/task/:id", checkUserLoggedIn, validateSchema(updateTaskSchema), putTask);
rotasTask.get("/task", checkUserLoggedIn, getTasks);
rotasTask.get("/task/:id", checkUserLoggedIn, getTaskById)
rotasTask.delete("/task/:id", checkUserLoggedIn, deleteTask)



module.exports = rotasTask;