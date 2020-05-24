function selectionSort (arr) {
  for (let i=0; i < arr.length-1; i++) { // 맨 마지막 요소는 가만 냅둬도 정렬이 완료되므로 -1을 함
    let minIdx = i; // 최소값을 minIdx를 찾아서 계속 갱신해둘 것이며
    for (let j=i+1; j < arr.length; j++) { // 현재 요소의 오른쪽부터 배열의 끝까지 쭉 훑으며
      if (arr[minIdx] > arr[j]) { // 자기보다 작은 요소를 발견하면 그걸 minIdx로 둔다.
        minIdx = j;
      }
    }
    if (i !== minIdx) [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]; // 자기 오른쪽 중 최종적인 최소값이랑 자기 자리를 바꾼다.
  }
  return arr;
}

const test = [1, 5, 3, 8, 43, 2, 49];
console.log(selectionSort(test));