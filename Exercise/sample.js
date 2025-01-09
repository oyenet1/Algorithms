class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(node) {
    const newNode = new Node(node);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
}

export { Node, LinkedList };

const first = new LinkedList(5);

console.log(first);
