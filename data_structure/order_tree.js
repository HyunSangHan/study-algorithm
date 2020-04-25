// 중위순회
function inOrderTree(node) {
  if(!node) return;

  inOrderTree(node.leftNode);
  console.log(node.val);
  this.inOrderTree(node.rightNode);
}

// 전위순회
function preOrderTree(node) {
  if(!node) return;

  console.log(node.val);
  this.preOrderTree(node.leftNode);
  this.preOrderTree(node.rightNode);
}

// 후위순회
function postOrderTree(node) {
  if(!node) return;

  this.postOrderTree(node.leftNode);
  this.postOrderTree(node.rightNode);
  console.log(node.val);
}