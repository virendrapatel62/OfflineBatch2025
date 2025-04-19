console.log("Index JS connected");

const messageDiv = document.querySelector("#message");
console.log(messageDiv.innerHTML);

const headingTitle = document.querySelector("#title");
console.log(headingTitle);

headingTitle.innerHTML = "Welcome to javascript";
// headingTitle.innerText = `<strong>This is bold</strong>`;

const userNameInput = document.querySelector("input#username");
console.log(userNameInput.value);
console.log(userNameInput.type);
// console.log(userNameInput.placeholder);

const boxDiv = document.querySelector("div#box");

boxDiv.style.backgroundColor = "lightblue";
boxDiv.style.height = "100px";

const profileDiv = document.querySelector("#profile");
console.log(profileDiv.className);
console.log(profileDiv.classList);

boxDiv.addEventListener("click", () => {
  console.log("Clicked on blue box");
  const backgroundColor = headingTitle.style.backgroundColor;

  if (backgroundColor == "tomato") {
    headingTitle.style.backgroundColor = "dodgerblue";
  } else {
    headingTitle.style.backgroundColor = "tomato";
  }
});
