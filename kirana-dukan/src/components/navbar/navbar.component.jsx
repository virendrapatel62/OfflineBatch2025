import React from "react";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>KK Store</li>
      </ul>

      <ul>
        <li>Profile</li>
        <li>Login</li>
        <li>Signup</li>
      </ul>
    </div>
  );
}
