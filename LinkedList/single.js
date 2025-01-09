class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

export { Node, SingleLinkedList };
