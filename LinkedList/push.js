import { Node, SingleLinkedList } from "./single.js";

class PushOperation extends SingleLinkedList {
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }
}

export { PushOperation };

const intNode = new PushOperation();

// before pushing
console.log(intNode);

// intNode.push(4);
// intNode.push(74);

// after pushing
console.log(intNode);
