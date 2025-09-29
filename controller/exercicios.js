import { milhasToKm, somar, salario, media5Pesos, celsiusToFahrenheit } from '../services/exercicios.js'

//1. Peça ao usuário dois números com casas decimais (números reais), some os dois e mostre o resultado.
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
//Peça o valor que a pessoa ganha por hora e a quantidade de horas trabalhadas no mês. Mostre quanto ela vai receber no final do mês.
export const exercicio2 = (req, res) => {
    const { valorHora, cargaHoraria } = req.params
    res.status(200).send("O salário bruto é de: R$" + (Number(valorHora) * Number(cargaHoraria)))
}

export const exercicio2Post = (req, res) => {
    const valorHora = req.body.valorHora   // pega o valor do parametro valorHora
    const cargaHoraria = req.body.cargaHoraria   // pega o valor do parametro cargaHoraria
    console.log(req.body)
    const result = valorHora * cargaHoraria;
    res.status(200).send({
        msg: "Resultado: "+ result,
        data: result,
        error: null
    })
}

//3. Peça o peso de 5 pessoas e calcule a média desses pesos. Mostre o resultado.
export const exercicio3 = (req, res) => {
    const peso1 = parseFloat(req.params.peso1)
    const peso2 = parseFloat(req.params.peso2)
    const peso3 = parseFloat(req.params.peso3)
    const peso4 = parseFloat(req.params.peso4)
    const peso5 = parseFloat(req.params.peso5)
    const media = (peso1 + peso2 + peso3 + peso4 + peso5) / 5
    res.status(200).send("A média dos pesos é: " + media)
}

export const exercicio3Post = (req, res) => {
    const peso1 = parseFloat(req.body.peso1)
    const peso2 = parseFloat(req.body.peso2)
    const peso3 = parseFloat(req.body.peso3)
    const peso4 = parseFloat(req.body.peso4)
    const peso5 = parseFloat(req.body.peso5)
    const media = media5Pesos(peso1, peso2, peso3, peso4, peso5)
    res.status(200).send({
        msg: "Resultado: "+ media,
        data: media,
        error: null
    })
}
//Peça uma temperatura em graus Celsius e converta para Fahrenheit usando a fórmula:    F = (9 * C + 160) / 5
export const exercicio4 = (req, res) => {
    const celsius = parseFloat(req.params.celsius)
    const fahrenheit = celsiusToFahrenheit(celsius);
    res.status(200).send(celsius + "°C é igual a " + fahrenheit + "°F")
}
export const exercicio4Post = (req, res) => {
    const celsius = parseFloat(req.body.celsius)
    const fahrenheit = celsiusToFahrenheit(celsius);
    res.status(200).send({
        msg: "Resultado: "+ fahrenheit,
        data: fahrenheit,
        error: null
    })
}

//5. Peça uma distância em milhas e converta para quilômetros.    (Dica: 1 milha = 1.60934 km)
export const exercicio5 = (req, res) => {
    const milhas = parseFloat(req.params.milhas)
    const km = milhas * 1.60934
    res.status(200).send(milhas + " milhas é igual a " + km + " km")
}
export const exercicio5Post = (req, res) => {
    const milhas = parseFloat(req.body.milhas)
    console.log(req.body)
    const result = milhasToKm(milhas);
    res.status(200).send({
        msg: "Resultado: "+ result,
        data: result,
        error: null
    })
}

//Peça a duração de um evento em segundos. Mostre esse tempo em horas, minutos e segundos.
export const exercicio6 = (req, res) => {
    const segundos = parseInt(req.params.segundos)
    const horas = Math.floor(segundos / 3600)
    const minutos = Math.floor((segundos % 3600) / 60)
    const seg = segundos % 60
    res.status(200).send(`${segundos} segundos é igual a ${horas} horas, ${minutos} minutos e ${seg} segundos`)
}
export const exercicio6Post = (req, res) => {
    const segundos = parseInt(req.params.segundos)
    const horas = Math.floor(segundos / 3600)
    const minutos = Math.floor((segundos % 3600) / 60)
    const seg = segundos % 60
    res.status(200).send({
        msg: "Resultado: "+ horas + " horas, " + minutos + " minutos e " + seg + " segundos",
        data: { horas, minutos, seg },
        error: null
    })
}

// Peça uma distância em quilômetros e converta para metros e centímetros.
export const exercicio7 = (req, res) => {
    const km = parseFloat(req.params.km)
    const metros = km * 1000
    const centimetros = metros * 100
    res.status(200).send(`${km} km é igual a ${metros} metros e ${centimetros} centímetros`)
}
// Peça uma distância em quilômetros e converta para metros e centímetros.
export const exercicio7Post = (req, res) => {
    const km = parseFloat(req.params.km)
    const metros = km * 1000
    const centimetros = metros * 100

    res.status(200).send({
        msg: "Resultado: "+ km + " kilometros = " + metros + " metros e " + centimetros + " centímetros.",
        data: { km, metros, centimetros },
        error: null
    })
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