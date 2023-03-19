// Big O(n)
//  A complexidade de tempo cresce linearmente em relação ao tamanho da entrada.

// function logItems(n) {
//     for(let i = 0; i < n; i++) {
//         console.log(i)
//     }
// }

// logItems(10)

// Big O(n^2)
// A complexidade de tempo cresce quadraticamente em relação ao tamanho da entrada.

// function logItems(n) {
//     for(let i = 0; i < n; i++) {
//         for(let j = 0; j < n; j++) {
//             console.log(i, j)
//         }
//     }
// }

// logItems(10)

// Big O(1)
// A complexidade de tempo não depende do tamanho da entrada e tem tempo de execução constante.

// function addItems(n) {
//     return n+n
// }

// addItems(10)

// Big O(log n)
// A complexidade de algoritmos que descreve um tempo de execução que cresce proporcionalmente ao logaritmo do tamanho de entrada.

// function binarySearch(arr, target) {
//   let start = 0;
//   let end = arr.length - 1;
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }

//   return -1;
// }

// Para funcionar o array precisa estar ordenado.
// const fruits = [
//   "abacaxi",
//   "banana",
//   "caqui",
//   "damasco",
//   "figo",
// ];

// binarySearch(fruits, "banana");


// Diferentes complexidades baseada na entrada de dados
// Big O(a + b)

// function logItems(a, b) {
//     for(let i = 0; i < a; i++) {
//         console.log(i)
//     }

//     for(let j = 0; j < b; j++) {
//         console.log(j)
//     }
// }

// logItems(8, 10000)


// Alguns exemplos de Big O Notation em arrays

// const arr = [0, 3, 18, 9, 6, 9]

// Big O(1) 

// arr.pop()
// arr.push(10)

// Big O(n)

// arr.shift()
// arr.unshift(5)
// arr.slice(1,2)
// arr.splice(2,4)

// Big O(n log n)
// A complexidade indica que o tempo de execução de um algoritmo aumenta proporcionalmente ao produto do tamanho do problema (n) e o logaritmo desse tamanho (log n).

// arr.sort()