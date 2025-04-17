console.log(Math.PI);

console.log(Math.SQRT2);

console.log(Math.ceil(90.9));
console.log(Math.floor(90.9));
console.log(Math.ceil(Math.PI));
console.log(Math.trunc(90.33));

console.log(Math.sign(-4));
console.log(Math.sign(4));
console.log(Math.sign(0));
console.log(Math.sign(-0));

console.log(Math.pow(10, 3));

function pow(number, p) {
  let ans = 1;
  for (let i = 0; i < p; i++) {
    ans = ans * number;
  }

  return ans;
}

console.log(pow(23, 2));

function makePositive(n) {
  if (n == 0) {
    return 0;
  }

  if (n < 0) {
    return n * -1;
  }

  return n;
}

console.log(makePositive(90));
console.log(makePositive(-90));
console.log(makePositive(0));
console.log(makePositive(-0));

function makePositiveV2(n) {
  const sign = Math.sign(n);

  if (sign == 1) {
    return n;
  }

  if (sign == 0) {
    return 0;
  }

  return -n;
}
console.log(makePositiveV2(90));
console.log(makePositiveV2(-90));
console.log(makePositiveV2(0));
console.log(makePositiveV2(-0));
