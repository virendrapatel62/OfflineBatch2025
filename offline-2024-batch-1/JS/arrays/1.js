const names = ["Viendra", "Jatin", "Kshitij", "Shashwat"];

console.log(names.length);

names.push("Sanskar");
console.log(names);

names.pop();
console.log(names);

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

// add a look 0 to len - 1 : names[index]

console.log("------- For Of loop --------");
for (const name of names) {
  console.log(name);
}

console.log("------- For in loop --------");
for (const index in names) {
  console.log(index);
}
