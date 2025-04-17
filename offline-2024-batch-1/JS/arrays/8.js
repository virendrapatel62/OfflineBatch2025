const numbers = [2, 3, 45, 6, 3, 6, 7, , 435, 45, 656, 56];

// const greaterThen7 = numbers.find((n) => {
//   //   if (n > 7) return true;

//   return n > 7;
// });

const greaterThen7 = numbers.find((n) => n > 7);

console.log(greaterThen7);

const allGreaterThen7 = numbers.filter((n) => n > 7);

console.log(greaterThen7);
console.log(allGreaterThen7);
