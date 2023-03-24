// Stack (Pilha) é uma estrutura de dados linear
// que usa a política Last-In-First-Out (LIFO)
// onde o último elemento inserido é o primeiro a ser removido.


// Basicamente é apenas adicionar ao final com push e remover com pop
// não utilizar com unshift e shift pois são O(n) é necessário reindexar
// Um exemplo de uso é o gerenciamento do historico de um browser


// Uso com arrays
const stack = [];
stack.push(1);
stack.push(2);
stack.pop();


// Uso com Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value)
    if(this.length === 0) {
        this.top = newNode;
    } else {
        newNode.next = this.top
        this.top = newNode
    }

    this.length++
    return this
  }

  pop() {
    if(this.length === 0) return undefined

    let temp = this.top
    this.top = temp.next
    this.length--
    return temp
  }
}

const myStack = new Stack(12)


myStack.push(10)
myStack.push(7)
myStack.pop()
console.log(myStack)