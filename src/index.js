import express from 'express';
import router from "./routes/exercicios.js"

const app = express();
app.use(express.json()); //middleware que permite que o express entenda JSON - Para funcionar o método POST

app.use(router)

//inicia o servidor Express na porta 3000 e define uma função de retorno de chamada
const PORT = 3000;
app.listen(PORT, () => {
    //Exibe uma mensagem no console quando o servidor estiver ativo
    console.log(`Servidor rodando na porta: ${PORT}`);
});
