import { useState } from "react";

export default function StateExample() {
  console.log("StateExample Rendering");

  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  function onIncreament() {
    console.log("ON INCREMENT");
    setCount(count + 1);
  }
  function onDecreament() {
    console.log("ON DECREMENT");
    setCount(count - 1);
  }

  function onReset() {
    setCount(0);
  }

  function handleToggle() {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  }

  console.log({ show });
  return (
    <div>
      <button onClick={handleToggle}>Toggle Show</button>

      <button onClick={onIncreament}>Click to increase</button>
      <button onClick={onDecreament}>Click to decrease</button>
      <button onClick={onReset}>Click to Reset</button>

      <h1 hidden={!show}>Count: {count}</h1>
    </div>
  );
}
