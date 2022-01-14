 const imprimirResultado = function(nota) {
     if(nota >= 7) {
         console.log('Aprovado!')
     } else {
         console.log('Reprovado!')
     }
 }

 imprimirResultado(10)
 imprimirResultado(4)
 imprimirResultado('Epa!') // Nesse caso a string não é verdadeira então vai ser ELSE, ou seja, Reprovado!
 