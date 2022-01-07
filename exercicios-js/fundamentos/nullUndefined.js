let valor // declarada mas não inicializada
console.log(valor) // Undefined

valor = null // ausência de valor -> usado para zerar o valor de uma variável
console.log(valor) // nulo (null)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)
