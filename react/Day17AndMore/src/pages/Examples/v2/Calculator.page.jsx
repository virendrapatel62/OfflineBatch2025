import React from "react";
import { Link } from "react-router";

export default function CalcuatorPage() {
  return (
    <div>
      <h1>CalcuatorPage v2</h1>
      <hr />

      <h1>12</h1>
      <h2>90</h2>

      <Link to="/v2/calculator/add?a=12&b=90">
        <button>Add</button>
      </Link>
      <Link to="/v2/calculator/subtract?a=12&b=90">
        <button>Subtract</button>
      </Link>
      <Link to="/v2/calculator/multiply?a=12&b=90">
        <button>Multiply</button>
      </Link>
      <Link to="/v2/calculator/divide?a=12&b=90">
        <button>Divide</button>
      </Link>
    </div>
  );
}
