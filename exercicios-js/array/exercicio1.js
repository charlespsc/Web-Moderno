// Exercícios - Curso Fundamentos de Programação

// 1 - Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação "!" no final.

/*Exemplos:
cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
cumprimentar("Maria") // retornará "Olá, Maria!" 
*/

// Resolução 1
function cumprimentar(nome) {
    const saudacao = "Olá"
    return [saudacao, nome].join(`, `).concat("!")
}
console.log(cumprimentar(nome = 'Charles'))

// Resolução 2
function cumprimentar(nome2) {
    return "Olá, " + nome2 + "!"
}
console.log(cumprimentar(nome2 = 'Carlos'))

// Resolução 3
function cumprimentar(nome3) {
    return `Olá, ${nome3}!`
}
console.log(cumprimentar(nome3 = 'Maria'))