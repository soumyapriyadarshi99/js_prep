//this refers to current context;
//this defaultly points to global object
//it behaves differently in different context
//inside arrow function this takes object from its outer normal function. implicitly bind with outer normal function
//if we dont have any parent normal function this will refers
//to window object
//inside class this always refers to the cureent class variables

/**@description/mcqs - https://roadsidecoder.hashnode.dev/javascript-interview-questions-this-keyword-output-based-scope-implicit-binding-etc */

const obj = {
  fname: "soumya",
  lname: "das",
  getName: function () {
    console.log(this); //refers to current object
    console.log(this.fname + " " + this.lname); //soumya das
  },
};

const obj1 = {
  fname: "soumya",
  lname: "das",
  getName: () => {
    console.log(this); //refers to window object
    console.log(this.fname + " " + this.lname); //undefined undefined
  },
};

const obj2 = {
  fname: "soumya",
  lname: "das",
  getName: function () {
    const getNameInner = () => {
      console.log(this); //refers to current object
      console.log(this.fname + " " + this.lname); //soumya das
    };
    getNameInner();
  },
};

// obj2.getName();

class User {
  constructor(name) {
    this.name = name;
  }
  getName = () => {
    console.log(this); // refers to current class i.e. User {name: 'soumya', getName: ƒ}
    console.log(this.name); //soumya
  };
}
const user = new User("soumya");
user.getName();
