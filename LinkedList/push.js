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
