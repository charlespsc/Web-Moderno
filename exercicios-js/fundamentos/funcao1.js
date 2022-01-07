// Funçao sem retorno em JS
function imprimirSoma(a, b) {
    console.log(a + b)
}
 
imprimirSoma(2, 3)
imprimirSoma(2) // Caso passe poucos dados ele retorna Not a Number
imprimirSoma() // Caso passe poucos dados ele retorna Not a Number

imprimirSoma(2, 10, 4, 5, 6, 7, 8) // O JS não liga para os outros valores ele pega o que ele precisa ou 2 primeiros

// Função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma()) // Como o a não tem tratamento ele dá NaN