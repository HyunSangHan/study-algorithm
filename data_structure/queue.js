function Queue () {
  this.data = [];
}

Queue.prototype.enqueue = function (newData) {
  this.data.push(newData);
}

Queue.prototype.dequeue = function () {
  return this.data.shift() || null;
}

Queue.prototype.getSize = function () {
  return this.data.length;
}

const queue = new Queue();

queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(6);
console.log(queue.data);
console.log(queue.getSize());
queue.dequeue();
queue.dequeue();
console.log(queue.data);
queue.dequeue();
console.log(queue.getSize());
