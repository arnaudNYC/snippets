const assert = require("assert");

class LinkedList {
  constructor(value) {
    this.head = null;
    this.length = 0;
    this.prepend(value);
  }

  prepend(value) {
    this.head = {
      value,
      next: this.head
    };
    this.length += 1;
    return this;
  }

  append(value) {
    let thisNode = this.head;
    while (thisNode.next) {
      thisNode = thisNode.next;
    }
    thisNode.next = {
      value,
      next: null
    };
    this.length += 1;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }
    const { value } = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return value;
  }

  contains(val) {
    let thisNode = this.head;
    while (thisNode) {
      if (thisNode.value === val) {
        return true;
      }
      thisNode = thisNode.next;
    }
    return false;
  }
}

const linkedList = new LinkedList(100);
assert.equal(linkedList.head.value, 100);

// .prepend
linkedList.prepend(200); // 200, 100
assert.equal(linkedList.head.value, 200);
assert.equal(linkedList.head.next.value, 100);
assert.equal(linkedList.length, 2);

// .append
linkedList.append(300); // 200, 100, 300
assert.equal(linkedList.head.value, 200);
assert.equal(linkedList.head.next.value, 100);
assert.equal(linkedList.head.next.next.value, 300);
assert.equal(linkedList.length, 3);

// .shift
assert.equal(linkedList.shift(), 200); // 100, 300
assert.equal(linkedList.head.value, 100);
assert.equal(linkedList.head.next.value, 300);
assert.equal(linkedList.length, 2);

// .contains
assert.equal(linkedList.contains(100), true);
assert.equal(linkedList.contains(200), false);
assert.equal(linkedList.contains(300), true);
