function orderFood(fail = false) {
  return new Promise((resolve, reject) => {
    console.log("Got it taken the order");

    setTimeout(() => {
      console.log("Processing the food....");
    }, 2000);

    setTimeout(() => {
      console.log("Going to Deliver....");
    }, 3000);

    if (fail)
      setTimeout(() => {
        console.log("Almost There....");
        reject(new Error("Accedent ho gya..."));
      }, 4000);
    else
      setTimeout(() => {
        console.log("Almost There....");
      }, 4000);

    setTimeout(() => {
      resolve("I am at your door");
    }, 5000);
  });
}
