const obj = {
  name: "soumya",
};

function sayApply(age, university) {
  return "Hello " + this.name + " " + age + " " + university;
}

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + " not a function");
  }
  if (!Array.isArray(args)) {
    throw new Error("not an array");
  }
  context.fn = this;
  return context.fn(...args);
};

console.log(sayApply.myApply(obj, [24, "soa"]));
