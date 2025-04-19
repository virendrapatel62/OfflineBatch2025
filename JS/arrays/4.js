const numbers = [1, 2, 3];

// function printNumber(value, index) {
//   console.log(value, index);
//   return value + 10;
// }

// let result = numbers.forEach(printNumber);

// console.log(result);

let result = numbers.map((value) => {
  return value + 10;
});

console.log(result, numbers);
