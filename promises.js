var promise1 = new Promise((resolve, reject) => resolve("1st resolved"));
var promise2 = new Promise((resolve, reject) => reject("2nd rejected"));
var promise3 = new Promise((resolve, reject) => reject("3rd rejected"));

// promise chaining
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

//waits for all promise to complete, if any one  is rejected it will reject
// Promise.all;
// let allPromises = Promise.all([promise1, promise2, promise3]);
// allPromises
//   .then((res) => {
//     console.log("all ", res);
//   })
//   .catch((err) => console.log("all error", err)); //all error 2nd rejected

//Promise.allSettled - return array of object with promises. if one resolve it will be resolved
// let allPromisesSettled = Promise.allSettled([promise1, promise2, promise3]);
// allPromisesSettled
//   .then((res) => {
//     console.log("allsettled ", res);
//     // allsettled[
//     //   ({ status: "fulfilled", value: "1st resolved" },
//     //   { status: "rejected", reason: "2nd rejected" },
//     //   { status: "rejected", reason: "3rd rejected" })
//     // ];
//   })
//   .catch((err) => console.log("allsettled error", err));

// Promise.race -- first resolved promise
// let promisesRace = Promise.race([promise1, promise2, promise3]);
// promisesRace
//   .then((res) => {
//     console.log("race", res); //race 1st resolved
//   })
//   .catch((err) => console.log("race error", err));

//Promise.any -- firse promise may be rejected or accepted
// let anyPromise = Promise.any([promise1, promise2, promise3]);
// anyPromise
//   .then((res) => console.log("any ", res)) //any  1st resolved
//   .catch((err) => console.log("any error", err));
