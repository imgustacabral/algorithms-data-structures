// Array que será utilizado para os algoritmos

const array = [4, 5, 8, 9, 2];

/* 
Bubble sort é um algoritmo de ordenação simples que compara e troca pares de elementos adjacentes na lista até que a lista esteja ordenada.
É adequado apenas para ordenar pequenos conjuntos de dados e não é eficiente para grandes conjuntos de dados.

*/

function bubbleSort(array) {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > [array[j + 1]]) {
        let temp = array[j];

        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

// console.log(bubbleSort(array))

/*
Selection Sort é um algoritmo de ordenação que percorre a lista várias vezes, encontrando o menor elemento e movendo-o para a primeira posição,
e depois repetindo o processo para os elementos restantes até que toda a lista esteja ordenada.
É fácil de implementar, mas é ineficiente para grandes conjuntos de dados.
*/

function selectionSort(array) {
  let min;
  for (let i = 0; i < array.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array
}

// console.log(selectionSort(array))

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let j = i;
        while (j > 0 && array[j] < array[j-1]) {
          let temp = array[j];
          array[j] = array[j-1];
          array[j-1] = temp;
          j--;
        }
      }
      return array;
}

// console.log(insertionSort(array))