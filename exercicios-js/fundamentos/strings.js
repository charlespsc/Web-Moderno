const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // não gera erro, mas está fora do tamanho da string
console.log(escola.charCodeAt(3)) // Resultado é o códico UNICODE
console.log(escola.indexOf('3')) // Saber onde ele está na string

console.log(escola.substring(1)) // não inclui o primeiro caracter
console.log(escola.substring(0, 3)) // do indice 0 ao 3 mas não incluiu o 3

//concatenando...
console.log('Escola '.concat(escola).concat("!")) // melhor forma
console.log('Escola '+ escola + "!") 

//Substituindo... Replace
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e'))
console.log(escola.replace(/\w/g, 'e')) // g é de global sem ele muda apenas a primeira letra

console.log('Ana,Maria,Pedro'.split(','))