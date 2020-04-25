function HashTable (size) {
  this.buckets = new Array(size);
  this.size = size;
}

HashTable.prototype.runHash = function (key) {
  return key.toString().length % this.size;
}

HashTable.prototype.set = function (key, value) {
  const idx = this.runHash(key); // key가 index화되는 시점!
  if (!this.buckets[idx]) this.buckets[idx] = []; // hash collision을 감안하여 처음엔 미리 array형태로 만들어둠
  this.buckets[idx].push([key, value]);
}

HashTable.prototype.get = function (key) {
  const idx = this.runHash(key);
  if (!this.buckets[idx]) return null;
  for (let i=0; i < this.buckets[idx].length; i++) { // collision인 경우에는 O(n)이 걸리더라도 해당 idx 내에서 key로 찾아야 함
    if (this.buckets[idx][i][0] === key) {
      return this.buckets[idx][i][1];
    }
  }
  
  return null;
}

const hashtable = new HashTable(10);

hashtable.set("abcd", "first");
hashtable.set("abcde", "second");
hashtable.set("abcdf", "third");
hashtable.set("abd", "fourth");
hashtable.set("d", "fifth");

console.log(hashtable);
console.log(hashtable.get("abcd"));
console.log(hashtable.get("d"));