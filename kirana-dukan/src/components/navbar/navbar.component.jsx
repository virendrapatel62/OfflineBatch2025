import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <Link to="/">Dukan</Link>
        </li>
      </ul>

      <ul>
        <li>Profile</li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Signup</Link>
        </li>
      </ul>
    </div>
  );
}
