class MyPromise {
  constructor(executor) {
    this.onSuccess = null;
    this.onFailed = null;
    this.isFulfilled = false;
    this.isRejected = false;
    this.isCalled = false;
    this.value;
    this.then = function (cb) {
      this.onSuccess = cb;
      return this;
    };
    this.catch = function (cb) {
      this.onFailed = cb;
    };
    executor(this.resolve, this.reject);
  }
  resolve = (successData) => {
    this.onSuccess(successData);
  };

  reject = () => {};
}

const myPromise = new MyPromise((res, rej) =>
  setTimeout(() => {
    res("Good Data");
  }, 1000)
);

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
