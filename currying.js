function sum(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}

/* you can call it in two ways*/
console.log(sum(1)(2)(3)); //6
