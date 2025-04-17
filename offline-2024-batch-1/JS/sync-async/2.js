// Example of sync code

console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

setTimeout(() => {
  for (let index = 0; index < 40; index++) {
    console.log({ index });
  }
}, 1000);

console.log("6");
console.log("7");
console.log("8");
console.log("9");
console.log("10");
