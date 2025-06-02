import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NewsHome() {
  const dates = [
    { year: 2025, month: 12, day: 1 },
    { year: 2024, month: 1, day: 13 },
    { year: 2024, month: 1, day: 14 },
    { year: 2024, month: 1, day: 15 },
    { year: 2024, month: 1, day: 16 },
  ];

  const navigate = useNavigate();

  return (
    <div>
      <h1>News Home</h1>

      <input
        type="date"
        name=""
        id=""
        onChange={(e) => {
          console.log(e.target.value);
          const date = new Date(e.target.value);
          const year = date.getFullYear();
          const month = date.getMonth() + 1;
          const day = date.getDate();
          console.log(year, month, day);
          navigate(`/news/${year}/${month}/${day}`);
        }}
      />

      <div style={{ display: "flex", gap: "10px" }}>
        {dates.map((date) => (
          <Link to={`/news/${date.year}/${date.month}/${date.day}`}>
            {date.year} - {date.month} - {date.day}
          </Link>
        ))}
      </div>
    </div>
  );
}
