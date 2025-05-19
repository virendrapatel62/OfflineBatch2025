import React, { useEffect, useState } from "react";
import axios from "axios";
import UserTable from "./UserTable";

const url = "https://jsonplaceholder.typicode.com/users";

export default function Day12() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function fetchUsers() {
    setLoading(true);
    setError("");
    axios
      .get(url)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleDelete(index) {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Day 12</h1>

      <hr />
      <div hidden={!loading}>
        <h1>Loading....</h1>
      </div>

      <div hidden={!error}>
        <h1>Error: {error}</h1>
      </div>

      <div hidden={loading}>
        <UserTable users={users} onDelete={handleDelete} />
      </div>
    </div>
  );
}
