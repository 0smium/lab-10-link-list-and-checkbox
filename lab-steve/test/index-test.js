'use strict';

const expect = require('expect');
const SLL = require('../index.js');

describe('Testing methods for singly-linked list...', () => {
  describe('Testing `new SLL()` and `appendNode` functions...', () => {
    it('should create a new node as the head of an SLL with a value of 1.', () => {
      let head = new SLL(1);
      expect(head.value).toEqual(1);
    });
    it('should add two new nodes (2 and 3) to an existing SLL.', () => {
      let head = new SLL(1);
      head.appendNode(new SLL(2));
      head.appendNode(new SLL(3));
      expect(head.next.value).toEqual(2);
      expect(head.next.next.value).toEqual(3);
    });
    it('should return an array of all values of an existing SLL.', () => {
      let head = new SLL(1);
      head.appendNode(new SLL(2));
      head.appendNode(new SLL(3));
      head.appendNode(new SLL(4));
      let node = head;
      let arr = [];
      while (node) {
        arr.push(node.value);
        node = node.next;
      }
      expect(arr).toEqual([1,2,3,4]);
    });
  });
  describe('Testing the `remove` method...', () => {
    it('for an SLL with values 1,2,3,4, removing head.next should make head.next.value equal to 3.', () => {
      let head = new SLL(1);
      head.appendNode(new SLL(2));
      head.appendNode(new SLL(3));
      head.appendNode(new SLL(4));
      head.remove(head.next);
      expect(head.next.value).toEqual(3);
    });
    it('for an SLL with values 1,2,3,4, removing head should make head equal to 2.', () => {
      let head = new SLL(1);
      head.appendNode(new SLL(2));
      head.appendNode(new SLL(3));
      head.appendNode(new SLL(4));
      head.remove(head);
      expect(head.value).toEqual(2);
    });
    it('for an SLL with values 1,2,3,4, removing head should return an array of the remaining 3 values.', () => {
      let head = new SLL(1);
      head.appendNode(new SLL(2));
      head.appendNode(new SLL(3));
      head.appendNode(new SLL(4));
      head.remove(head);
      let node = head;
      let arr = [];
      while (node) {
        arr.push(node.value);
        node = node.next;
      }
      expect(arr).toEqual([2,3,4]);
    });
  });
  describe('Testing the `forEach` method...', () => {
    it('for an SLL with values 1,2,3,4, forEach should return each value in an array.', () => {
      let head = new SLL(1);
      head.appendNode(new SLL(2));
      head.appendNode(new SLL(3));
      head.appendNode(new SLL(4));
      let arr = [];
      head.forEach((each) => {
        arr.push(each.value);
      });
      expect(arr).toEqual([1,2,3,4]);
    });
    it('for an SLL with values 1,2,3,4, forEach should double each value and return the new values in an array.', () => {
      let head = new SLL(1);
      head.appendNode(new SLL(2));
      head.appendNode(new SLL(3));
      head.appendNode(new SLL(4));
      let arr = [];
      head.forEach((each) => {
        arr.push(each.value*2);
      });
      expect(arr).toEqual([2,4,6,8]);
    });
    it('for an SLL with values 1,2,3,4, forEach should make a new SLL with double the original values.', () => {
      let head = new SLL(1);
      head.appendNode(new SLL(2));
      head.appendNode(new SLL(3));
      head.appendNode(new SLL(4));
      let newHead = new SLL(null);
      head.forEach((each) => {
        newHead.appendNode(new SLL(each.value*2));
      });
      newHead.remove(newHead);
      expect(newHead.value).toEqual(2);
      expect(newHead.next.value).toEqual(4);
      expect(newHead.next.next.value).toEqual(6);
      expect(newHead.next.next.next.value).toEqual(8);
    });
  });
  describe('Testing `findMiddle` method...', () => {
    it('for an SLL with values 1,2,3,4,5, findMiddle should return 3.', () => {
      let head = new SLL(1);
      head.appendNode(new SLL(2));
      head.appendNode(new SLL(3));
      head.appendNode(new SLL(4));
      head.appendNode(new SLL(5));
      expect(head.findMiddle().value).toEqual(3);
    });
    it('for an SLL with values 1,2,3,4,5, removeHead with findMiddle should remove the middle node of the SLL.', () => {
      let head = new SLL(1);
      head.appendNode(new SLL(2));
      head.appendNode(new SLL(3));
      head.appendNode(new SLL(4));
      head.appendNode(new SLL(5));
      head.remove(head.findMiddle());
      let arr = [];
      head.forEach((each) => {
        arr.push(each.value);
      });
      expect(arr).toEqual([1,2,4,5]);
    });
    it('for an SLL with values 1,2,3,4,5,6, `reverse` should reverse the order of the SLL and findMiddle().value should return 3 since the SLL has an even number (6) of nodes.', () => {
      let head = new SLL(1);
      head.appendNode(new SLL(2));
      head.appendNode(new SLL(3));
      head.appendNode(new SLL(4));
      head.appendNode(new SLL(5));
      head.appendNode(new SLL(6));
      let middle = head.findMiddle();
      expect(middle.value).toEqual(3);
    });
  });
  describe('Testing `reverse`method...', () => {
    it('for an SLL with values 1,2,3,4,5, `reverse` should reverse the order of the SLL making 5 the first value.', () => {
      let head = new SLL(1);
      head.appendNode(new SLL(2));
      head.appendNode(new SLL(3));
      head.appendNode(new SLL(4));
      head.appendNode(new SLL(5));
      head = head.reverse();
      expect(head.value).toEqual(5);
      expect(head.next.value).toEqual(4);
    });
    it('for an SLL with just one node, `reverse` should return the original SLL.', () => {
      let head = new SLL(1);
      // head.appendNode(new SLL(2));
      head = head.reverse();
      expect(head.value).toEqual(1);
      // console.log(head);
      expect(head.next).toNotExist();
    });
    it('for an SLL with values 1,2,3,4,5,6, `reverse` should reverse the order of the SLL and findMiddle().value should return 4 instead of 3.', () => {
      let head = new SLL(1);
      head.appendNode(new SLL(2));
      head.appendNode(new SLL(3));
      head.appendNode(new SLL(4));
      head.appendNode(new SLL(5));
      head.appendNode(new SLL(6));
      let middle = head.reverse().findMiddle();
      expect(middle.value).toEqual(4);
    });
  });
});
