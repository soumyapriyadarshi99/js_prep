//function expression - when we store a function to a variable, is called
// function expression. The function is called annonymous function
const square = function (num) {
  return num * num;
};

//first class function - functions can be pased to another functions.
function square(num) {
  return num * num;
}
function displaySquare(fn) {
  console.log("square", fn(5));
}

//IIFE - immediately invoked function expression
(function square(num) {
  console.log(num * num);
})(5);
