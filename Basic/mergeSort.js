function mergeSort (arr) {
  if (arr.length < 2) {
    return arr;
  }

  const mid = parseInt(arr.length / 2); // 중간점을 정한 다음
  const leftArr = arr.slice(0, mid); // 왼쪽과
  const rightArr = arr.slice(mid, arr.length); // 오른쪽으로 분할한다.
  return mergeWithSort(mergeSort(leftArr), mergeSort(rightArr)); // 그리고 분할된 것을 합치며 배열한다.
}

function mergeWithSort (leftArr, rightArr) {
  let resultArr = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < leftArr.length && rightIdx < rightArr.length){ // left와 right의 첫번째요소끼리 계속 비교해서 작은 요소가 resultArr로 물러난다.(마치 팀대팀 가위바위보 같이)
    if (leftArr[leftIdx] <= rightArr[rightIdx]) { // 왼쪽 요소가 더 작았을 때
      resultArr.push(leftArr[leftIdx]); // 왼쪽 요소 물러나기
      leftIdx++; // 다음 타자 준비
    } else { // 오른쪽 요소가 더 작았을 때
      resultArr.push(rightArr[rightIdx]); // 오른쪽 요소 물러나기
      rightIdx++; // 다음 타자 준비
    }
  }
  return resultArr.concat(leftArr.slice(leftIdx), rightArr.slice(rightIdx)); // 아직 비교 대상에 들어가보지도 못한 '나머지 요소'들은 모두 뒤에다 합쳐버린다.
}

const test = [1, 5, 3, 8, 43, 2, 49];
console.log(mergeSort(test));