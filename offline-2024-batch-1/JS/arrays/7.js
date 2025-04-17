const numbers = [10, 20, 45, 67, 54, 78];
const n = 67;

let exists = numbers.includes(n);
console.log(exists);

const names = ["Viendra", "Jatin", "Kshitij", "Shashwat"];
exists = names.includes("Jatin");
console.log(exists);

const students = [
  {
    firstName: "Amit",
    lastName: "Sharma",
  },

  {
    firstName: "Virendra",
    lastName: "Patel",
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

const studentToSearch = {
  firstName: "Virendra",
  lastName: "Patel",
};
// console.log(students.includes(studentToSearch));

const foundStudent = students.find((student) => {
  if (
    student.firstName == studentToSearch.firstName &&
    student.lastName == studentToSearch.lastName
  ) {
    return true;
  } else {
    return false;
  }
});

const indexOfStudent = students.findIndex((student) => {
  if (
    student.firstName == studentToSearch.firstName &&
    student.lastName == studentToSearch.lastName
  ) {
    return true;
  } else {
    return false;
  }
});

console.log(foundStudent);
console.log(indexOfStudent);
