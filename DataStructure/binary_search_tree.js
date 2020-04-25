function BinarySearchTree () {
  this.size = 0;
  this.root = null; // Node타입이 들어갈 자리임
}

function Node (value) {
  this.data = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (newValue) {
  const node = new Node(newValue);
  if (!this.root) {
    this.root = node;
    return;
  }

  insertLeaf(node.data, this.root);

  function insertLeaf (value, currentNode) {
    console.log(currentNode)
    let nextNode;
    if (value < currentNode.data) {
      if (currentNode.left) {
        insertLeaf(value, currentNode.left); // 관심사의 이동
        console.log("To the left");
      } else {
        currentNode.left = node;
        console.log("성공적으로 " + value + "를 삽입하였다!");
      }
    } else if (value > currentNode.data) {
      if (currentNode.right) {
        insertLeaf(value, currentNode.right); // 관심사의 이동
        console.log("To the right");
      } else {
        currentNode.right = node;
        console.log("성공적으로 " + value + "를 삽입하였다!");
      }
    } else {
      throw new Error("Duplicate value error! : " + value + "는 중복입니다.");
    }
  }
}

BinarySearchTree.prototype.contains = function (value, currentNode=this.root) {
  if (!currentNode) {
    console.log("NOT FOUND ANY NODES!");
    return false;
  }
  
  if (!value) {
    console.log("NOT FOUND!");
    return false;
  }
  
  let nextNode;
  if (value < currentNode.data) {
    nextNode = currentNode.left; // 관심사의 이동
    console.log(value + "를 찾기 위한 To the left");
  } else if (value > currentNode.data) {
    nextNode = currentNode.right; // 관심사의 이동
    console.log(value + "를 찾기 위한 To the right");
  } else {
    console.log(value + "를 찾았다!");
    return true;
  }

  this.contains(value, nextNode);
}

function initBinarySearchTree (arr) {
  let binarySearchTree = new BinarySearchTree();
  for (let i=0; i < arr.length; i++) {
    binarySearchTree.insert(arr[i]);
  }
  return binarySearchTree;
}

const test = [1, 5, 3, 8, 43, 2, 49];
let binarySearchTree = initBinarySearchTree(test);

for (let i=0; i < test.length; i++) {
  binarySearchTree.contains(test[i]);
}


// 정렬된 배열로 뽑기 : 중위 순회
function inOrderTree (node) {
  if (!node) return;
  inOrderTree(node.left);
  sortedArr.push(node.data);
  inOrderTree(node.right);
}

let sortedArr = [];
inOrderTree(binarySearchTree.root);
console.log(sortedArr)