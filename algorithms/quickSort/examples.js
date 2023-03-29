/*
QuickSort é um algoritmo de ordenação que divide a lista de elementos em duas partes,
seleciona um elemento pivô e reorganiza a lista de forma que todos os elementos menores que o pivô estejam à esquerda do pivô e todos os elementos maiores que o pivô estejam à direita do pivô.
O algoritmo é aplicado recursivamente às duas partes da lista até que a lista esteja completamente ordenada.
É eficiente para ordenar grandes conjuntos de dados, mas pode ser ineficiente para conjuntos de dados pequenos ou em casos em que o pivô é selecionado de forma inadequada.
*/

function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex]
    array[firstIndex] = array[secondIndex]
    array[secondIndex] = temp
}

function pivot(array, pivotIndex=0, endIndex=array.length-1){
    let swapIndex = pivotIndex
    for(let i = pivotIndex + 1; i <= endIndex; i++){
        if(array[i] < array[pivotIndex]){
            swapIndex++
            swap(array, swapIndex, i)
        }
    }
    swap(array, pivotIndex, swapIndex)
    return swapIndex
}

function quickSort(array, left=0, right=array.length-1){
    if(left < right) {
        let pivotIndex = pivot(array, left, right)
        quickSort(array, left, pivotIndex-1)
        quickSort(array, pivotIndex+1, right)
    }
    return array
}

const array = [2,5,8,7,9,67,36,29]
console.log(quickSort(array))