const names = ["Virendra", "Jatin", "Kshitij", "Shashwat"];

// function print(value, index) {
//   console.log("Print called", value, index);
// }

// names.forEach(print);

names.forEach((value, index) => {
  console.log("Print called", value, index);
});

names.forEach((value, index) => {
  console.log(value, index);
});

let returnValue = names.forEach((v, i) => {
  console.log(v, i);
});

console.log(returnValue);

let numbers = [1, 2, 3, 4];

returnValue = numbers.map((v, i) => {
  return v * 10;
});

console.log(numbers);
console.log(returnValue);

{
  const names = ["Virendra", "Jatin", "Kshitij", "Shashwat"];

  const lengths = names.map((name) => {
    return name.length;
  });

  console.log(lengths);
}

{
  const names = ["Virendra", "VIRENDRA", "Kshitij", "Shashwat"];

  const uppers = names.map((name) => {
    return name.toUpperCase();
  });

  console.log(uppers);
}
