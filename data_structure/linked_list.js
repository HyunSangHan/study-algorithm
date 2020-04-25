function LinkedList () {
  this.size = 0;
  this.head = null; // Node타입이 들어갈 자리임
}

LinkedList.prototype.getSize = function () {
  return this.size;
}

LinkedList.prototype.selectHead = function () {
  return this.head;
}

LinkedList.prototype.selectNode = function (idx) {
  if (idx > this.size) throw new Error("NO NODE!");
  let cnt = 0;
  let currentNode = this.head;
  while(cnt < idx) {
    currentNode = currentNode.next;
    cnt++;
  }
  return currentNode;
}

LinkedList.prototype.addToHead = function (value) {
  const tmp = this.head;
  this.head = new Node(value);
  this.head.next = tmp;
  this.size++;
}

LinkedList.prototype.addToMiddle = function (idx, value) {
  let prevNode = this.selectNode(idx);
  const tmp = prevNode.next;
  prevNode.next = new Node(value);
  if (tmp) {
    prevNode.next.next = tmp;
    this.size++;
  } else {
    this.addToTail(value);
  }
}

LinkedList.prototype.addToTail = function (value) {
  if (this.size === 0) {
    this.addToHead(value);
  } else {
    let prevNode = this.selectNode(this.size-1);
    prevNode.next = new Node(value);
    this.size++;
  }
}

LinkedList.prototype.removeHead = function () {
  this.head = this.selectNode(0).next;
  this.size--;
}

LinkedList.prototype.removeMiddle = function (idx) {
  let prevNode = this.selectNode(idx-1);
  if (!prevNode.next) {
    prevNode.next = prevNode.next.next;
    this.size--;
  } else {
    this.removeTail();
  }
}

LinkedList.prototype.removeTail = function () {
  let prevNode = this.selectNode(this.size-1);
  prevNode.next = null;
  this.size--;
}

function Node(data) {
  this.data = data;
  this.next = null;
}

function initLinkedList (arr) {
  let linkedList = new LinkedList();
  for (let i=0; i < arr.length; i++) {
    linkedList.addToTail(arr[i]);
  }
  return linkedList;
}

function showNextNodes (head, idx =0) {
  if (!head.next) return;
  console.log(idx + "번째 노드 : " + head.data);
  showNextNodes(head.next, idx + 1);
}

const test = [1, 5, 3, 8, 43, 2, 49];
let linkedList = initLinkedList(test);

linkedList.addToMiddle(0, 9);
linkedList.addToHead(4);
linkedList.addToTail(100);
console.log("사이즈 : " + linkedList.getSize());
showNextNodes(linkedList.head);
console.log("----------");
linkedList.removeMiddle(2);
linkedList.removeHead();
linkedList.removeTail();
console.log("사이즈 : " + linkedList.getSize());
showNextNodes(linkedList.head);
