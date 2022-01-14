/*  Para utilizar a exponenciação da maneira antiga:

let exp = Math.pow(2, 3) // O promeiro parâmetro é a base e o segunto o expoente.
console.log(exp) // 2 elevado a 3 igual a 8
*/

// O ES7 mudou isso, agora podemos utilizar o operador próprio, assim:
let exp = 2 ** 3 // O primeiro valor representa a base e o segundo expoente
console.log(exp) // 2 elevado a 3 igual a 8

/* Representado por dois asteriscos (**) o operador nos trouxe outra possibilidade
interessante que podemos chamar de atribuição exponencial, assim:
*/
let base = 2
base **= 3 // Eleva o valor armazenado na base à terceira potência
console.log(base)

// E ainda podemos trabalhar com expoentes negativos, assim:
let baseNeg = 2 ** -3 // Com expoente negativo
console.log(baseNeg) // 2 elevado a -3 igual a 0.125