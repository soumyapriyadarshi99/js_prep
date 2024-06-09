const obj = [
  { id: 2, val: 2 },
  { id: 1, val: 1 },
];

const doSort = (list) => {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i]?.id > list[j]?.id) {
        let current = list[i];
        list[i] = list[j];
        list[j] = current;
      }
    }
  }
  return list;
};

console.log(doSort(obj));
