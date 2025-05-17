import React, { useState } from "react";
function spreadDemo() {
  const user = {
    name: "virendra",
  };
  let copyUser = { user };
  console.log(JSON.stringify(copyUser, null, 2));
  copyUser = { ...user };
  console.log(JSON.stringify(copyUser, null, 2));
}

// spreadDemo();

export default function Day10() {
  const [usernameInputValue, setUsernameInputValue] = useState("");
  const [users, setUsers] = useState([
    "Jatin",
    "Virendra",
    "Jatin",
    "Virendra",
  ]);

  const handleUserAddClick = () => {
    console.log("typed value is : ", usernameInputValue);

    // const updatedList = [...users, usernameInputValue];
    const updatedList = [usernameInputValue, ...users];
    setUsers(updatedList);
    setUsernameInputValue("");
  };

  const handleOnUserNameChange = (event) => {
    // const {
    //   target: { value },
    // } = event;
    // const {
    //   target: { value },
    // } = event;

    // const { target } = event; // const target = event.target
    // const { value } = target; //  const value = target.value

    const value = event.target.value;
    setUsernameInputValue(value);
  };

  function clearAll() {
    console.log("Clear all clicked");
    setUsers([]);
  }

  const deleteElement = (index) => {
    console.log("delete eleemt", index);

    users.splice(index, 1);

    setUsers([...users]);
  };

  return (
    <div>
      <h1>Day 10 </h1>

      <input
        type="text"
        name="username"
        value={usernameInputValue}
        onChange={handleOnUserNameChange}
      />
      <hr />
      <button onClick={handleUserAddClick}>Click me to add element</button>

      <hr />
      <button onClick={clearAll}>Clear all</button>

      <hr />

      {users.map((user, index) => (
        <div>
          <span
            style={{
              minWidth: "200px",
              display: "inline-block",
            }}
          >
            {index + 1} : {user}
          </span>
          <span>
            <button onClick={() => deleteElement(index)}>X</button>
          </span>
        </div>
      ))}
    </div>
  );
}

const numbers = [1, 3, 4];

let double = numbers.map((number) => {
  number;
});

console.log(double);

double = numbers.map((number) => number);

console.log(double);
