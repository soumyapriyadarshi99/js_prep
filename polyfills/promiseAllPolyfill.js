var promise1 = new Promise((resolve, reject) => resolve("1st resolved"));
var promise2 = new Promise((resolve, reject) => resolve("2nd rejected"));
var promise3 = new Promise((resolve, reject) => resolve("3rd rejected"));

function myPromiseAll(promises = []) {
  let result = [];
  let counter = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((prom, index) => {
      prom
        .then((res) => {
          result[index] = res;
          ++counter;
          if (counter === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

let myPromiseAllVar = myPromiseAll([promise1, promise2, promise3]);

myPromiseAllVar
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

// let PromiseAllVar = Promise.all([promise1, promise2, promise3]);
// PromiseAllVar.then((res) => {
//   console.log(res);
// }).catch((err) => console.log(err));
