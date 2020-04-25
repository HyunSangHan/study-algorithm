function lis(start) {
  if (cache[start]) return cache[start];
  cache[start] = 1;
  for (let i = start+1; i < l; i++) {
    if (arr[start] < arr[i]) {
      // 둘 중 큰놈을 캐시에 갈아끼워넣기
      if (cache[start] < lis(i) + 1) {
        cache[start] = lis(i) + 1;
      }
    } 
  }
  return cache[start];
}

const arr = [1, 5, 3, 8, 43, 2, 49];
const l = arr.length;
let cache = new Array(l);

for (let i=0; i < arr.length; i++) lis(i);
console.log(Math.max.apply(null, cache));