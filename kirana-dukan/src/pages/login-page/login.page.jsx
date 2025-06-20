import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
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

        authStore.saveTokenToLocalStorage(token);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });

    // navigate("/");
  };

  return (
    <div className="m-4">
      <div className="flex gap-1 mx-auto w-300 border-1">
        <h1>Login</h1>

        {error && <p className="error">{error}</p>}
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button" onClick={handleLogin} disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
}
