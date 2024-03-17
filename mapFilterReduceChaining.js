let students = [
  { name: "Piyush", roll: 31, marks: 60 },
  { name: "Soumya", roll: 23, marks: 80 },
  { name: "Aayush", roll: 13, marks: 35 },
  { name: "Rakshi", roll: 18, marks: 55 },
];

//calculate total marks of students whose marks greater than 60 after
//ading 20
const total1 = students
  .filter((staudent) => staudent?.marks + 20 > 60)
  .reduce((acc, curr) => acc + curr?.marks, 0);
console.log(total1);

//whose marks less than 60, add 20 marks,
//if marks greater than 60, then find total marks

const total2 = students
  .filter(
    (student) =>
      student?.marks >= 60 || (student.marks < 60 && student?.marks + 20 > 60)
  )
  .reduce((acc, cur) => acc + cur?.marks, 0);

console.log(total2);
