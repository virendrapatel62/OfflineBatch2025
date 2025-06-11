import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Quiz from "./Quiz.jsx";
import TodoApp from "./TodoApp/todo-app.jsx";
import { RecoilRoot, useRecoilValue } from "recoil";
import todoAtom from "./todoapp/todo.atom.js";

function AnotherComponent() {
  const todoState = useRecoilValue(todoAtom);

  return (
    <div>
      <h1>{todoState.todos.length}</h1>
    </div>
  );
}

function App() {
  return (
    <RecoilRoot>
      <AnotherComponent />
      <TodoApp />
    </RecoilRoot>
  );
}

createRoot(document.getElementById("root")).render(<App />);
