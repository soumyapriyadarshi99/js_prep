var obj = { a: { b: { c: { d: "e" } } }, f: { g: { h: { i: "j" } } } };

let temp = obj;
let arr = [];

for (let idx in obj) {
  let res = obj[idx];
  while (typeof res === "object") {
    let values = Object.values(res);
    res = values?.[0];
  }
  arr.push(res);
}
console.log(arr);
