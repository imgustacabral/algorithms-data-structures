/* Breadth First Search é um algoritmo de busca que explora todos os vértices de um grafo em largura antes de explorar os vértices em profundidade.
Adicionando cada nó em uma fila e após remove e adiciona os filhos desse nó a fila tambem
*/

// O Código abaixo é a BST que está na pasta de dataStructures com o novo método.
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class binarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
      if (!this.root) {
        this.root = newNode;
        return this;
      } else {
        let temp = this.root;
        while (true) {
          if (newNode.value === temp.value) return undefined;
          if (newNode.value < temp.value) {
            if (temp.left === null) {
              temp.left = newNode;
              return this;
            }
            temp = temp.left;
          } else if (newNode.value > temp.value) {
            if (temp.right === null) {
              temp.right = newNode;
              return this;
            }
            temp = temp.right;
          }
        }
      }
    }
  
    contains(value) {
      if (!this.root) return undefined;
      let temp = this.root;
      while (temp) {
        if (value < temp.value) {
          temp = temp.left;
        } else if (value > temp.value) {
          temp = temp.right;
        } else {
          return true
        }
      }
      return false
    }
  
    minValueNode(currentNode) {
      while(currentNode.left) {
          currentNode = currentNode.left
      }
      return currentNode
    }


    // Método adicionado
    BFS() {
        let currentNode = this.root
        let queue = []
        let results = []
    
        queue.push(currentNode)
    
        while(queue.length) {
            currentNode = queue.shift()
            results.push(currentNode.value)
    
            if(currentNode.left) {
                queue.push(currentNode.left)
            }
            if(currentNode.right) {
                queue.push(currentNode.right)
            }
        }
        return results
    }
  }
  
  const myTree = new binarySearchTree();
  myTree.insert(10);
  myTree.insert(77);
  myTree.insert(55);
  myTree.insert(47);
  myTree.insert(19);
  myTree.insert(29);
  myTree.insert(51);
  myTree.insert(13);

  console.log(myTree.BFS());
  
