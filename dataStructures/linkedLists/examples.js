/* Linked Lists Big O

Exemplo de Linked List

Head            Tail
 11 -> 3 -> 23 -> 7 -> null

Cada elemento aponta para o próximo endereço em memória
Sendo o Head o inicio e o Tail o ultimo que pode ser identificado ao apontar para null.

A grande diferença para array é que a Linked List são varios endereços em memória de forma desordenada
Já os arrays são variaveis com endereço em memória em sequência */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  // Big O(1)
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // Big O(n)
  pop() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }
  forEach(func) {
    if(this.length === 0) return undefined

    for(let i = 0; i < this.length; i++) {
      func(this.get(i))
    }
  }
  // Big O(1)
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // Big O(1)
  shift() {
    if (!this.head) {
      return undefined;
    }
    const temp = this.head;
    this.head = temp.next;
    temp.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }
  // Big O(n)
  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;

    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  // Big O(n)
  set(index, value) {
    const temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
  // Big O(n)
  insert(index, value) {
    if (index === 0) {
      return this.unshift(value);
    }

    if (index === this.length) {
      return this.push(value);
    }

    if (index < 0 || index > this.length) {
      return false;
    }

    const newNode = new Node(value);
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }
  // Big O(n)
  remove(index) {
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    const before = this.get(index - 1);
    const temp = before.next;

    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }
  // Big O(n)
  reverse() {
    let prev = null
    let temp = this.head
    let next = temp.next
    this.head = this.tail
    this.tail = temp
    for(let i = 0; i < this.length; i ++) {
        next = temp.next
        temp.next = prev
        prev = temp
        temp = next
    }
    return this
  }
}

const myLinkedList = new LinkedList(4);
myLinkedList.push(3);
myLinkedList.push(399);
// myLinkedList.pop();
// myLinkedList.unshift(1);
// myLinkedList.shift();
// myLinkedList.set(0, 2);
// myLinkedList.insert(0, 98);
// myLinkedList.push(3);
// myLinkedList.remove(1);
// myLinkedList.forEach((node) => {
//   console.log(node)
// })