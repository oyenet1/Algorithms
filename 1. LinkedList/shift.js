import { Node, SingleLinkedList } from "./single.js";

class ShiftOperation extends SingleLinkedList {
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length += 1;
    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    const nodeToRemove = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return nodeToRemove;
    }
    this.head = this.head.next;

    this.length -= 1;
    return nodeToRemove;
  }
}

export { ShiftOperation };

const list2 = new ShiftOperation();

console.log(list2.unshift(2));
console.log(list2.unshift(12));
console.log(list2.shift());

console.log(list2);
