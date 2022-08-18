const resolvedProm = Promise.resolve(1);

const thenProm = resolvedProm.then((value) => {
  // 2.
  console.log(
    "this gets called after the end of the main stack. the value received and returned is: ",
    value
  );
  return value;
});
// 1. instantly logging the value of thenProm
console.log(thenProm);

// 3. using setTimeout we can postpone the execution of a function to the moment the stack is empty
// setTimeout takes a function to execute and a delay time, if the time is omitted, then the function will be executed in the next event cycle.
setTimeout(() => {
  console.log(thenProm);
});

// -----

const secondResolvedProm = Promise.resolve(2);

const anotherThenProm = resolvedProm.then((value) => {
  console.log("value returned from the first Promise is: ", value);
  return secondResolvedProm;
});

setTimeout(() => {
  console.log(anotherThenProm);
});
