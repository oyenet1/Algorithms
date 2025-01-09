// ============================================================
// Author: Bowofade Oyerinde
// Description: Implementation of PopOperation class extending
//              PushOperation to include a pop method for
//              removing the last node from a linked list.
// ============================================================

import { PushOperation } from "./push.js";

class PopOperation extends PushOperation {
  // Method: pop
  // Description: Removes the last node from the linked list.
  pop() {
    // Check if the list is empty
    if (!this.head) {
      return undefined;
    }

    // Check if the list has only one node
    if (this.length === 1) {
      const nodeToRemove = this.head;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return nodeToRemove;
    }

    // Traverse the list to find the second last node
    let currentNode = this.head;
    let preNode = null;
    while (currentNode.next) {
      preNode = currentNode;
      currentNode = currentNode.next;
    }

    // Update the tail and remove the last node
    preNode.next = null;
    this.tail = preNode;
    this.length -= 1;
    return currentNode;
  }
}

export { PopOperation };

// Example usage of PopOperation
const firstNode = new PopOperation();
firstNode.push(4);
firstNode.push(23);
firstNode.push(41);
firstNode.push(7);
firstNode.push(15);

console.log(firstNode.pop()); // Should remove and return the last node (15)
console.log(firstNode.pop()); // Should remove and return the second last node (7)
console.log(firstNode); // Should show the updated list
