const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
//Suporta quebra de linha
const template = `
Olá 
${nome}!`
console.log(concatenacao, template)

//expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log (`Ei... ${up('cuidado')}!`)