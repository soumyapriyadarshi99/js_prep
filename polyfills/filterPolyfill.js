const arr = [1, 2, 3, 4, 5];

Array.prototype.myFilter = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb.call(this[i])) {
      result.push(this[i]);
    }
  }
};

const result = arr.myFilter((item) => item > 2);
console.log(result);
