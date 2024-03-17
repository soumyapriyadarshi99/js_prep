const arr = [1, 2, 3, 4, 5];

Array.prototype.myReduce = function (fn, initialValue = 0) {
  let currentValue = initialValue;
  for (let i = 0; i < arr.length; i++) {
    currentValue = fn(this[i], currentValue, i.this);
  }
  return currentValue;
};

const value = arr.myReduce((acc, curr) => acc + curr, 0);

console.log(value);
