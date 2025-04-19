const students = [
  {
    firstName: "Virendra",
    lastName: "Patel",
  },
  {
    firstName: "Amit",
    lastName: "Sharma",
  },
  {
    firstName: "Priya",
    lastName: "Kumar",
  },
  {
    firstName: "Rajesh",
    lastName: "Verma",
  },
  {
    firstName: "Anjali",
    lastName: "Mehta",
  },
];

// [
//   "Virendra Patel",
//   "Amit Sharma",
//   "Priya Kumar",
//   "Rajesh Verma",
//   "Anjali Mehta"
// ]

console.log(students);

function fullNameBuilder(student) {
  return student.firstName + " " + student.lastName;
}

const stduentNames = students.map(fullNameBuilder);

console.log(stduentNames);
