import express from 'express';
import { exercicio1Get, exercicio1Post, exercicio2, exercicio2Post, exercicio3, exercicio3Post, exercicio4, exercicio4Post, exercicio5, exercicio6, exercicio6Post, exercicio7, exercicio7Post, exercicio8 } from './controller/exercicios.js';

const app = express();
app.use(express.json()); //middleware que permite que o express entenda JSON - Para funcionar o método POST

//configura uma rota para o método HTTP GET na raiz do aplicativo
app.get('/', (req, res) => {
    //retorna uma resposta JSON contendo a mensagem "Olá mundo!"
    res.json({ message: 'Olá mundo!' });
});

//Query params
// inicializa na URL depois do ?
//?nome=joao
//?idade=10
//?nome=joao&idade=10

//localhost:3000/exercicio0?num1=10&num2=20
app.get('/exercicio0', (req, res) => {
    const num1 = req.query.num1 // pega o valor da requisição num1
    const num2 = req.query.num2 // pega o valor da requisição num2
    console.log(req.params)

    res.status(200).send("Hello "+ num1 + " " + num2)
})

//Peça ao usuário dois números com casas decimais (números reais), some os dois e mostre o resultado.
//localhost:3000/exercicio1/10/20
app.get('/exercicio1/:num1/:num2', exercicio1Get)
app.post('/exercicio1/', exercicio1Post)
//Peça o valor que a pessoa ganha por hora e a quantidade de horas trabalhadas no mês. Mostre quanto ela vai receber no final do mês.
//localhost:3000/exercicio2/10/20
app.get('/exercicio2/:valorHora/:cargaHoraria', exercicio2)
app.post('/exercicio2/', exercicio2Post)
//Peça o peso de 5 pessoas e calcule a média desses pesos. Mostre o resultado.
//localhost:3000/exercicio3/10/20/30/40/50
app.get('/exercicio3/:peso1/:peso2/:peso3/:peso4/:peso5', exercicio3)
app.post('/exercicio3/', exercicio3Post)
//Peça uma temperatura em graus Celsius e converta para Fahrenheit usando a fórmula:    F = (9 * C + 160) / 5
//localhost:3000/exercicio4/10
app.get('/exercicio4/:celsius', exercicio4)
app.post('/exercicio4/', exercicio4Post)
//Peça uma distância em milhas e converta para quilômetros.    (Dica: 1 milha = 1.60934 km)
//localhost:3000/exercicio5/10
app.get('/exercicio5/:milhas', exercicio5)

//Peça a duração de um evento em segundos. Mostre esse tempo em horas, minutos e segundos.
//localhost:3000/exercicio6/3600
app.get('/exercicio6/:segundos', exercicio6)
app.post('/exercicio6/', exercicio6Post)
// Peça uma distância em quilômetros e converta para metros e centímetros.
//localhost:3000/exercicio7/10
app.get('/exercicio7/:km', exercicio7)
app.post('/exercicio7/', exercicio7Post)
// Peça um número inteiro e mostre a tabuada dele (do 0 até o 10).
//localhost:3000/exercicio8/10
app.get('/exercicio8/:num', exercicio8)

//inicia o servidor Express na porta 3000 e define uma função de retorno de chamada
const PORT = 3000;
app.listen(PORT, () => {
    //Exibe uma mensagem no console quando o servidor estiver ativo
    console.log(`Servidor rodando na porta: ${PORT}`);
});
