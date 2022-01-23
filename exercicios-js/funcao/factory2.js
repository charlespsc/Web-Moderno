function criarProduto(nome, preco) {
    return {
        nome, 
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.99))
console.log(criarProduto('iPad', 1199.99))
console.log(criarProduto('Teclado', 99.99))