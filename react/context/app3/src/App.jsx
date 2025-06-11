import React, { useEffect, useState } from "react";

function ScreenProtection() {
  useEffect(() => {
    const handleBlur = () => {
      alert("warning. you are leaving the page");
    };

    window.addEventListener("blur", handleBlur);

    return function onUnmount() {
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  return <div>ScreenProtection</div>;
}

function TodoItem({ todo }) {
  useEffect(() => {
    console.log("TodoItem Rendered", todo.title);

    const interval = setInterval(() => {
      console.log("TodoItem Interval", todo.title);
    }, 1000);
  }, []);

  console.log("TodoItem Re Render", todo.title);

  return <div>{todo.title}</div>;
}

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Todo 1" },
    { id: 2, title: "Todo 2" },
    { id: 3, title: "Todo 3" },
  ]);

  const [isScreenProtected, setIsScreenProtected] = useState(false);

  const handleAddMore = () => {
    setTodos([
      ...todos,
      { id: todos.length + 1, title: `Todo ${todos.length + 1}` },
    ]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <button onClick={handleAddMore}>Add more</button>

      {todos.map((todo) => (
        <div style={{ display: "flex", gap: "10px" }} key={todo.id}>
          <TodoItem todo={todo} />{" "}
          <button onClick={() => handleDelete(todo.id)}>X</button>
        </div>
      ))}

      <button onClick={() => setIsScreenProtected(!isScreenProtected)}>
        {isScreenProtected ? "Unprotect" : "Protect"}
      </button>

      {isScreenProtected && <ScreenProtection />}
    </div>
  );
}
