const names = ["Virendra", "Jatin", "Kshitij", "Shashwat"];
const names2 = ["Mohan", "Sahil"];

let at0 = names.at(0);

console.log(at0);

at0 = names[0];
console.log(at0);

let newArray = names.concat(names2);
console.log(newArray);
console.log(newArray.length);

newArray = names2.concat(names);
console.log(newArray);
console.log(newArray.length);

let nums = [1, 2, 3];
newArray = names2.concat(names, nums);
console.log(newArray);
console.log(newArray.length);

let isThere = names.includes("Virendra");
console.log("Is There : ", isThere);

isThere = names.includes("Hero");
console.log("Is There : ", isThere);
