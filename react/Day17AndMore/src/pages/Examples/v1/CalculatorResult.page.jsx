import React from "react";
import { Link, useSearchParams } from "react-router";

//http://localhost:5173/calculator/result?a=12&b=90&operation=multiply
export default function CalcuatorResultPage() {
  const [queryString, setQueryString] = useSearchParams();

  const a = Number(queryString.get("a"));
  const b = +queryString.get("b");
  const operation = queryString.get("operation");

  let ans = 0;

  // use ternary operator
  // ans =
  //   operation === "add"
  //     ? a + b
  //     : operation === "subtract"
  //     ? a - b
  //     : operation === "multiply"
  //     ? a * b
  //     : a / b;

  if (operation === "add") {
    ans = a + b;
  } else if (operation === "subtract") {
    ans = a - b;
  } else if (operation === "multiply") {
    ans = a * b;
  } else if (operation === "divide") {
    ans = a / b;
  }

  const handleClick = (operation) => {
    setQueryString({ ...Object.fromEntries(queryString), operation });
  };

  return (
    <div>
      <h1>CalcuatorPage Result</h1>
      <hr />

      <h1>Result is : {ans}</h1>

      <button onClick={() => handleClick("add")}>Add</button>
      <button onClick={() => handleClick("subtract")}>Subtract</button>
      <button onClick={() => handleClick("multiply")}>Multiply</button>
      <button onClick={() => handleClick("divide")}>Divide</button>
    </div>
  );
}
