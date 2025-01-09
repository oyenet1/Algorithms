// ============================================================
// Author: Bowofade Oyerinde
// Description: Implementation of TraverseOperation class extending
//              PushOperation to include a traverse method for
//              traversing and printing the linked list.
// ============================================================

import { PushOperation } from "./push.js";

class TraverseOperation extends PushOperation {
  // Method: traverse
  // Description: Traverses the linked list and prints each node.
  traverse() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode);
      currentNode = currentNode.next;
    }
  }
}

export { TraverseOperation };

const list = new TraverseOperation();

// Push values into the list
list.push(23);
list.push(2);
list.push(3);
list.push(14);
list.push(5);
list.push(7);
list.push(11);

// Traverse and print the list
list.traverse();
