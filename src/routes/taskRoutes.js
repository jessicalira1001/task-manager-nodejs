const express = require('express');
const { postTask, getTasks, putTask, getTaskById, deleteTask} = require("../controllers/taskController")
const checkUserLoggedIn = require("../middlewares/authMiddleware")

const rotasTask = express.Router();

rotasTask.post("/task", checkUserLoggedIn, postTask);
rotasTask.put("/task/:id", checkUserLoggedIn, putTask);
rotasTask.get("/task", checkUserLoggedIn, getTasks);
rotasTask.get("/task/:id", checkUserLoggedIn, getTaskById)
rotasTask.delete("/task/:id", checkUserLoggedIn, deleteTask)



module.exports = rotasTask;