const log = console.log;

let count = 0;
let intervalRef;

log("Created variables", count, intervalRef);

const printNumber = function () {
  log("Function Called", "Value of count", count);

  if (count == 5) {
    log("Count is now 5");
    clearInterval(intervalRef);
    log("Interval CLeared");
    return;
  }
  log("Logging Count : ", count);
  count++;
};

log("Created Function", printNumber);
log("Calling Function", printNumber);

intervalRef = setInterval(printNumber, 1000);

log("interval Ref", intervalRef);
