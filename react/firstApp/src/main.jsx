import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function Message() {
  return <h2>Good Morning</h2>;
}

function App() {
  return (
    <div>
      <h1>Hello world.</h1>
      <Message />
      <Message />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
