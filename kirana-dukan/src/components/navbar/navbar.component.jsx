import React from "react";
import styles from "./navbar.module.css";
import { useRecoilValue } from "recoil";
import { dukanStore } from "../../stores/dukan.store";

export default function Navbar() {
  const { storeName } = useRecoilValue(dukanStore);

  return (
    <div className={styles.navbar}>
      <ul>
        <li>{storeName}</li>
      </ul>

      <ul>
        <li>Profile</li>
        <li>Login</li>
        <li>Signup</li>
      </ul>
    </div>
  );
}
