function sum(a, b) {
  console.log(a + b);
}

sum(1, 90);

const add = sum;

add(90, 90);

console.log(sum == add);
