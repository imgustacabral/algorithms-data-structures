/*
Depth First Search é um algoritmo de busca que explora um grafo até o máximo possível em profundidade
antes de retroceder e continuar a busca em outras ramificações do grafo.

*/

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
    
    DFSPreOrder() {
        let results = [];
        function traverse(currentNode) {
            results.push(currentNode.value);
            if (currentNode.left) traverse(currentNode.left);
            if (currentNode.right) traverse(currentNode.right);
        }
        traverse(this.root);
        return results;
    }

    DFSPostOrder() {
        let results = [];
        function traverse(currentNode){
            if (currentNode.left) traverse(currentNode.left);
            if (currentNode.right) traverse(currentNode.right);
            results.push(currentNode.value);
        }
        traverse(this.root);
        return results;
    }

    DFSInOrder() {
        let results = [];
        function traverse(currentNode) {
            if (currentNode.left) traverse(currentNode.left);
            results.push(currentNode.value);
            if (currentNode.right) traverse(currentNode.right);
        }
        traverse(this.root);
        return results;
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
  console.log(myTree.DFSPreOrder());
  console.log(myTree.DFSPostOrder());
  console.log(myTree.DFSInOrder());
