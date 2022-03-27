const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o último -> Massa quebrou o carro! e com isso saiu da lista!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // Remove o primeiro da lista!
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover elementos
// Adicionando...
pilotos.splice(2, 0, "Bottas", 'Massa')
console.log(pilotos)

//Removendo....
pilotos.splice(3, 1) // Massa quebrou
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array (slice - pedaço)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)