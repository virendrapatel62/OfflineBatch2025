import React from "react";
import { useUser } from "./Auth/AuthContext";

export default function UserProfile() {
  const user = useUser();
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.firstName}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>
      <p>Country: {user.country}</p>
      <p>Is Admin: {user.isAdmin ? "Yes" : "No"}</p>
    </div>
  );
}
