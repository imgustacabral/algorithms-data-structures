/* 
Merge Sort é um algoritmo de ordenação do tipo dividir e conquistar.
Ele divide a lista de elementos em duas metades, recursivamente ordena cada metade e, em seguida, mescla as duas metades ordenadas para obter a lista final ordenada.
A mesclagem é feita comparando o primeiro elemento de cada metade e escolhendo o menor entre eles para ser adicionado à lista final ordenada.
Esse processo é repetido até que todos os elementos sejam adicionados à lista final
*/

const array1 = [1, 3, 5, 6];
const array2 = [2, 4, 7, 8];


// função que faz a mesclagem dos arrays, deve receber 2 arrays ordenados
function merge(arr1, arr2) {
  let combined = [],
    i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      combined.push(arr1[i]);
      i++;

    } else {
      combined.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    combined.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    combined.push(arr2[j]);
    j++;
  }
  return combined;
}

function mergeSort(array){
    if(array.length === 1) return array

    let mid = Math.floor(array.length/2)
    let left = array.slice(0, mid)
    let right = array.slice(mid)

    return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([8,3,9,10,919,6,7]));
