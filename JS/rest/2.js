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

// Default values white destructuring

const { name: firstName, lastName = "NA", age = 18 } = student;

console.log(firstName, lastName, age);

const marks = [99, 98, 78, undefined, 78];

// setting default value for ss
const [maths, hindi, english, ss = 33, s] = marks;

console.log({ ss, s, english }); // creatitng object on the fly
