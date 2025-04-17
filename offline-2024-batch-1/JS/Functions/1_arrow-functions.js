// function sum(a, b, c) {
//   console.log(a + b + c);
// }

// sum(10, 10, 90);

const sum = (a, b, c) => {
  console.log(a + b + c);
};

sum(10, 10, 90);

// const multipy = () => {
//   return 90;
// };
let multipy = () => 90;

console.log(multipy());

multipy = (a, b) => a * b;

// function multipy(a , b){
//     return a * b;
// }

console.log(multipy(10, 20));

const numbers = [10, 20, 12, 45, 67, 98, 44, 66, 20, 30, 0];

const doubleOfNumbes = numbers.map((n) => n * 2);
const tripleOfNumber = numbers.map((n) => n * 3);
const evenNumbersOnly = numbers.filter((n) => n % 2 == 0);
const oddNumbersOnly = numbers.filter((n) => n % 2 == 1);

// const doubleOfNumbes = [];
// const tripleOfNumber = [];

// const evenNumbersOnly = [];
// const oddNumbersOnly = [];

// for (let number of numbers) {
//   doubleOfNumbes.push(number * 2);
// }

// for (let number of numbers) {
//   tripleOfNumber.push(number * 3);
// }

// for (let number of numbers) {
//   if (number % 2 == 0) {
//     evenNumbersOnly.push(number);
//   }
// }

// for (let number of numbers) {
//   if (number % 2 == 1) {
//     oddNumbersOnly.push(number);
//   }
// }
console.log(doubleOfNumbes);
console.log(tripleOfNumber);
console.log(evenNumbersOnly);
console.log(oddNumbersOnly);

console.clear();

function sayHello(callback) {
  callback();
}

const myCallback = () => {
  console.log("Callback functio called fro say hello");
};

sayHello(() => {
  console.log("Callback functio called fro say hello");
});

() => {};

() => {};

() => {};

() => {};
(a, b) => b;
(a, b) => a;

(a, b) => a * 90;

const outerArrow = (a, b) => () => {
  console.log("Hello");
};

const innerArrow = outerArrow(90, 90);
innerArrow();
