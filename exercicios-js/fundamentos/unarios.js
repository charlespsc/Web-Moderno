let num1 = 1
let num2 = 2

num1++
console.log(num1)

--num1
console.log(num1)
/* ++ adiciona 1 ao num1 que fica 2 e depois compara com o num2 que nesse caso é 2
Na linha abaixo aparece true porque a operação encerra na comparação e não lê o -- que será lido depois... */
console.log(++num1 == num2--) 
console.log(num1 == num2) // agora sim ele leu o -- da operação de cima!

