function quickSort (arr) {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = [arr[0]];
  let left = [];
  let right = [];

  for (let i=1; i < arr.length; i++) {
    if (arr[i] < pivot[0]) {
      left.push(arr[i]);
    } else if (arr[i] > pivot[0]) {
      right.push(arr[i]);
    } else {
      pivot.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

const test = [1, 5, 3, 8, 43, 2, 49];
console.log(quickSort(test));