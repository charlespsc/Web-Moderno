let numero = 1
{
    let numero = 2 // Está em escopo diferente
    console.log('dentro =', numero)
}
console.log('fora = ', numero)