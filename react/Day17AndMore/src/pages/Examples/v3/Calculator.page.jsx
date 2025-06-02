import React from "react";
import { Link } from "react-router";

export default function CalcuatorPage() {
  return (
    <div>
      <h1>CalcuatorPage v3</h1>
      <hr />

      <h1>12</h1>
      <h2>90</h2>

      <Link to="/v3/calculator/add/12/90">
        <button>Add</button>
      </Link>
      <Link to="/v3/calculator/subtract/12/90">
        <button>Subtract</button>
      </Link>
      <Link to="/v3/calculator/multiply/12/90">
        <button>Multiply</button>
      </Link>
      <Link to="/v3/calculator/divide/12/90">
        <button>Divide</button>
      </Link>
    </div>
  );
}
