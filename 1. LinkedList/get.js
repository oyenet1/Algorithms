// ============================================================
// Author: Bowofade Oyerinde
// Description: Implementation of GetOperation class extending
//              PushOperation to include a get method for
//              retrieving a node at a specific index in the list.
// ============================================================

import { PushOperation } from "./push.js";

class GetOperation extends PushOperation {
  // Method: get
  // Description: Retrieves the node at the specified index in the linked list.
  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let currentNode = this.head;
    let i = 0;
    while (i < index) {
      currentNode = currentNode.next;
      i++;
    }

    return currentNode;
  }
}

export { GetOperation };
