import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.brand}>My App</div>
    <ul>
      <li>
        <NavLink
          to="/"
          exact="true"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Users
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/transactions"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Transactions
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/referral"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Referral
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
