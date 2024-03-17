const obj = {
  name: "soumya",
};

function sayBind(age, university) {
  return "Hello " + this.name + " " + age + " " + university;
}

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this, "is not a function");
  }
  context.fn = this;
  return () => context.fn(...args);
};

const bind1 = sayBind.myBind(obj, 24, "soa");
const bind2 = sayBind.myBind(obj, 25, "soa");
const bind3 = sayBind.myBind(obj, 26, "soa");
console.log(bind1());
console.log(bind2());
console.log(bind3());
