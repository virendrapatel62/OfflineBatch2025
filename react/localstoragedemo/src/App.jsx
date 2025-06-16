import React from "react";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [username, setUsername] = useState(localStorage.getItem("name"));

  const handleSave = () => {
    setUsername(input);
    localStorage.setItem("name", input);
  };

  return (
    <div>
      <h1>Local storage demo</h1>

      <h2>Your name is: {username}</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleSave}>Save</button>
    </div>
  );
}
