const express = require('express');
const { postTask, getTasks, putTask, getTaskById, deleteTask} = require("../controllers/taskController")
const checkUserLoggedIn = require("../middlewares/authMiddleware")

const rotasTask = express.Router();

rotasTask.use(checkUserLoggedIn)

rotasTask.post("/task", postTask);
rotasTask.put("/task/:id", putTask);
rotasTask.get("/task", getTasks);
rotasTask.get("/task/:id", getTaskById)
rotasTask.delete("/task/:id", deleteTask)



module.exports = rotasTask;