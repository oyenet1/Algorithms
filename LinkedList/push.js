import { Node, SingleLinkedList } from "./single.js";

class Operation extends SingleLinkedList {
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
    return this;
  }
}

export default { Operation };

const intNode = new Operation();

// before pushing
console.log(intNode);

intNode.push(4);
console.log(intNode.tail);
intNode.push(24);
console.log(intNode.tail);
intNode.push(435);
console.log(intNode.tail);
intNode.push(74);

// after pushing
console.log(intNode);
