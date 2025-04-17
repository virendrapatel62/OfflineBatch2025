console.log(document.body);

// console.log(document.body.innerHTML);
// console.log(document.body.innerText);

// document.body.innerText = "Hello world...";

console.log(document.body.style.backgroundColor);
document.body.style.backgroundColor = "tomato";
document.body.style.backgroundColor = "red";
document.body.style.backgroundColor = "dodgerblue";
document.body.style.backgroundColor = "lightblue";

const headingSelector = "h1.main-heading";

console.log(headingSelector);

const headingObject = document.querySelector(headingSelector);

console.log(headingObject);
console.log(headingObject.innerHTML);
console.log(headingObject.innerText);

headingObject.innerText = "This is Heading";
headingObject.style.color = "white";
headingObject.style.backgroundColor = "tomato";
headingObject.style.borderRadius = "16px";
headingObject.style.padding = "16px";

// const style = {
//     backgroundColor: "tomato",
//     color: "white",
//     padding: "16px",
//     borderRadius: "16px",
//   };

//   Object.assign(headingObject.style, style);

// const button = document.querySelector("button");

// console.log(button);

// const number1 = 90;
// headingObject.innerText = number1;

console.log(document.querySelector("div p span").innerHTML);

const buttons = document.querySelectorAll("button");

console.log(buttons);

// for (let index = 0; index < buttons.length; index++) {
//   const button = buttons[index];
//   button.innerHTML = index + 1;
// }

buttons.forEach((button, index) => {
  button.innerHTML = `border radius is ${index * 2}px`;
  button.style.borderRadius = `${index * 2}px`;
});
