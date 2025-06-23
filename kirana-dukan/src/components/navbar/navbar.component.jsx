import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { authStore as authStoreAtom, logout } from "../../stores/auth.store";
import { useRecoilValue, useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { isAuthenticated } = useRecoilValue(authStoreAtom);

  const [authStore, setAuthStore] = useRecoilState(authStoreAtom);

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    setAuthStore({
      ...authStore,
      isAuthenticated: false,
      token: null,
    });
  };

  return (
    <div className="flex bg-slate-800 text-slate-200  justify-between items-center p-4 border-b-1 border-gray-200">
      <ul className="flex gap-4">
        <li>
          <Link to="/">Dukan</Link>
        </li>
      </ul>

      <ul className="flex gap-4">
        {isAuthenticated ? (
          <Fragment>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link onClick={handleLogout}>Logout</Link>
            </li>
          </Fragment>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
