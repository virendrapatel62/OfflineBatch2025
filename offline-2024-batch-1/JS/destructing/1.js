console.log("Destrucring..");

const numbers = [67, 5, 44, 34, 23];
console.log(numbers);

// const firstNumber = numbers[0];
// const secondNumber = numbers[1];

const [firstNumber, secondNumber, tn, , fn] = numbers;

console.log(firstNumber, secondNumber, tn, fn);

const student = {
  name: "Virendra",
  age: 24,
};

// let name = student.name
// let age = student.age

const { name, age } = student;
const { name: firstName } = student;

console.log(name, age, firstName);

// const { 4: lastNumber } = numbers;

// console.log(lastNumber);
