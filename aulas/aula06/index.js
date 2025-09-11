//importa framework
const express = require("express")

//importa middleware de terceiros
const cors = require('cors')

const router = require('./router');

// criar uma instancia da aplicação
const app = express();

//middleware embutido ou integrado
app.use(express.json());
app.use(express.urlencoded({ extended: false})); // ?param1=valor1&param2=valor2...

//middleware de terceiros
app.use(cors())

//middleware de aplicação
app.use((req, res, next)=> {
    console.log("Passei pelo middleware de app");
    next();
})

app.use('/tarefas', router);

// criar um middleware roteamento
app.get('/', (req, res)=> {
    res.send("olá");
})

//middleware de erro
app.use((err, req, res, next)=>{
    res.status(500).send(err.message);
})

//iniciar a aplicação em uma porta
app.listen(3000, () =>{
    console.log("App está on!");
})