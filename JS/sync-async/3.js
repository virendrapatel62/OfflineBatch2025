function replicateTimeout(callback, timeoutMillis) {
  const startTime = Date.now(); // Get the current time in milliseconds

  while (true) {
    const elapsedTime = Date.now() - startTime; // Calculate elapsed time
    if (elapsedTime >= timeoutMillis) {
      console.log("Timeout reached!");
      break; // Exit the loop when the timeout is reached
    }
  }

  callback();
}

function replicateTimeoutAsync(callback, timeoutMillis) {
  setTimeout(callback, timeoutMillis);
}

// console.log("Hello 1");

// console.log("Email Sending...");

// replicateTimeout(() => {
//   console.log("Email Sent");
// }, 2000);

// console.log("Hello 2");

console.log("Hello 1");

console.log("Email Sending...");

replicateTimeoutAsync(() => {
  console.log("Email Sent");
}, 2000);

console.log("Hello 2");
console.log("Hello 2");
console.log("Hello 2");
console.log("Hello 2");
console.log("Hello 2");
