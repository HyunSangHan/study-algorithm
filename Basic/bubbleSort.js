function bubbleSort (arr) {
  for (let i=0; i < arr.length-1; i++) { // 맨 마지막 요소는 가만 냅둬도 정렬이 완료되므로 -1을 함
    for (let j=0; j < arr.length-i-1; j++) { // '정렬안된 부분'은 앞부분이고, '정렬된 부분'인 뒷부분은 점점 늘어나므로 0부터 length-i-1까지를 순회함
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return arr;
}

const test = [1, 5, 3, 8, 43, 2, 49];
console.log(bubbleSort(test));