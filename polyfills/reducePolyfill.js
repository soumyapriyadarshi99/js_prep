const arr = [1, 2, 3, 4, 5];

Array.prototype.myReduce = function (fn, initialValue = 0) {
  let accValue = initialValue;
  for (let i = 0; i < this.length; i++) {
    accValue = fn(accValue, this[i], i.this);
  }
  return accValue;
};

const value = arr.myReduce((acc, curr) => acc + curr, 0);

console.log(value);
