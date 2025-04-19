console.log("Strings");

let fullName = "Virendra Kumar Patel";

let result = fullName.at(0);
console.log(result);

result = fullName.charAt(0);
console.log(result);

result = fullName.charCodeAt(0);
console.log(result);

result = fullName.concat("New Stirng");
console.log(result, " --- ", fullName);

result = fullName.endsWith("Patel");
console.log(result);

result = fullName.startsWith("Vi");
console.log(result);

result = fullName.indexOf("K");
console.log(result);

result = fullName.indexOf("a");
console.log(result);

result = fullName.lastIndexOf("a");
console.log(result);

result = fullName.includes("ren");
console.log(result);

result = fullName.includes("adi");
console.log(result);

fullName = "   Virendra   ";

console.log(fullName);

result = fullName.trim();
console.log(result);

fullName = "Virendra Kumar Patel";
result = fullName.split(" ");
console.log(result);

result = fullName.split("a");
console.log(result);

result = fullName.split("");
console.log(result);

console.log("Len : ", fullName.length);

fullName = "Virendra Kumar Patel";
result = fullName.substring(0, 4);
console.log(result);

fullName = "Virendra Kumar Patel";
result = fullName.substring(8);
console.log(result);
