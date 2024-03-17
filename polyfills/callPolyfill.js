const obj = {
  name: "soumya",
};

function sayCall(age) {
  return "Hello " + this.name + " " + age;
}

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + " not a function");
  }
  context.fn = this;
  return context.fn(...args);
};

console.log(sayCall.myCall(obj, 24));
