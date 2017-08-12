'use strict';

class SLL {
  constructor(value){
    this.value = value;
    this.next = null;
  }
  appendNode(node){  // O(n)
    if(!(node instanceof SLL))
      return null;
    if(!this.next){
      this.next = node;
      return;
    }
    this.next.appendNode(node);
  }

  forEach(callback){  // O(n)
    let current = this;
    while(current){
      callback(current, this);
      current = current.next;
    }
  }

  findMiddle(){  // O(n)
    let slow, fast;
    slow = fast = this;
    while(fast && fast.next && fast.next.next){
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  remove(node){  // O(n)
    if(!(node instanceof SLL))
      return null;
    this.node = node;
    node.value = node.next.value;
    node.next = node.next.next;
  }

  reverse(){  // O(n)
    if(!this.next) return this;
    let current = this;
    let previous = null;

    while(current) {
      let save = current.next;
      current.next = previous;
      previous = current;
      current = save;
    }
    return previous;
  }
}
module.exports = SLL;
