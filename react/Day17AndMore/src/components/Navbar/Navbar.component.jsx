import React from "react";
import { Link } from "react-router";
import styles from "./Navbar.module.css";

export default function NavbarComponent() {
  return (
    <navbar className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link to="/" className={styles.navbarLink}>
            Home
          </Link>
        </li>
      </ul>

      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link to="/login" className={styles.navbarLink}>
            Login
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="/signup" className={styles.navbarLink}>
            Signup
          </Link>
        </li>
      </ul>
    </navbar>
  );
}
