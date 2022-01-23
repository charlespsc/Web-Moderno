// Closure é o escopo criado quendo uma função é declarada
// Esse escopo permite a função acessar e manipular as variáveis externas à função

// Contexto Léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())