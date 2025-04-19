// console.log("Hello Arrays");
// const numbers = [10, 20, 30, 40, 50];
// console.log(numbers);

for (let i = 0; i < 5; i++) {
  let r = "";
  for (j = i; j < 5; j++) {
    r = r + j;
  }
  console.log(r);
}

console.log("-------------");

for (let i = 0; i < 5; i++) {
  let r = "";
  for (j = 0; j <= i; j++) {
    r = r + j;
  }
  console.log(r);
}
console.log("-------------");

for (let i = 5; i > 0; i--) {
  let result = "";
  for (let j = 1; j <= i; j++) {
    result += j;
  }
  console.log(result);
}
