/*
Hash table é uma estrutura de dados que utiliza uma função hash para mapear chaves a valores,
permitindo acesso rápido e eficiente às informações armazenadas.

separate chaining é um método de resolução de colisões em hash tables,
onde cada bucket contém uma lista encadeada para armazenar valores múltiplos com a mesma chave hash.
*/

class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }
  set(key, value) {
    const index = this._hash(key);
    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);
    return this;
  }
  get(key) {
    let index = this._hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1];
        }
      }
    }
    return this.dataMap[index];
  }
  // O(n^2) mas em casos reais não ficam varios items dentro da mesma hash, então o padrão é O(n)
  // apenas um exemplo do estudo
  keys() {
    const allKeys = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
            allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }
    return allKeys;
  }
}

const myHashTable = new HashTable();
myHashTable.set("bolts", "198");
myHashTable.set("washers", "532");
console.log(myHashTable.get("washers"));
console.log(myHashTable.keys());



// Forma melhor de iterar arrays para procurar por numeros iguais do que nested for loops
const arr1 = [1,2,5,6,7,9]
const arr2 = [8,10,92,21,23,9]
function hasEqualsNumber(arr1, arr2) {
    let obj = {}
    for(let i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = true;
    }
    for(let j = 0; j < arr2.length; j++) {
        if(obj[arr2[j]]) return true
    }

}

console.log(hasEqualsNumber(arr1, arr2))