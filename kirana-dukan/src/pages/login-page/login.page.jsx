import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { Urls } from "../../constants/urls";
import { useRecoilState } from "recoil";
import { authStore as authStoreAtom } from "../../stores/auth.store";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const returnTo = useSearchParams()[0].get("returnTo") || "/";

  console.log(returnTo);

  const [authStore, setAuthStore] = useRecoilState(authStoreAtom);

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please fill all the fields");
      return;
    }

    setError(null);
    setIsLoading(true);

    axios
      .post(Urls.login, {
        email,
        password,
      })
      .then((res) => {
        const data = res.data;
        const user = data.user;
        const token = data.accessToken;

        setAuthStore({
          ...authStore,
          user,
          token,
          isAuthenticated: true,
        });

        authStore.persist(user, token);
        navigate(returnTo);
      })
      .catch((err) => {
        console.log(err);
        setError(err.response?.data?.message);
      })
      .finally(() => {
        setIsLoading(false);
      });

    // navigate("/");
  };

  return (
    <div className="m-4 mt-10">
      <div className="flex flex-col w-4/12    gap-1 mx-auto  border-1 p-4  border-gray-200 rounded-md">
        <div className="my-8">
          <h1 className="text-2xl font-bold">Login</h1>
        </div>

        {error && <p className="error">{error}</p>}

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

        <div className="mt-4">
          <button
            className="bg-slate-700 w-full text-slate-200 rounded-md p-2"
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
