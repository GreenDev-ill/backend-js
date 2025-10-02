import express from 'express'
import controllerExercicio from '../controller/exercicios.js'

const router = express.Router()

//configura uma rota para o método HTTP GET na raiz do aplicativo
router.get('/', (req, res) => {
    //retorna uma resposta JSON contendo a mensagem "Olá mundo!"
    res.json({ message: 'Olá mundo!' });
});

//Query params
// inicializa na URL depois do ?
//?nome=joao
//?idade=10
//?nome=joao&idade=10

//localhost:3000/exercicio0?num1=10&num2=20
router.get('/exercicio0', (req, res) => {
    const num1 = req.query.num1 // pega o valor da requisição num1
    const num2 = req.query.num2 // pega o valor da requisição num2
    console.log(req.params)

    res.status(200).send("Hello "+ num1 + " " + num2)
})

//Peça ao usuário dois números com casas decimais (números reais), some os dois e mostre o resultado.
//localhost:3000/exercicio1/10/20
router.get('/exercicio1/:num1/:num2', controllerExercicio.Exercicio1Get)
router.post('/exercicio1/', controllerExercicio.Exercicio1Post)
//Peça o valor que a pessoa ganha por hora e a quantidade de horas trabalhadas no mês. Mostre quanto ela vai receber no final do mês.
//localhost:3000/exercicio2/10/20
router.get('/exercicio2/:valorHora/:cargaHoraria', controllerExercicio.Exercicio2)
router.post('/exercicio2/', controllerExercicio.Exercicio2Post)
//Peça o peso de 5 pessoas e calcule a média desses pesos. Mostre o resultado.
//localhost:3000/exercicio3/10/20/30/40/50
router.get('/exercicio3/:peso1/:peso2/:peso3/:peso4/:peso5', controllerExercicio.Exercicio3)
router.post('/exercicio3/', controllerExercicio.Exercicio3Post)
//Peça uma temperatura em graus Celsius e converta para Fahrenheit usando a fórmula:    F = (9 * C + 160) / 5
//localhost:3000/exercicio4/10
router.get('/exercicio4/:celsius', controllerExercicio.Exercicio4)
router.post('/exercicio4/', controllerExercicio.Exercicio4Post)
//Peça uma distância em milhas e converta para quilômetros.    (Dica: 1 milha = 1.60934 km)
//localhost:3000/exercicio5/10
router.get('/exercicio5/:milhas', controllerExercicio.Exercicio5)
router.post('/exercicio5/', controllerExercicio.Exercicio5Post)


export default router;