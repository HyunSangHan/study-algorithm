// 최대힙 만들기
function Heap (arr) {
  this.data = arr;
  this.size = arr.length;
}

Heap.prototype.insert = function (value) {
  this.data.push(value);
  this.size++;
  let lastIdx = this.size - 1;
  this.heapifyToTop(lastIdx);
} 

Heap.prototype.heapifyToTop = function (idx) {
  while (idx > 0) {
    let element = this.data[idx];
    const parentIdx = parseInt((idx-1)/2)
    let parent = this.data[parentIdx];

    if (element <= parent) break;
    this.data[parentIdx] = element;
    this.data[idx] = parent;
    idx = parentIdx;
  }
}

Heap.prototype.extractMax = function () {
  const max = this.data[0];
  this.data[0] = this.heap.pop();
  this.heapifyToBottom(0);
  return max;
}

Heap.prototype.heapifyToBottom = function (idx) {
  let leftIdx = 2*idx + 1;
  let rightIdx = 2*idx + 2;
  let currentIdx = idx;
  const size = this.size;

  if (leftIdx <= size && this.data[leftIdx] > this.data[currentIdx]) {
    currentIdx = leftIdx;
  }
  if (leftIdx <= size && this.data[rightIdx] > this.data[currentIdx]) {
    currentIdx = rightIdx;
  }
  if (currentIdx !== idx) {
    [this.data[currentIdx], this.data[idx]] = [this.data[idx], this.data[currentIdx]];
  }
  this.heapifyToBottom(currentIdx);
}

const heap = new Heap([1, 2, 3, 4, 5, 6, 10, 7]);
heap.insert(90);
heap.insert(50);
console.log(heap)
