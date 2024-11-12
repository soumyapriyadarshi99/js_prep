function countFrequency(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    let keys = Object.keys(result);
    if (keys.includes(str[i])) {
      let val = result[str[i]];
      result[str[i]] = val + 1;
    } else {
      result[str[i]] = 1;
    }
  }
  console.log(result);
}
countFrequency("character");
