//import { milhasToKm, somar, salario, media5Pesos, celsiusToFahrenheit } from '../services/exercicios.js'
import serviceExercicio from "../services/exercicios.js"

class ControllerExercicio{
//1. Peça ao usuário dois números com casas decimais (números reais), some os dois e mostre o resultado.
Exercicio1Get (req,res) {
    const num1 = req.params.num1   // pega o valor do parametro num1
    const num2 = req.params.num2   // pega o valor do parametro num2
    console.log(req.params)
    const result = serviceExercicio.Somar(num1, num2)
    res.status(200).send("Resultado "+ result)
}

Exercicio1Post (req,res) {
    try {
        const num1 = req.body.num1   // pega o valor do parametro num1
        const num2 = req.body.num2   // pega o valor do parametro num2
        console.log(req.body)
        const result = serviceExercicio.Somar(num1, num2)
        res.status(200).send({
            msg: "Resultado: "+ result,
            data: result,
            error: null
        })
    } catch (error) {
        res.status(400).send({
            msg: error.message,
            data: null,
            error: true //para um código mais padronizado par ao front-end o melhor seria algo tipo NOT_FOUND_ERROR
        })
    }

}
//Peça o valor que a pessoa ganha por hora e a quantidade de horas trabalhadas no mês. Mostre quanto ela vai receber no final do mês.
Exercicio2 (req,res) {
    const { valorHora, cargaHoraria } = req.params
    res.status(200).send("O salário bruto é de: R$" + (Number(valorHora) * Number(cargaHoraria)))
}

Exercicio2Post (req,res) {
    const valorHora = req.body.valorHora   // pega o valor do parametro valorHora
    const cargaHoraria = req.body.cargaHoraria   // pega o valor do parametro cargaHoraria
    console.log(req.body)
    const result = serviceExercicio.Salario(valorHora,cargaHoraria);
    res.status(200).send({
        msg: "Resultado: "+ result,
        data: result,
        error: null
    })
}

//3. Peça o peso de 5 pessoas e calcule a média desses pesos. Mostre o resultado.
Exercicio3 (req,res) {
    const peso1 = parseFloat(req.params.peso1)
    const peso2 = parseFloat(req.params.peso2)
    const peso3 = parseFloat(req.params.peso3)
    const peso4 = parseFloat(req.params.peso4)
    const peso5 = parseFloat(req.params.peso5)
    const media = (peso1 + peso2 + peso3 + peso4 + peso5) / 5
    res.status(200).send("A média dos pesos é: " + media)
}

Exercicio3Post (req,res) {
    const peso1 = parseFloat(req.body.peso1)
    const peso2 = parseFloat(req.body.peso2)
    const peso3 = parseFloat(req.body.peso3)
    const peso4 = parseFloat(req.body.peso4)
    const peso5 = parseFloat(req.body.peso5)
    const media = serviceExercicio.Media5Pesos(peso1, peso2, peso3, peso4, peso5)
    res.status(200).send({
        msg: "Resultado: "+ media,
        data: media,
        error: null
    })
}
//Peça uma temperatura em graus Celsius e converta para Fahrenheit usando a fórmula:    F = (9 * C + 160) / 5
Exercicio4 (req,res) {
    const celsius = parseFloat(req.params.celsius)
    const fahrenheit = serviceExercicio.CelsiusToFahrenheit(celsius);
    res.status(200).send(celsius + "°C é igual a " + fahrenheit + "°F")
}
Exercicio4Post (req,res) {
    const celsius = parseFloat(req.body.celsius)
    const fahrenheit = serviceExercicio.CelsiusToFahrenheit(celsius);
    res.status(200).send({
        msg: "Resultado: "+ fahrenheit,
        data: fahrenheit,
        error: null
    })
}

//5. Peça uma distância em milhas e converta para quilômetros.    (Dica: 1 milha = 1.60934 km)
Exercicio5 (req,res) {
    const milhas = parseFloat(req.params.milhas)
    const km = milhas * 1.60934
    res.status(200).send(milhas + " milhas é igual a " + km + " km")
}
Exercicio5Post (req,res) {
    const milhas = parseFloat(req.body.milhas)
    console.log(req.body)
    const result = serviceExercicio.MilhasToKm(milhas);
    res.status(200).send({
        msg: "Resultado: "+ result,
        data: result,
        error: null
    })
}

}

export default new ControllerExercicio()