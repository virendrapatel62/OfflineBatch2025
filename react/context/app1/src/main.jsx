import React from "react";
import { createRoot } from "react-dom/client";
import { useContext, useState } from "react";

createRoot(document.getElementById("root")).render(<App />);

function App() {
  return (
    <div>
      <h1>Counter App</h1>

      <Counter />
    </div>
  );
}

const CounterContext = React.createContext(0);

function Counter() {
  const [count, setCount] = useState(10);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function incremenyBy(value) {
    setCount(count + value);
  }

  const value = {
    count,
    increment,
    decrement,
    incremenyBy,
  };

  return (
    <CounterContext.Provider value={value}>
      <div>
        <CounterDisplay />
        <tr>
          <td>
            <IncrementButton />
          </td>
          <td>
            <DecrementButton />
          </td>
          <td>
            <IncrementByButton />
          </td>
        </tr>
      </div>
    </CounterContext.Provider>
  );
}

function CounterDisplay() {
  const { count } = useContext(CounterContext);

  return (
    <div>
      <h1 style={{ fontSize: "40px", textAlign: "center" }}>{count}</h1>
    </div>
  );
}

function IncrementButton() {
  const { increment } = useContext(CounterContext);

  return (
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

function IncrementByButton() {
  const { incremenyBy } = useContext(CounterContext);

  return (
    <div>
      {[10, 20, 5, 30].map((value) => (
        <button onClick={() => incremenyBy(value)}>+{value}</button>
      ))}
    </div>
  );
}

function DecrementButton() {
  const { decrement } = useContext(CounterContext);

  return (
    <div>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
