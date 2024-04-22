const arr = [1, 2, 3, 4];

Array.prototype.myMap = function (fn) {
  if (!Array.isArray(this)) {
    throw new Error(this, "is not an array");
  }
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(fn(this[i], i, this));
  }
  return result;
};
const newArray = arr.myMap((item, index) => item * 2 + index);
console.log(newArray);
