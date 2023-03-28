/* Binary Search Tree é uma estrutura de dados em árvore binária em que cada nó possui no máximo dois filhos
e os valores em seus descendentes à esquerda são menores e à direita são maiores do que o valor do próprio nó. */

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
console.log(myTree.contains(9));
console.log(myTree.minValueNode(myTree.root))
