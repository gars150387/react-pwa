import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <ul>
        <NavLink to="/">
          <li>
            <h3>Home</h3>
          </li>
        </NavLink>
        <NavLink to="/login">
          <li>
            <h3>Login</h3>
          </li>
        </NavLink>
        <NavLink to="/register">
          <li>
            <h3>Register</h3>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};
