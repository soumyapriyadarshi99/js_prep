function sum(...args) {
  let sum = 0;
  args.forEach((item) => {
    sum = sum + item;
  });
  return sum;
}
console.group(sum(4, 5, 6));
