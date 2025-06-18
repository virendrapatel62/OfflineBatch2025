import React from "react";
import styles from "./navbar.module.css";
import { useRecoilValue } from "recoil";
import { dukanStore } from "../../stores/dukan.store";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { storeName } = useRecoilValue(dukanStore);

  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <Link to="/">{storeName}</Link>
        </li>
      </ul>

      <ul>
        <li>Profile</li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>Signup</li>
      </ul>
    </div>
  );
}
