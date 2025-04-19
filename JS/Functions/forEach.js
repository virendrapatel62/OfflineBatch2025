const numbers = [12, 3, 45, 34, 65, 78, 89];
const numbers2 = [65, 78, 89];

function logWithMultiple(element) {
  console.log(element * 20);
}

function logPlus10(element) {
  console.log(element + 10);
}

function forLoop(array, callback) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index]; // reading value of a perticular index
    callback(element); // passing element to callback function
  }
}

forLoop(numbers, logWithMultiple);
forLoop(numbers, logPlus10);

const names = ["Virendra", "Sandeep", "Jatin"];

function printNames(name) {
  console.log("Called callback", name);
}

forLoop(names, printNames);

// forLoop(["Virendra", "Sandeep", "Jatin"], function (name) {
//   console.log("Called callback", name);
// });

// for (let index = 0; index < numbers.length; index++) {
//   const element = numbers[index];
//   console.log(element);
// }

// for (let index = 0; index < numbers.length; index++) {
//   const element = numbers[index];
//   console.log(element * 10);
// }

// for (let index = 0; index < numbers.length; index++) {
//   const element = numbers[index];
//   console.log(element * 20);
// }
