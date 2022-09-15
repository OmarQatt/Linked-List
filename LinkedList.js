class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  // Insert at the beginning of LL

  insertAtHead(data) {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
    this.length++;
  }
// Append to the end if the LL
 
  append(value) {
    const newNode = new LinkedListNode(value);
    if(!this.head) {
      this.head = newNode;
    } else {
      let appendNode = this.head
      while (appendNode.next) {
        appendNode = appendNode.next;
      }
      appendNode.next = newNode;
    }
  }
  //Delete the middle element from the LL

  removeAtMiddle() {
    if (this.head === null) return null;
    if (this.head.next === null) {
      this.head = this.head.next;
      return null;
    }
    let mid = parseInt(this.length / 2)
    // console.log(mid);
    this.removeAtIndex(mid)
    // if i will remove without using function removeAtIndex 
    // if (mid === 0) return this.removeHead();

    // and if i will get the index same i will ise for loop fot variable mid

    // const prev = this.getByIndex(mid - 1);
    // if (prev == null) return null;

    // prev.next = prev.next.next
    // this.length--
    
  }
  //Insert into a specific location into the LL

  insertAtIndex(index, value) {
    if (index === 0) return this.insertAtHead(value);

    const prev = this.getByIndex(index - 1);
    if (prev == null) return null;

    prev.next = new LinkedListNode(value, prev.next);
    this.length++;
  }
  // show result
  print() {
    let output = "";
    let current = this.head;
    while (current) {
      output = `${output} ${current.value} ->`;
      current = current.next;
    }
    console.log(`${output}null`);
  }


  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  removeHead() {
    this.head = this.head.next;
    this.length--;
  }

  removeAtIndex(index) {
    if (index === 0) return this.removeHead();

    const prev = this.getByIndex(index - 1);
    if (prev == null) return null;

    prev.next = prev.next.next
    this.length--
  }


}

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

LinkedList.fromValues = function (...values) {
  const LL = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    LL.insertAtHead(values[i]);
  }
  return LL;
};

module.exports = LinkedList;
