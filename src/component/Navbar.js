import React from "react";
import { NavLink } from "react-router-dom";
import {useStytchSession} from "@stytch/stytch-react"

export const Navbar = () => {
  const session = useStytchSession()
  return (
    <div>
      <ul>
        <NavLink to="/">
          <li>
            <h3>Home</h3>
          </li>
        </NavLink>
        {!session && <NavLink to="/login">
          <li>
            <h3>Login</h3>
          </li>
        </NavLink>}
        {session && <NavLink to="/account">
          <li>
            <h3>Account</h3>
          </li>
        </NavLink>}
        {session && <NavLink to="/home">
          <li>
            <h3>Logout</h3>
          </li>
        </NavLink>}
      </ul>
    </div>
  );
};