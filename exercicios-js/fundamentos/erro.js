function tratarErroELancar(erro) {
    //throw new Error('Charles você viu que ocorreu um ERRO???')
    throw 'Mensagem do erro: FALTAL ERROR'
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!') // Testar mudando nome para name
    } catch (erro) {
        tratarErroELancar (erro)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto'} // Testar mudando nome para name
imprimirNomeGritado(obj)