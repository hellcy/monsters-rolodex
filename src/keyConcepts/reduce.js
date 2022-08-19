const array = [1, 2, 3, 4, 5];

// 1. we want to end up having only one value
// 2. we want to iterate over the entire array
const total = array.reduce(
  (accumulator, currentElement) => accumulator + currentElement,
  0 // initial value of the accumulator
);

console.log(total);
