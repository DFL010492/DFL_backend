// importa o cliente do mongo db
const { MogoClient, MongoClient } = require('mongodb');

// string de conexão
const url = "";

const client = new MongoClient(url);

async function conectar() {
    try {
        await client.connect();
        console.log("Conectado")
        return client.db("agendo");
    } catch(e) {
        console.log("Erro ao conectar ao MongoDB",e.message);
    }
    
}

module.exports = conectar