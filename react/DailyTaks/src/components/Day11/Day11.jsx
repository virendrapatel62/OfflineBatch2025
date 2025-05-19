import React, { useEffect, useId, useState } from "react";

function Button(props) {
  useEffect(() => {
    console.log("Button Component mounted", props);
  }, []);

  return (
    <div>
      <button>{props.title}</button>
    </div>
  );
}

export default function Day11() {
  const [count, setCount] = useState(0);
  // useEffect(whatToDo , [])
  useEffect(() => {
    console.log("Day 11 Component mounted");
  }, []);

  useEffect(() => {
    console.log("Count changed", count);
  }, [count]);

  return (
    <div>
      <h1>Day 11</h1>
      <button
        onClick={() => {
          setCount(count + 5);
        }}
      >
        Incr by 5
      </button>
      &nbsp;
      <button
        onClick={() => {
          setCount(count + 10);
        }}
      >
        Incr by 10
      </button>
      <h1>{count}</h1>
      <Button title={"Clicke me"} />
      <Button title={"Load data"} />
      <Button title={"Clear data"} />
    </div>
  );
}
