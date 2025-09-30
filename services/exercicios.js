export function somar(num1, num2) {
    const num1Int = num1 * 100;
    const num2Int = num2 * 100;
    const result = num1Int + num2Int;

    return result/100;

}

export function salario (valorHora, cargaHoraria) {
    const x = valorHora*10000;
    const y = cargaHoraria*10000;
    const result = (x*y)/100000000;
    return result;
}

export function media5Pesos (peso1, peso2, peso3, peso4, peso5) {
    return (peso1 + peso2 + peso3 + peso4 + peso5) / 5;
    //fazer demais validações
}

export function celsiusToFahrenheit(celsius) {
    return (9 * celsius + 160) / 5;
}

export function milhasToKm(milhas) {
    return milhas * 1.60934;
}