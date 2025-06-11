import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  todoInputSelector,
  todoStateSelector,
  useTodos,
} from "../todoapp/todo.atom";

function TodoItem({ todo }) {
  return <div>{todo.title}</div>;
}

function TodoList() {
  const todos = useTodos();

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </div>
  );
}

function TodoForm({ onAddTodo }) {
  const [input, setInput] = useRecoilState(todoInputSelector);

  return (
    <div>
      <input
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            onAddTodo(input);
            setInput("");
          }
        }}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => onAddTodo(input)}>Add</button>
    </div>
  );
}

export default function TodoApp() {
  const setTodos = useSetRecoilState(todoStateSelector);

  const onAddTodo = (title) => {
    setTodos((prev) => [...prev, { id: prev.length + 1, title }]);
  };

  return (
    <div>
      <TodoForm onAddTodo={onAddTodo} />
      <TodoList />
    </div>
  );
}
