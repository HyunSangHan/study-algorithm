function heapSort (arr) {
  const heap = new Heap();
  let resultArr = [];

  for (element of arr) {
    heap.insert(element); // heap에 data를 차례대로 추가함
  }

  for (let i=0; i < arr.length; i++) {
    resultArr.push(heap.delete()); // heap의 data중 첫번째 요소를 꺼냄
  }
  return resultArr.slice(1); // heap의 첫 요소는 null이므로 불필요하여 제외
}

function Heap () {
  this.data = [null]; // heap의 첫 요소는 null로 채워둠(인덱스 계산상 편의 용도)
  this.size = 0;

  this.insert = function (value) {
    this.data.push(value); // data배열 맨 끝에 요소를 추가했으니
    this.size++; // 사이즈가 하나 커지고
    this.heapifyToUp(this.size); // 위로 올라가는 방향의 heapify를 한다.
  }

  this.delete = function () {
    const minValue = this.data.shift(); // data배열 첫번째 요소를 꺼냈으니
    this.size--; // 사이즈가 하나 작아지고
    this.heapifyToDown(1); // 아래로 내려가는 방향의 heapify를 한다.
    return minValue; // 꺼낸 첫번째 요소(즉, 최소힙에서는 min값)는 return해준다.
  }

  this.heapifyToUp = function (idx) {
    const parentIdx = parseInt(idx / 2); // 부모노드의 인덱스
    if (parentIdx < 1) { // 루트노드에 도착했으면 재귀호출 중단
      return;
    }
    if (this.data[idx] < this.data[parentIdx]) {
      [this.data[idx], this.data[parentIdx]] = [this.data[parentIdx], this.data[idx]];
      this.heapifyToUp(parentIdx);
    }
  }

  this.heapifyToDown = function (idx) {
    const leftIdx = idx * 2;
    const rightIdx = idx * 2 + 1;
    let currentIdx = idx;
    if (leftIdx > this.size || rightIdx > this.size) {
      return;
    }
  
    if (this.data[leftIdx] < this.data[currentIdx]) { // 왼쪽 자식노드가 현재 노드보다 작을 때
      [this.data[leftIdx], this.data[currentIdx]] = [this.data[currentIdx], this.data[leftIdx]]; // 스와프
      currentIdx = leftIdx; // 관심사가 왼쪽 자식노드로 내려간다.(재귀호출 대상이 됨)
    } else if (this.data[rightIdx] < this.data[currentIdx]) {  // 오른쪽 자식노드가 현재 노드보다 작을 때
      [this.data[rightIdx], this.data[currentIdx]] = [this.data[currentIdx], this.data[rightIdx]]; // 스와프
      currentIdx = rightIdx; // 관심사가 오른쪽 자식노드로 내려간다.(재귀호출 대상이 됨)
    } else { // 더이상 heapify가 필요 없는 순간, 재귀호출 중단
      return;
    }
  
    this.heapifyToDown(currentIdx); // 아직 heapify가 필요하니, 바뀐 관심사에 대해 재귀적으로 heapify를 한다.
  }
}

const test = [1, 5, 3, 8, 43, 2, 49];
console.log(heapSort(test));