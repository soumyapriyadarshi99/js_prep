/**@implements/mcq - https://roadsidecoder.hashnode.dev/javascript-interview-questions-call-bind-and-apply-polyfills-output-based-explicit-binding */

//call,apply,bind explicitly bind an object with a function.
//difference beetween these 3 are
//call()- will not give any new function, directly we have to pass argments
//apply()- will take arguments in list
//bind() - return a new reusuable function

const obj = {
  name: "soumya",
};

function sayCall(age) {
  return "Hello " + this.name + " " + age;
}
console.log(sayCall.call(obj, 24)); //Hello soumya 24

function sayApply(age, university) {
  return "Hello " + this.name + " " + age + " " + university;
}
console.log(sayApply.apply(obj, [24, "soa"])); //Hello soumya 24 soa

function sayBind(age) {
  return "Hello " + this.name + " " + age;
}
const bind1 = sayBind.bind(obj, 25);
const bind2 = sayBind.bind(obj, 26);
console.log(bind1()); //Hello soumya 25
console.log(bind2()); //Hello soumya 26

//mcqs
const age = 10;
var person = {
  name: "Piyush",
  age: 20,
  getAge: function () {
    return this.age;
  },
};

var person2 = { age: 24 };
console.log(person.getAge.call(person2)); //24
//------------------------------------//

// var status = "😎";
// setTimeout(() => {
//   const status = "😍";
//   const data = {
//     status: "🥑",
//     getStatus() {
//       return this.status;
//     },
//   };
//   console.log(data.getStatus()); //🥑
//   console.log(data.getStatus.call(this)); //😎
// }, 0);
//-----------------------///////////

//write printAnimals() in such a
//way that it prints all animals in object below.
const animals = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Queen" },
];

function printAnimals(i) {
  this.print = function () {
    console.log("#" + i + " " + this.species + ": " + this.name);
  };
  this.print();
}
animals.forEach((item, index) => printAnimals.call(item, index));

//-----------------------------///////////////////
function f() {
  console.log(this); // window object
}

let user = {
  g: f.bind(null),
};

user.g();
//---------------------------------------//
