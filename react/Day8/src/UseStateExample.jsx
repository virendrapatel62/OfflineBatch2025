import { useState } from "react";

function UseStateExample() {
  const [todos, setTodos] = useState([
    "Learn Javascript",
    "Learn Css",
    "Teach Javscript",
  ]);

  const [inputTodo, setInputTodo] = useState("");

  function addTodo() {
    console.log("Clicked on todos");
    setTodos([...todos, inputTodo]);

    setInputTodo("");
  }

  function handleOnChange(event) {
    setInputTodo(event.target.value);
  }

  const elements = todos.map((todo, index) => {
    return <li>{todo}</li>;
  });

  console.log(elements);

  console.log(todos.length);
  return (
    <div>
      <h1>USe State Example</h1>

      <input
        value={inputTodo}
        onChange={handleOnChange}
        type="text"
        placeholder="Type a todo"
      />

      <button onClick={addTodo}>Add Random Todo</button>

      <ul>{elements}</ul>
    </div>
  );
}

export default UseStateExample;
