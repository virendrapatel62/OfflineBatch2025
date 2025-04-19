console.log("Callback");

// HOF // Higher order function
function order(callback) {
  console.log("Placing order ....");
  console.log("Placing order ...");
  console.log("Placing order ....");
  console.log("Placing order ....");

  console.log(callback());
}

function sendNotification() {
  console.log("Sending notification ....");
}

function sendEmail() {
  console.log("Sending Email ....");
}

order(sendNotification);
order(sendEmail);

function multiplier(a, b) {
  console.log(a * b);
}

console.clear();

multiplier(10, 12);
multiplier(10, 13);
multiplier(10, 14);
multiplier(10, 15);

function a() {
  function b() {
    console.log("FUnction B");
  }

  console.log("Fucntion A");

  return b;
}

let returnedB = a();

console.log(returnedB);
returnedB();

function outer() {
  console.log("tHIS IS oUTER");

  function inner() {
    console.log("tHIS IS INER");

    function innerInnner() {
      console.log("Inner inner");
    }

    return innerInnner;
  }
  return inner;
}

let returnedInner = outer();
let another = returnedInner();
another();

outer()()();

console.clear();

function A2() {
  function B(a, b) {
    function C() {
      console.log(a + b);
    }
    return C;

    //
    //
    //
    //
  }

  let c = B(23, 32);
  c(); // InVlid
}

debugger;
function A(callback) {
  console.log("FUnction A");
  callback();
}

function another2() {
  console.log("ANother");
}

A(another2);
