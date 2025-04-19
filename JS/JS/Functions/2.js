// write a program to calculate sum or 2 numbers

function sum(a, b) {
  //   console.log("In side SUm function : ", "a : ", a, "b", b);

  const c = a + b;
  console.log(c);
}

// sum(10, 23);
// sum(10, 90);
// sum(10, 78);

for (let i = 100; i <= 110; i++) {
  sum(i, i + 5);
}
