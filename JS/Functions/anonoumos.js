const likho = console.log;

const sum = function (a, b) {
  likho(a + b);
};

sum(90, 90);

likho("Hello world..");

function doAfter(callback) {
  console.log("DO After", callback);
  callback();
}

function goToSchool() {
  console.log("Going....");
}

doAfter(goToSchool);

function printTable() {
  for (let index = 1; index <= 10; index++) {
    console.log(`${2} X ${index} = ${2 * index}`);
  }
}

// console.log("Before setting timeout");
// setTimeout(printTable, 5000);
// console.log("After setting timeout");

function printTimeEverySec() {
  console.log(new Date().toLocaleTimeString());
}

printTimeEverySec();

const intervalRef = setInterval(printTimeEverySec, 1000);

function clearMyTimeWork() {
  clearInterval(intervalRef);
}

// clearMyTimeWork();

setTimeout(clearMyTimeWork, 5 * 1000);
