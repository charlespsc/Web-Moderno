// Exercícios - Curso Fundamentos de Programação

// 2 - Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias (considere 365 dias no ano).
/*
Exemplos:
converterIdadeEmAnosParaDias(25) // retornará 9125
converterIdadeEmAnosParaDias(70) // retornará 25550
*/

// Resolução

function converterIdadeEmAnosParaDias(idadeEmAnos) {
    const diasDoAno = 365
    return diasDoAno * idadeEmAnos
}

console.log(converterIdadeEmAnosParaDias(25))
console.log(converterIdadeEmAnosParaDias(70))