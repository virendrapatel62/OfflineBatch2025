// Assignment Solution.

function assign1(a, b) {
  return a + b;
}

function assign2(number) {
  return number * number;
}

function assign3(firstName, lastName) {
  //   return firstName + "_" + lastName;
  return `${firstName}_${lastName}`;
}

function assign4(paragraph) {
  return paragraph.length;
}

function assign5(number1, number2) {
  if (number1 > number2) {
    // runs whene condition is true
    return number1;
  } else if (number2 > number1) {
    //runs when conditon is false
    return number2;
  } else {
    return "both are equal";
  }
}

// console.log(assign5(100, 100));

function assign6() {}

function assign7() {}

function isEven(number) {
  // get the remainder

  const rem = number % 2;
  //  check if remaineer is 0 then reutrn true

  if (rem == 0) {
    console.log("number is even");
    return true;
  } else {
    console.log("Number is odd");
    return false;
  }

  //   if (rem == 1) {
  //     console.log("Number is odd");
  //     return false;
  //   }

  //  check if remaineer is 1 then reutrn false
}
// let ans = isEven(10);
// console.log(ans);

// ans = isEven(11);
// console.log(ans);

function greet(input) {
  /**
   * Steps:
   * check input is monrning then return good morning
   * check if input is evening then return good eveening
   * agar dono nahi to , return "HEllo WOrld.."
   */

  if (input == "morning") {
    return "Good Morning";
  } else if (input == "evening") {
    return "Good Eveneing";
  } else {
    return "Hello";
  }
}

console.log(greet("morning"));
console.log(greet("evening"));
console.log(greet("nothing"));

function cToF(c) {
  // (1°C × 9/5) + 32 = 33.8°F
  //   get the values of celcius
  //   write the formula
  //   reutrn answ/

  let f = c * (9 / 5) + 32;
  return f;
}

const answer = cToF(1);

console.log(answer);
console.log(cToF(101));

function kuchBhi(name, index) {
  console.log(name[0]);
  console.log(name.length);
  console.log(name.charAt(index));
}

const name = "Virendra";
kuchBhi(name, 1);

// 25
function function1() {
  return 1;
}

function function2() {
  return 90;
}

// 25

function functionWithParam(a, b) {
  return a;
}
