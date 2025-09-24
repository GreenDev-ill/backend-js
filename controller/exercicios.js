import { somar } from '../services/exercicios.js'

export const exercicio1Get = (req, res) => {
    const num1 = req.params.num1   // pega o valor do parametro num1
    const num2 = req.params.num2   // pega o valor do parametro num2
    console.log(req.params)
    const result = somar(num1, num2)
    res.status(200).send("Resultado "+ result)
}

export const exercicio1Post = (req, res) => {
    const num1 = req.body.num1   // pega o valor do parametro num1
    const num2 = req.body.num2   // pega o valor do parametro num2
    console.log(req.body)
    const result = somar(num1, num2)
    res.status(200).send({
        msg: "Resultado: "+ result,
        data: result,
        error: null
    })
}

export const exercicio2 = (req, res) => {
    const { valorHora, cargaHoraria } = req.params
    res.status(200).send("O salário bruto é de: R$" + (Number(valorHora) * Number(cargaHoraria)))
}

export const exercicio3 = (req, res) => {
    const peso1 = parseFloat(req.params.peso1)
    const peso2 = parseFloat(req.params.peso2)
    const peso3 = parseFloat(req.params.peso3)
    const peso4 = parseFloat(req.params.peso4)
    const peso5 = parseFloat(req.params.peso5)
    const media = (peso1 + peso2 + peso3 + peso4 + peso5) / 5
    res.status(200).send("A média dos pesos é: " + media)
}

export const exercicio4 = (req, res) => {
    const celsius = parseFloat(req.params.celsius)
    const fahrenheit = (9 * celsius + 160) / 5
    res.status(200).send(celsius + "°C é igual a " + fahrenheit + "°F")
}

export const exercicio5 = (req, res) => {
    const milhas = parseFloat(req.params.milhas)
    const km = milhas * 1.60934
    res.status(200).send(milhas + " milhas é igual a " + km + " km")
}

//Peça a duração de um evento em segundos. Mostre esse tempo em horas, minutos e segundos.
export const exercicio6 = (req, res) => {
    const segundos = parseInt(req.params.segundos)
    const horas = Math.floor(segundos / 3600)
    const minutos = Math.floor((segundos % 3600) / 60)
    const seg = segundos % 60
    res.status(200).send(`${segundos} segundos é igual a ${horas} horas, ${minutos} minutos e ${seg} segundos`)
}
// Peça uma distância em quilômetros e converta para metros e centímetros.
export const exercicio7 = (req, res) => {
    const km = parseFloat(req.params.km)
    const metros = km * 1000
    const centimetros = metros * 100
    res.status(200).send(`${km} km é igual a ${metros} metros e ${centimetros} centímetros`)
}

// Peça um número inteiro e mostre a tabuada dele (do 0 até o 10).
export const exercicio8 = (req, res) => {
    const num = parseInt(req.params.num)
    let tabuada = ''
    for (let i = 0; i <= 10; i++) {
        tabuada += `${num} x ${i} = ${num * i}\n`
    }
    res.status(200).send(`Tabuada do ${num}:\n${tabuada}`)
}