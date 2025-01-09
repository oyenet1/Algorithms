import { Node, SingleLinkedList } from "./single.js";

class UnShiftOperation extends SingleLinkedList {
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
      return this;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
      return this;
    }
  }
}

export { UnShiftOperation };

const list2 = new UnShiftOperation();

console.log(list2.unshift(2));
console.log(list2.unshift(12));
console.log(list2.unshift(4));
console.log(list2.unshift(7));
console.log(list2.unshift(5));

console.log(list2);
