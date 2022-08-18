// 1. Promise created, and it is in pending stage, does not hold any value
// 2. after 1 second, Promise has been resolved and now holds the value
// 3. callback function inside then() is invoked, and the promise gets resolved with the returned value as its value
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I have succeed");
  }, 1000);
});

// value returned from then() is another already resolved Promise, so we can chain up
myPromise
  .then((value) => value + "!!!")
  .then((newValue) => console.log(newValue));
