// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
    return node;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (!this.head) {
      return;
    } else {
      this.head = this.head.next;
    }
  }
  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }
  insertLast(data) {
    // if (!this.head) {
    //   this.head = new Node(data);
    // }
    // if (!this.head.next) {
    //   this.head.next = new Node(data);
    // }
    // let previous = this.head;
    // let node = this.head.next;
    // while (node.next) {
    //   previous = node;
    //   node = node.next;
    // }
    // previous.next = new Node(data);

    //---------

    let last = this.getLast();
    last ? (last.next = new Node(data)) : (this.head = new Node(data));
  }

  getAt(index) {
    if (!this.head) {
      return null;
    }
    if (index > this.size()) {
      return null;
    }
    let count = 0;
    let node = this.head;
    while (node) {
      if (count === index) {
        return node;
      }
      node = node.next;
      count++;
    }
    return node;
  }

  removeAt(index) {
    let previous = this.getAt(index - 1);
    let afterRemoved = this.getAt(index + 1);

    if (previous) {
      previous.next = afterRemoved;
    } else {
      this.head = afterRemoved;
    }
  }

  insertAt(data, index) {
    let previous = this.getAt(index - 1);
    let afterInserted = this.getAt(index);

    if (index > this.size()) {
      return this.insertLast(data);
    }
    if (previous) {
      previous.next = new Node(data, afterInserted);
    } else {
      this.head = new Node(data, afterInserted);
    }
  }

  forEach(fn) {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
      fn(node);
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
