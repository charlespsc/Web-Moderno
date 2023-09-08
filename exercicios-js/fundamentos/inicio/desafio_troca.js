/*Desafio

let a = 7
let b = 94

console.log(a)
console.log(b)

// Trocar o valor das variáveis... a = 94 e b = 7
a = b
b = a - 87

console.log(a)
console.log(b)
*/

// Resposta do Professor
let a = 7
let b = 94

let temp = a

a = b
b = temp

// [a, b] = [b, a] -> também podemos usar assim!

console.log("Valor de A = " + a)
console.log("Valor de A = " + b)