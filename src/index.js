require('dotenv').config();
const express = require("express")
const app = express();
const rotasTask = require("./routes/taskRoutes")
const rotasUser = require("./routes/userRoutes")
const rotasAuth = require("./routes/authRoutes")

app.get('/',(req, res) => {
    res.send("Olá, Mundo");
});

app.use(express.json())
app.use(rotasTask)
app.use(rotasUser)
app.use(rotasAuth)

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor rodando na porta 3000")
})
