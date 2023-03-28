/* Diferença da Linked List
Linked List tem um único ponteiro que aponta para o próximo nó, 
Enquanto a Doubly Linked List tem dois ponteiros, um para o próximo nó e outro para o nó anterior.
Desvantagens: Inserção e remoção mais complexas
Vantagens: Percorre a lista nos 2 sentidos, sendo mais rápida que a LinkedList

Exemplo
      Tail         Head 
       5 -> 10 -> 9 -> null 
       null <- 5 <- 10 <- 9 
*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    let temp = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return temp;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
  shift() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }

    this.length--;
    return temp;
  }

  get(index) {
    if (index < 0) return undefined;
    let temp = this.head;

    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length; i > index; i--) {
        temp = temp.prev;
      }
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;

    const newNode = new Node(value);
    const before = this.get(index - 1);
    const after = before.next;
    before.next = newNode;
    newNode.next = after;
    newNode.prev = after;
    after.prev = newNode;
    this.length++;

    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return undefined;

    const temp = this.get(index);
    this.prev.next = temp.next;
    this.next.prev = temp.prev;
    temp.next = null;
    temp.prev = null;

    this.length--;
    return temp;
  }
}

let myDoublyLinkedList = new DoublyLinkedList(7);
myDoublyLinkedList.push(10);
myDoublyLinkedList.pop();
myDoublyLinkedList.unshift(8);
myDoublyLinkedList.shift();
myDoublyLinkedList.set(0, 2)
myDoublyLinkedList.insert(1, 9)
myDoublyLinkedList.push(3);
myDoublyLinkedList.remove(0)
console.log(myDoublyLinkedList.get(0));
