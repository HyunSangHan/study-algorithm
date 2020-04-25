function normalFibonacci (n) {
  if (n < 2) {
    return 1;
  }
  return normalFibonacci(n-1) + normalFibonacci(n-2);
}

let cache = new Array();
function dpFibonacci (n) {
  if (cache[n]) return cache[n];
  if (n < 2) {
    return 1;
  }
  cache[n] = dpFibonacci(n-2) + dpFibonacci(n-1);
  return cache[n];
}

function runFibonacci (length, isDP) {
  if (isDP) {
    for (let i=0; i < length; i++) {
      console.log(dpFibonacci(i));
    }
  } else {
    for (let i=0; i < length; i++) {
      console.log(normalFibonacci(i));
    }
  }
}

runFibonacci(100, true);