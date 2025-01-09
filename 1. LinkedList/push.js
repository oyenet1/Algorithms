// ============================================================
// Author: Bowofade Oyerinde
// Description: Implementation of PushOperation class extending
//              SingleLinkedList to include a push method for
//              adding a new node to the linked list.
// ============================================================

import { Node, SingleLinkedList } from "./single.js";

class PushOperation extends SingleLinkedList {
  // Method: push
  // Description: Adds a new node to the end of the linked list.
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

// // Before pushing
// console.log(intNode);

// // Uncomment to push values
// intNode.push(4);
// intNode.push(74);

// // After pushing
// console.log(intNode);
