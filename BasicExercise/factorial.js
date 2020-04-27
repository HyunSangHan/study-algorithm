// 팩토리얼

const n = 1 // 사용자 정의

// [방법 1] Reduce
function fact1(num) {
  let rawArr = [];
  for (let i=0; i<num; i++) rawArr.push(i+1);
  return rawArr.reduce((product, value) => product*value);
}
const ans1 = fact1(n);

// [방법 2] Recursive
function fact2(num, product=1, value=1) {
  if (value > num) return product;
  return fact2(num, product*value, value+1);
}
const ans2 = fact2(n);

console.log(ans1);
console.log(ans2);
