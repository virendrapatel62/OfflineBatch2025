import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // sent the login request to the server
    // if the login is successful, redirect to the home page
    // if the login is unsuccessful, show the error message

    const fakeToken = `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, officia quidem maiores ipsa nisi repudiandae quasi nobis aut natus, commodi recusandae esse voluptate magnam mollitia illo! Iure harum laboriosam repellendus.
    `;

    Cookies.set("authorizarion", fakeToken);
    Cookies.set(
      "user",
      {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
      },
      {
        expires: 1,
        sameSite: "none",
      }
    );

    navigate("/");
  };

  return (
    <div>
      <h1>Login</h1>

      <div>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="password" placeholder="Password" />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
