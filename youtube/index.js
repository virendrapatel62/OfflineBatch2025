console.log("javascript file linked");
const getUsersUrl = `https://jsonplaceholder.typicode.com/users`;
const userCardTemplate = document.querySelector("#user-card-template");
const usersContainer = document.querySelector(".users");

function renderUsers(users = []) {
  users.forEach((user) => {
    const card = userCardTemplate.content.cloneNode(true);
    card.querySelector(".username").textContent = user.username;
    card.querySelector(".name").textContent = user.name;
    card.querySelector(".email").textContent = user.email;
    card.querySelector(
      "img"
    ).src = `https://avatar.iran.liara.run/public?${Math.random()}`;

    usersContainer.appendChild(card);
  });
}

function getUsers() {
  axios.get(getUsersUrl).then((response) => {
    const users = response.data;
    renderUsers(users);
  });
}

getUsers();
