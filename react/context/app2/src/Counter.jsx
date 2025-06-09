import React from "react";

const CounterContext = React.createContext();

function CounterDisplay() {
  const { count } = React.useContext(CounterContext);
  return <div>Count: {count}</div>;
}

function CounterButton() {
  const { setCount } = React.useContext(CounterContext);
  return (
    <button onClick={() => setCount((count) => count + 1)}>Increment</button>
  );
}

export default function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <CounterDisplay />
      <CounterButton />
    </CounterContext.Provider>
  );
}
