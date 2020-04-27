function quickSort (arr, startIdx =0, endIdx =arr.length-1) {
  if (startIdx >= endIdx) { // 시작점과 끝점이 교차되는 순간 재귀호출을 끝낸다.
    return;
  }
  const pivotIdx = partition(arr, startIdx, endIdx)

  quickSort(arr, startIdx, pivotIdx); // 피벗의 왼쪽 부분 재귀
  quickSort(arr, pivotIdx+1, endIdx); // 피벗의 오른쪽 부분 재귀

  return arr;
}

function partition (arr, startIdx, endIdx) {
  const pivot = arr[startIdx]; // 편의상 이 퀵정렬 대상 배열의 첫번째 요소를 pivot으로 삼았다.
  let leftIdx = startIdx + 1; // 이미 pivot이 startIdx를 가져가버렸으므로 그 다음부터로 시작점을 새로 잡는다.
  let rightIdx = endIdx; // endIdx에는 영향이 없지만 가독성 차원에서 변수명을 통일했다.

  while (leftIdx <= rightIdx) { // 시작점과 끝점이 교차되기 전까지 파티션 로직을 실행한다.
    while (arr[leftIdx] < pivot) { // pivot보다 큰 요소(오른쪽 파티션에 가야 마땅한 요소)를 찾을 때까지 돈다.
      leftIdx++; // 그러한 요소를 찾지 못했다면 다음 요소로 관심사를 돌린다.
    }
    while (pivot < arr[rightIdx]) { // pivot보다 작은 요소(왼쪽 파티션에 가야 마땅한 요소)를 찾을 때까지 돈다.
      rightIdx--; // 그러한 요소를 찾지 못했다면 이전 요소로 관심사를 돌린다.
    }
    if (leftIdx <= rightIdx) { // 이 조건은 이미 while에 있다고 생각해서 빠뜨리기 쉬운데, while은 leftIdx와 rightIdx의 변화를 반영하지 못하므로, 이 조건을 다시 써줘야 한다.
      [arr[leftIdx], arr[rightIdx]] = [arr[rightIdx], arr[leftIdx]]; // 찾은 요소끼리는 피차 니즈가 있으므로 서로 바꾼다.
    }
  }

  [arr[startIdx], arr[rightIdx]] = [arr[rightIdx], arr[startIdx]]; // 파티셔닝이 끝났으면, 맨 앞에 있던 pivot이 가운데로 들어올 차례이다. 현 시점에서 leftIdx와 rightIdx는 이미 교차되어버린 상태라, leftIdx가 아닌 더 왼쪽에 있는 rightIdx를 택해야만 옳다.
  const pivotIdx = rightIdx;
  return pivotIdx;
}

const test = [1, 5, 3, 8, 43, 2, 49];
console.log(quickSort(test));