console.log("Login to class.com");

const rightEmail = "p@gmail.com";
const rightPhone = "9144460897";
const rightPassword = "1234567";

function login(emailOrPhone, password) {
  const loginSuccessMessage = "Login Success";
  const invalidPassword = "Invalid Password";
  const invalidEmailMessage = "Invalid Email or Password";

  if (emailOrPhone == rightEmail || emailOrPhone == rightPhone) {
    if (password == rightPassword) {
      return loginSuccessMessage;
    } else {
      return invalidPassword;
    }
  } else {
    return invalidEmailMessage;
  }
}

let loginResponse = login("9144460897", "1234567");
console.log(loginResponse);

loginResponse = login("p@gmail.com", "1234567");
console.log(loginResponse);

loginResponse = login("j@gmail.com", "1234567");
console.log(loginResponse);

loginResponse = login("p@gmail.com", "12345675");
console.log(loginResponse);
