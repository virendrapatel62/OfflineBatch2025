const date = new Date();

console.log(date.toString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMonth()); // 0 = jan , 11 = dec
console.log(date.getMinutes());
console.log(date.getFullYear());

console.log(Date.now());

// console.log((2025 - 1970) * 365 * 24 * 60 * 60 * 1000);

console.log(Date.parse("03-29-2025") < Date.parse("08-29-2025"));

var count = 0;
setInterval(() => {
  console.log(new Date().toLocaleTimeString(), count);
  count = 0;
}, 1000);

for (let index = 0; index < 100; index++) {
  console.log("loop ", count, new Date().toLocaleTimeString());
  count = count + 1;
}
