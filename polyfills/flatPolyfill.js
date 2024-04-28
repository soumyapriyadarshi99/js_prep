let list = [1, 2, [3, [4, 5, [6, 7, 8]]], [6, 7], 8];

Array.prototype.myFlat = function (label) {
  if (!label) {
    label = 1;
  }
  if (!Array.isArray(this)) {
    throw new Error(this + "is not an array");
  }
  let result = [];

  function getFlatted(arr, depth) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && depth > 0) {
        getFlatted(arr[i], depth - 1);
      } else {
        result.push(arr[i]);
      }
    }
  }
  getFlatted(this, label);
  return result;
};

console.log(list.myFlat(Infinity));
// console.log(list.flat(1));
