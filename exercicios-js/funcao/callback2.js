const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
let notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log("Notas Baixas 1 (sem callback): ", notasBaixas1)

// Com callback
notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log("Notas Baixas 2 (com callback): ", notasBaixas2)

// com Arrow Function
const notasMenorQue7 = notas => notas < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log("Notas Baixas 3 (callback + arrow): ", notasBaixas3)