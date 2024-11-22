import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => (
  <nav className={styles.navbar}>
    <ul className={styles.navList}>
      <li>
        <NavLink
          to="/"
          exact
          className={styles.navItem}
          activeClassName={styles.active}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/users"
          className={styles.navItem}
          activeClassName={styles.active}
        >
          Users
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/transactions"
          className={styles.navItem}
          activeClassName={styles.active}
        >
          Transactions
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/referral"
          className={styles.navItem}
          activeClassName={styles.active}
        >
          Referral
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
