const student = {
  name: "Virendra",
  age: 24,
  address: {
    city: "Jabalpur",
    area: "Bazar mohalla",
    pincode: 483001,
  },
  randomValue: "Random Text",
};

const studentCopy = { ...student }; // Spread Op

// console.log(student, studentCopy);

const { name, ...studentWithoutName } = student; // Rest Operator

console.log(studentWithoutName);

const array = [12, 23, 45, 56, 76];

const [number1, ...bakiKeNumber] = array; // Rest Operator
console.log(number1, bakiKeNumber);
