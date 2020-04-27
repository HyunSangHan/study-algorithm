// 1부터 n까지의 합을 구해봐라.

const n = 1000; // 사용자 정의

// [방법 1] Reduce
function addsum1 (num) {
  let rawArr = [];
  for (let i=0; i<num; i++) rawArr.push(i+1);
  return rawArr.reduce((sum, value) => sum + value);
}
const ans1 = addsum1(n);

// [방법 2] Recursive call
function addsum2 (sum=0, value=1) {
  if (value>n-1) return sum;
  return addsum2(sum+value, value+1);
}

const ans2 = addsum2(n);


console.log(ans1);
console.log(ans2);
