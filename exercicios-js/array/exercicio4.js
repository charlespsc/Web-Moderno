// Exercícios - Curso Fundamentos de Programação

/* 4 - Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. 
       Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.

Exemplos:
receberNomeDoMes(1) // retornará "janeiro"
receberNomeDoMes(4) // retornará "abril"
*/

// Resolução 1

function receberNomeDoMes(numero) {
    switch(numero) {
        case 1:
            return "Janeiro";
        case 2: 
            return "Fevereiro";
        case 3: 
            return "Março";
        case 4: 
            return "Abril";
        case 5: 
            return "Maio";
        case 6: 
            return "Junho";
        case 7: 
            return "Julho";
        case 8: 
            return "Agosto";
        case 9: 
            return "Setembro";
        case 10: 
            return "Outubro";
        case 11: 
            return "Novembro";
        case 12: 
            return "Dezembro";
    }
}

console.log(receberNomeDoMes(1)) // retornará "janeiro"
console.log(receberNomeDoMes(4)) // retornará "abril"
console.log(receberNomeDoMes(7)) // retornará "abril"
console.log(receberNomeDoMes(13)) // retornará "Undefined"
console.log(receberNomeDoMes(00001)) // retornará "janeiro"