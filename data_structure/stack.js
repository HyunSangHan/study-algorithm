function Stack () {
  this.data = [];
}

Stack.prototype.push = function (newData) {
  this.data.push(newData);
}

Stack.prototype.pop = function () {
  return this.data.pop() || null;
}

Stack.prototype.getSize = function () {
  return this.data.length;
}

const stack = new Stack();


stack.push(3);
stack.push(2);
stack.push(4);
stack.push(6);
console.log(stack.data);
console.log(stack.getSize());
stack.pop();
stack.pop();
console.log(stack.data);
stack.pop();
console.log(stack.getSize());
