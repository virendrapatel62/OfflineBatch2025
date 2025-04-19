console.log("Loops Assignment");

// Assignme 1

{
  let n = 20;
  let result = 0;

  for (let index = 1; index <= n; index++) {
    result += index;
  }

  console.log("1 + 2 + 3 .. + n : ", result);
}

// Assignme 2
{
  let n = 10;
  let result = 1;

  for (let index = 1; index <= n; index++) {
    result *= index;
  }

  console.log("1 * 2 * 3 .. * n : ", result);
}

// Assignme 3
{
  let n = 898;
  let result = n;
  let i = 0;

  for (; result > 0; ) {
    result = parseInt(result / 10);
    i++;
  }

  console.log(i);
}

{
  let number = 9090;

  let count = 0;
  let result = number;
  while (result > 0) {
    result = ~~(result / 10);
    count++;
  }

  console.log("Number of digit in ", number, " = ", count);
}
