import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Users
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/transactions"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Transactions
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/referral"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Referral
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
