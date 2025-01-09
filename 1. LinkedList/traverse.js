import { PushOperation } from "./push.js";

class TraverseOperation extends PushOperation {
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

list.push(23);
list.push(2);
list.push(3);
list.push(14);
list.push(5);
list.push(7);
list.push(11);

list.traverse();
