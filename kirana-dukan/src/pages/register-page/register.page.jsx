import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Urls } from "../../constants/urls";
import axios from "axios";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Please fill all the fields");
      return;
    }

    setError(null);

    setIsLoading(true);

    axios
      .post(Urls.register, {
        name,
        email,
        password,
      })
      .then((res) => {
        alert("Register successful");
        navigate("/login");
      })
      .catch((err) => {
        setError(err.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="m-4 mt-10">
      <div className="flex flex-col w-4/12 gap-1 mx-auto border-1 p-4 border-gray-200 rounded-md">
        <div className="my-8">
          <h1 className="text-2xl font-bold">Register</h1>
        </div>

        <form onSubmit={handleRegister} className="flex flex-col gap-1">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              className="border-1 border-gray-200 rounded-md p-2"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              className="border-1 border-gray-200 rounded-md p-2"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              className="border-1 border-gray-200 rounded-md p-2"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <div className="mt-4">
            <button
              className="bg-slate-700 w-full text-slate-200 rounded-md p-2"
              disabled={isLoading}
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
