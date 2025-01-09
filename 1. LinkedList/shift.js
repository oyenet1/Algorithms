// ============================================================
// Author: Bowofade Oyerinde
// Description: Implementation of ShiftOperation class extending
//              SingleLinkedList to include unshift and shift methods
//              for adding and removing nodes from the beginning of the list.
// ============================================================

import { SingleLinkedList } from "./single.js";

class ShiftOperation extends SingleLinkedList {
  // Method: shift
  // Description: Removes the first node from the linked list.
  shift() {
    if (!this.head) {
      return undefined;
    }
    const nodeToRemove = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.length -= 1;
    nodeToRemove.next = null;
    return nodeToRemove;
  }
}

export { ShiftOperation };

const list3 = new ShiftOperation();

// Add values to the beginning of the list
list3.unshift(2);
list3.unshift(12);
list3.unshift(4);
list3.unshift(7);
list3.unshift(5);

// Remove and print the first node
console.log(list3.shift()); // Should remove and return the first node (5)
console.log(list3.shift()); // Should remove and return the next first node (7)
console.log(list3); // Should show the updated list
