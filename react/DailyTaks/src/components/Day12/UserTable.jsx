import React, { useEffect } from "react";

export default function UserTable(props) {
  const { users, onDelete } = props;

  useEffect(() => {
    console.log("@UserTable mounted");
  }, []);

  console.log(props);
  return (
    <table
      style={{
        width: "100%",
        marginTop: "20px",
        marginBottom: "20px",
        border: "1px solid gray",
        textAlign: "center",
      }}
    >
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <button onClick={() => onDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
