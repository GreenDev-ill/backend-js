class ServiceExercicio{
    Somar(num1, num2) {
        if (isNaN(num1) || isNaN(num2)){
            throw new Error("Favor informar um número.")
        }
        const num1Int = num1 * 100;
        const num2Int = num2 * 100;
        const result = num1Int + num2Int;

        return result/100;

    }

    Salario (valorHora, cargaHoraria) {
        const x = valorHora*10000;
        const y = cargaHoraria*10000;
        const result = (x*y)/100000000;
        return result;
    }

    Media5Pesos (peso1, peso2, peso3, peso4, peso5) {
        return (peso1 + peso2 + peso3 + peso4 + peso5) / 5;
        //fazer demais validações
    }

    CelsiusToFahrenheit(celsius) {
        return (9 * celsius + 160) / 5;
    }

    MilhasToKm(milhas) {
        return milhas * 1.60934;
    }
}
export default new ServiceExercicio() //fazer a instanciação automática