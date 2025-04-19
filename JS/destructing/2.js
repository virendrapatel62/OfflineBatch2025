const students = [
  {
    id: 1,
    name: "John Doe",
    age: 20,
    major: "Computer Science",
    gpa: 3.7,
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 22,
    major: "Mechanical Engineering",
    gpa: 3.9,
  },
];

const [john, jane] = students;

// students.forEach((student) => {
//   const { name, major, gpa, id, age } = student;
//   console.log(name, gpa, id, age);
// });

// students.forEach(({ name }) => {
//   console.log(name);
// });

// console.log(name, age);
// console.log(janeAge, janeName);
