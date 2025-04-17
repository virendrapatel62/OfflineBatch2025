console.log("Login to class.com");

const rightEmail = "p@gmail.com";
const rightPhone = "9144460897";
const rightPassword = "1234567";

function login(emailOrPhone, password) {
  if (
    (rightEmail == emailOrPhone || rightPhone == emailOrPhone) &&
    rightPassword == password
  ) {
    console.log("All good : Login now");
    return true;
  } else {
    console.log("EMail or password wrong");
    return false;
  }
}

isValid = login("j@gmail.com", "1234567");
console.log(isValid);

isValid = login("p@gmail.com", "12345675");
console.log(isValid);

let isValid = login("9144460897", "1234567");
console.log(isValid);

isValid = login("p@gmail.com", "1234567");
console.log(isValid);
