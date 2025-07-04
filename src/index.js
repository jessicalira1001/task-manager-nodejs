const express = require("express")
const app = express();
const rotas = require("./routes/routes")


app.get('/',(req, res) => {
    res.send("Olá, Jéssica");
});

app.use(express.json())
app.use(rotas)

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})
