const daznRound1 = (arr1, arr2) => {
  const merged = [...arr1, ...arr2];
  let nonRepeatedSet = new Set([...merged]);
  let nonRepeatedList = [...nonRepeatedSet];
  const sortedArr = doSort(nonRepeatedList);
  console.log(sortedArr);
};

const doSort = (list) => {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] > list[j]) {
        let current = list[i];
        list[i] = list[j];
        list[j] = current;
      }
    }
  }
  return list;
};

daznRound1([1, 2, 3, 3, 2, 1], [8, 9, 5, 1, 5]);
