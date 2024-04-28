var promise1 = new Promise((resolve, reject) => resolve(1));
var promise2 = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve("printed after 2 second");
  }, 2000)
);
var promise3 = new Promise((resolve, reject) => reject(3));

//promise chaining
// promise1
//   .then((res) => {
//     console.log(res);
//     return promise2;
//   })
//   .then((res) => {
//     console.log(res);
//     return promise3;
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log("error in promise", err));

//Promise.all
let allPromises = Promise.all([promise1, promise2, promise3]);
allPromises
  .then((res) => {
    console.log("all ", res);
  })
  .catch((err) => console.log("all ", err));

//Promise.allSettled
let allPromisesSettled = Promise.allSettled([promise1, promise2, promise3]);
allPromisesSettled
  .then((res) => {
    console.log("allsettled ", res);
  })
  .catch((err) => console.log("allsettled ", err));

// Promise.race
let promisesRace = Promise.race([promise1, promise2, promise3]);
promisesRace
  .then((res) => {
    console.log("race", res);
  })
  .catch((err) => console.log("race ", err));
