/**@description reference - https://roadsidecoder.hashnode.dev/javascript-interview-questions-currying-output-based-questions-partial-application-and-more */

function sum(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}
// console.log(sum(1)(2)(3)); //6

/** -------------------------------------------------------------- */
//evaluate expression
function evaluate(type) {
  return function (a) {
    return function (b) {
      if (type === "add") return a + b;
      else if (type === "sub") return a - b;
      else if (type === "mul") return a * b;
      else if (type === "div") return a / b;
      else return "Invalid operation";
    };
  };
}
const add = evaluate("add");
const sub = evaluate("sub");
const mul = evaluate("mul");
const div = evaluate("div");
// console.log(add(3)(5));
// console.log(sub(5)(3));
// console.log(mul(3)(5));
// console.log(div(6)(3));

/** -------------------------------------------------------------- */
function sum(a) {
  return (b) => {
    return (c) => {
      return () => {
        return a + b + c;
      };
    };
  };
}
// console.log(sum(1)(2)(3)());

/** -------------------------------------------------------------- */
//infinity currying
function sum(a) {
  return function (b) {
    if (b) return sum(a + b);
    return a;
  };
}
// console.log(sum(1)(2)(8)());

/** -------------------------------------------------------------- */
// partail function - when the number of curried function is less than the number of
// arguments
