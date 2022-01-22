console.log(soma(3, 4))

// No caso da expression ou named function não funcionam
// console.log(sub(3, 4)) 
// console.log(mult(3, 4)) 

// function declaration (posso chamar a função antes ex: linha 1)
function soma(x, y) {
    return x + y
}

// function expression -> 
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4)) 

// named function expression (pouco usada, mas útil para debbug)
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4)) 