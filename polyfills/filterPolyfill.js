const arr = [1, 2, 3, 4, 5];

Array.prototype.myFilter = function (fn) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

const result = arr.myFilter((item) => item > 2);
console.log(result);
