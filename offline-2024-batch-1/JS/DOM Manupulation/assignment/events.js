console.log("Evennts");

const button = document.querySelector("button");
const input = document.querySelector("input");

console.log(button, input);

input.addEventListener("keyup", (event) => {
  console.log("Key up events", event);
  console.log(event.key);
});

input.addEventListener("keydown", (event) => {
  console.log("Key down events");
});

input.addEventListener("keypress", (event) => {
  console.log("Key Press events");
});

input.addEventListener("click", (event) => {
  console.log("Click on input events");
});

input.addEventListener("dblclick", (event) => {
  console.log("Double click events");
});
