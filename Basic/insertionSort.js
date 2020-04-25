function insertionSort (arr) {
  for (let i=0; i < arr.length; i++) { // 버블, 선택정렬과 다르게 삽입정렬은 모든 원소를 돌아야만 정렬이 끝난다.
    let leftIdx = i-1; // 현재 관심요소보다 왼쪽 인덱스. 참고로 삽입정렬에서 관심요소의 왼쪽에는 정렬된 배열이 있다.
    while (leftIdx >= 0 && arr[leftIdx] > arr[leftIdx+1]) { // 정렬된 배열을 뒤에서부터 돌면서 들어갈 자리를 본다.
      [arr[leftIdx], arr[leftIdx+1]] = [arr[leftIdx+1], arr[leftIdx]]; // 이부분은 마치 버블정렬처럼 들어갈 자리를 찾아가는 과정이다.
      leftIdx--; // 관심사의 이동
    }
  }
  return arr;
}

const test = [1, 5, 3, 8, 43, 2, 49];
console.log(insertionSort(test));