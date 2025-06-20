import React, { Fragment } from "react";
import styles from "./navbar.module.css";
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
    <div className={styles.navbar}>
      <ul>
        <li>
          <Link to="/">Dukan</Link>
        </li>
      </ul>

      <ul>
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
