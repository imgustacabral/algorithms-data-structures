/* Queue (Fila) é uma estrutura de dados linear que segue a política First-In-First-Out (FIFO),
Onde o primeiro elemento inserido é o primeiro a ser removido.

Uso com array
Inserção com push(value) seria O(1), remoção com shift() seria O(n)
Inserção com unshift(value) seria O(n), remoção com pop() seria O(1)

Uso com Linked Lists
Inserção com push(value) seria O(1), remoção com unshift() seria O(1)

Linked List Queue

First            Last
  11 -> 3 -> 23 -> 7 
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (this.length === 0) return undefined;
    let temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = temp.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
}
const myQueue = new Queue(2);
myQueue.enqueue(4);
myQueue.enqueue(8);
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue);
