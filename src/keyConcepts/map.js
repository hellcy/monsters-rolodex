const myArray = [1, 2, 3, 4];

// do some modifications on each element in the existing array and returns them in a new array
const newArray = myArray.map((item) => item + item).filter((item) => item < 10);

// console.log(myArray);

console.log(newArray);
