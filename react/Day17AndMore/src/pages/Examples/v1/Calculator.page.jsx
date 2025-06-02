import React from "react";
import { Link } from "react-router";

export default function CalcuatorPage() {
  return (
    <div>
      <h1>CalcuatorPage</h1>
      <hr />

      <h1>12</h1>
      <h2>90</h2>

      <Link to="/calculator/result?a=12&b=90&operation=add">
        <button>Add</button>
      </Link>
      <Link to="/calculator/result?a=12&b=90&operation=subtract">
        <button>Subtract</button>
      </Link>
      <Link to="/calculator/result?a=12&b=90&operation=multiply">
        <button>Multiply</button>
      </Link>
      <Link to="/calculator/result?a=12&b=90&operation=divide">
        <button>Divide</button>
      </Link>
    </div>
  );
}
