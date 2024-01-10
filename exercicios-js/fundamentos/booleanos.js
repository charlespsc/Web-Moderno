let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // ! é negação !! passa a ser verdadeiro

console.log('### OS VERDADEIROS... ###')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('### OS FALSOS... ###')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('PARA FINALIZAR...')
console.log(!!('' || null || 0 || 'EPA')) // 2 PIPES || significa OU 

let nome = '' // se eu não passar um nome ele vai entrar na operação lógica OU 
console.log(nome || 'Usuário não cadastrado!') 
