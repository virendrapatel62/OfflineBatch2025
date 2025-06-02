import React from "react";
import { Link, useParams } from "react-router-dom";

{
  /* <Route path="/news/:year/:month/:day" element={<NewsDetails />} /> */
}
export default function NewsDetails() {
  const { year, month, day } = useParams();

  return (
    <div>
      <h1>Read News</h1>

      <div>
        <h2>
          Year: {year} - Month: {month} - Day: {day}
        </h2>
      </div>

      <Link to="/news">Back to News Home</Link>
    </div>
  );
}
