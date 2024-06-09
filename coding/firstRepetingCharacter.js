function firstRepeatingCharacter(str) {
  let start = 0,
    end = str.length - 1;
  while (start < end) {
    if (str[end] === str[start]) {
      console.log(str[end]);
      return;
    } else if (start === end - 1) {
      ++start;
      end = str.length - 1;
    } else {
      --end;
    }
  }
  console.log("NA");
}
firstRepeatingCharacter("sumooya");
