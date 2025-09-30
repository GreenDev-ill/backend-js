import {describe,it,expect} from '@jest/globals'
import {celsiusToFahrenheit, media5Pesos, milhasToKm, salario, somar} from '../services/exercicios'

describe('Testando função somar',()=>{
    it('Somando dois números positivos',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = somar(1,2)
        expect(resultado).toBe(3)
    }) 
    it('Somando dois números positivos com vírgula',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = somar(1.0001,2.0002)
        expect(resultado).toBe(3.0003)
    }) 
    it('Somando dois números negativos',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = somar(-5,-10)
        expect(resultado).toBe(-15)
    })
    it('Somando dois números positivos grandes',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = somar(1000000000000,1000000000000)
        expect(resultado).toBe(2000000000000)
    }) 
})

describe('Testando função salario (multiplicação)',()=>{
    it('Multiplicando dois números positivos',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = salario(1,2)
        expect(resultado).toBe(2)
    }) 
    it('Multiplicando dois números positivos com vírgula',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = salario(3.0001,2.0002)
        expect(resultado).toBe(6.00080002)
    }) 
    it('Multiplicando um número negativo e outro positivo',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = salario(-50,10)
        expect(resultado).toBe(-500)
    })
    it('Multiplicando dois números positivos grandes',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = salario(20000000,20000000)
        expect(resultado).toBe(400000000000000)
    }) 
})

describe('Testando função media5Pesos',()=>{
    it('Testando 5 pesos positivos',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = media5Pesos(1,2,3,4,5)
        expect(resultado).toBe(3)
    }) 
    it('Testando 5 pesos positivos com virgula',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = media5Pesos(1.1,2.2,3.3,4.4,5.5)
        expect(resultado).toBe(3.3)
    }) 
    it('Testando 5 pesos positivo e negativos',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = media5Pesos(-10,10,-20,20,30)
        expect(resultado).toBe(6)
    })
    it('Testando 5 pesos positivos e grandes',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = media5Pesos(10000000000,20000000000,30000000000,40000000000,50000000000)
        expect(resultado).toBe(30000000000)
    }) 
})

describe('Testando função celsiusToFahrenheit',()=>{
    it('Testando 30 graus celsius',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = celsiusToFahrenheit(30)
        expect(resultado).toBe(86)
    }) 
    it('Testando 0 graus celsius',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = celsiusToFahrenheit(0)
        expect(resultado).toBe(32)
    }) 
    it('Testando -30 graus celsius',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = celsiusToFahrenheit(-30)
        expect(resultado).toBe(-22)
    }) 
})

describe('Testando função milhasToKm',()=>{
    it('Testando 30 milhas',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = milhasToKm(30)
        expect(resultado).toBe(48.2802)
    }) 
    it('Testando 62,13727366498068 milhas',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = milhasToKm(62.13727366498068)
        expect(resultado).toBe(100)
    }) 
    it('Testando -100 milhas',()=>{ //ser bem explicito nos nomes, para melhor compreensão
        const resultado = milhasToKm(-100)
        expect(resultado).toBe(-160.934)
    }) 
})