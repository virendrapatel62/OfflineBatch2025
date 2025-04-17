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

// const student1 = students[0]

const [firstStudent, secondStudent] = students;
console.log(firstStudent, secondStudent);

const firstStudentCopy = { ...firstStudent };
console.log(firstStudentCopy);

firstStudentCopy.name = "Copy";

console.log(firstStudent);
console.log(firstStudentCopy);
