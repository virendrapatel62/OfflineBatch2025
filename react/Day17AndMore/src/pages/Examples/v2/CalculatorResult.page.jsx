import React from "react";
import { Link, useSearchParams, useParams } from "react-router";

//http://localhost:5173/calculator/result?a=12&b=90&operation=multiply
export default function CalcuatorResultPage() {
  const [queryString, setQueryString] = useSearchParams();

  const a = Number(queryString.get("a"));
  const b = +queryString.get("b");
  const operation = useParams().operation;

  let ans = 0;

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
    setQueryString({ ...Object.fromEntries(queryString) });
  };

  return (
    <div>
      <h1>CalcuatorPage Result v2</h1>
      <hr />

      <h1>Result is : {ans}</h1>
    </div>
  );
}
