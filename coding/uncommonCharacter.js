//https://www.geeksforgeeks.org/find-uncommon-characters-two-strings/
//Input: str1 = “characters”, str2 = “alphabets”
//Output: b c l p r

function uncommonChar(str1, str2) {
  let result = [];
  for (let i = 0; i < str1.length; i++) {
    if (!str2.includes(str1[i]) && !result?.includes(str1[i])) {
      result.push(str1[i]);
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (!str1?.includes(str2[i]) && !result?.includes(str2[i])) {
      result.push(str2[i]);
    }
  }
  let sortedArray = result.sort();
  let finalString = sortedArray.join("");

  console.log(finalString);
}
uncommonChar("characters", "alphabets");
