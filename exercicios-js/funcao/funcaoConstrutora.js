function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributoo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta 
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro       // Constante sem os ( ) porque peguei os parâmetros padrão da função Carro
uno.acelerar()              // chamarei 3x 
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar() // chamei 2x 
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)       // função
console.log(typeof uno)         // Objeto
console.log(typeof ferrari)     // Objeto