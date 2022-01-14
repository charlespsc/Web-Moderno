function teste1(num) {
    if(num > 7)
        console.log(num)
    
    console.log('Final') // não está associada a sentença
}

teste1(6)
teste1(8)

// Cuidado com o ponto e vírgula, não usar com as estruturas de controle

function teste2(num) {
    if(num > 7); {
        console.log(num)
    }
}

teste2(6)
teste2(8)