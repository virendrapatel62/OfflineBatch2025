function question1() {
  const numbers = [12, 2, 34, 5];
  let sum = 0;
  numbers.forEach((number) => {
    sum = sum + number;
  });

  console.log("sum", sum);
}

question1();

function question2() {
  const objects = [
    { name: "Book", price: 100 },
    { name: "Pen", price: 20 },
  ];

  const updated = objects.map((object) => {
    const newObject = {
      name: object.name,
      price: Math.round(object.price * 1.1),
    };
    return newObject;
  });

  console.log("updated", updated);
  console.log("objects", objects);

  console.log(updated[0] == objects[0]);
}

question2();

// let student = {};

// let s2 = student;
// let s3 = student;

// console.log(student == s2);
// console.log(student == s3);
