class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    if (this.length === 1) {
      const poppedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return poppedNode;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    const poppedNode = current.next;
    current.next = null;
    this.tail = current;
    this.length--;
    return poppedNode;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

let firstList = new SingleLinkList();
firstList.push("Bowofade");
firstList.push("Akindele");
firstList.push("Funmi");
firstList.push("Tolulope");
firstList.push("Noah");
firstList.push("Wisdom");

console.log(firstList.pop());
console.log(firstList.pop());
console.log(firstList.pop());
console.log(firstList.pop());
console.log(firstList.pop());
console.log(firstList.pop());
console.log(firstList.pop());

console.log(firstList);
console.log(firstList.pop());
