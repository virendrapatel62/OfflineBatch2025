import React, { useEffect, useState } from "react";

function TodoItem({ todo }) {
  useEffect(() => {
    console.log("TodoItem Rendered", todo.title);

    const interval = setInterval(() => {
      console.log("TodoItem Interval", todo.title);
    }, 1000);

    return function onUnmount() {
      console.log("TodoItem Unmounted", todo.title);
      console.log("TodoItem Interval Cleared", todo.title);
      clearInterval(interval);
    };
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
    </div>
  );
}
