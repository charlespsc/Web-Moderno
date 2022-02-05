// pessoa -> mem123 -> {objeto...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> mem456 -> {objeto...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João '})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)