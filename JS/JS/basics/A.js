const s1 = "hello";
const s2 = `
this i s
multi
line sctirng
`;

console.log(s1, s2);

const firstName = "Virendra";
const lastName = "Patel";

let fullName = "My Full Name IS " + firstName + " " + lastName;
console.log(fullName);

fullName = `My Full Name is ${firstName} ${lastName}`;
console.log(fullName);

const numbers = [12, 23, 4, 34];
console.log(numbers);

numbers.push(100);

console.log(numbers);

numbers.push(100);

console.log(numbers);

console.log(numbers[0]);
console.log(numbers[5]);

// numbers.pop();
// numbers.pop();
// numbers.pop();

console.log(numbers);

numbers.splice(2, 2);

console.log(numbers);
