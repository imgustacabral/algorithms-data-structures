/* Recursão é um processo em que uma função é chamada dentro de si mesma para resolver um problema. 

Um exemplo é a função fatorial, que é definida como o produto de todos os números inteiros positivos menores ou iguais a n. 
A fórmula matemática para fatorial é n! = n * (n - 1) * (n - 2) * ... * 2 * 1. 

*/


// Exemplo para testar Call Stack
function functionThree() {
    console.log('Three')
}


function functionTwo() {
    functionThree()
    console.log('Two')
}

function functionOne() {
    functionTwo()
    console.log('One')
}

functionOne()


// Factorial
// Use Call stack no navegador para visualizar melhor

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n-1)
}

console.log(factorial(4))