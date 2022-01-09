const [a, b, c, d] = [3, 5, 1, 15]
// operação binária, ou seja, com 2 operando
const soma = a + b + c + d
const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2

console.log(soma, subtracao, multiplicacao, divisao, modulo)
console.log(soma, subtracao, multiplicacao, -divisao, modulo) // usando operador unário na divisão