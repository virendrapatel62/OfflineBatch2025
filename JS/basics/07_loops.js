console.log("Loops");

// for (let index = 100; index >= 1; index--) {
//   //code
//   console.log(index);
// }
// console.log("ENd");

let array = [12, 23, 4, 54, 45, 34, 4, 3];

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

console.log("Reverse of the array");

for (let index = array.length - 1; index > -1; index--) {
  const element = array[index];
  console.log(element);
}

console.clear();

let sum = 0;
let num = 10;

for (let index = 0; index <= 10; index++) {
  sum = sum + index;
  // console.log(sum);
}

console.log(sum);

console.clear();

let number = 49;
let i = 2;

for (i = 2; i < number; i++) {
  let rem = number % i;

  if (rem == 0) break;
}

if (i == number) {
  console.log("NUmber is prime");
} else {
  console.log(number + " is not prime, NUmber is divisibe by " + i);
}
