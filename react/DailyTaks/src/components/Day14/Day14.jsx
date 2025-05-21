import React, { useEffect, useState } from "react";

export default function Day14() {
  const users = allUsers;
  const [pageNumber, setPageNumber] = useState(1);
  const [onScreenUsers, setOnScreenUsers] = useState([]);
  const pageSize = 5;

  const totalPages = Math.ceil(users.length / pageSize);

  useEffect(() => {
    setOnScreenUsers(
      allUsers.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
    );
  }, [pageNumber]);

  function goToNextPage() {
    if (pageNumber == totalPages) {
      return;
    }

    const newPageNumber = pageNumber + 1;
    setPageNumber(newPageNumber);
  }

  return (
    <div>
      <h1>Day14</h1>

      <hr />

      <div>
        <ul>
          {onScreenUsers.map((user, index) => {
            return <li key={index}>{user}</li>;
          })}
        </ul>

        <button onClick={goToNextPage}>Next Page</button>
      </div>
    </div>
  );
}

const allUsers = [
  "arjun",
  "neha",
  "rahul",
  "priya",
  "rohit",
  "ananya",
  "vikram",
  "kavya",
  "sahil",
  "isha",
  "aman",
  "tanya",
  "deepak",
  "meera",
  "nitesh",
  "rani",
  "yash",
  "pooja",
  "tarun",
  "simran",
  "tarun2",
  "simran2",
];
