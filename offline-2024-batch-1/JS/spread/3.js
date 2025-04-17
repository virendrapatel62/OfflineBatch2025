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

const studentsCopy = [...students];

console.log(studentsCopy == students);

studentsCopy[0].name = "Updated name";

console.log(studentsCopy[0] == students[0]);
console.log(studentsCopy[0], students[0]);
