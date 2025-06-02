import React from "react";
import { Link, useSearchParams, ] = useSearchParams();

  const params = useParams();

  const a = Number(params.number1);
  const b = Number(params.number2);useParams } from "react-router";

//http://localhost:5173/calculator/result?a=12&b=90&operation=multiply
export default function CalcuatorResultPage() {
  const [queryString, setQueryString]= 
  const operation = params.operation;

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

  return (
    <div>
      <h1>CalcuatorPage Result v3</h1>
      <hr />

      <h1>Result is : {ans}</h1>
    </div>
  );
}
