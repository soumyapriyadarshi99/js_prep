let obj = { a: { b: { c: { d: { e: "f" } } } }, e: { f: { g: "h" } } };

let result = [];
for (let key in obj) {
  let value = obj[key];
  while (typeof value === "object") {
    value = Object.values(value)?.[0];
  }
  result.push(value);
}
console.log(result);
