import React from "react";
import { NavLink } from "react-router-dom";
import { useStytch, useStytchSession } from "@stytch/stytch-react";

export const Navbar = () => {
  const session = useStytchSession();
  const client = useStytch();
  const logoutSession = async () => {
    await client.session.revoke();
  };
  return (
    <div>
      <ul>
        <NavLink to="/">
          <li>
            <h3>Home</h3>
          </li>
        </NavLink>
        {!session && (
          <NavLink to="/login">
            <li>
              <h3>Login</h3>
            </li>
          </NavLink>
        )}
        {session && (
          <NavLink to="/account">
            <li>
              <h3>Account</h3>
            </li>
          </NavLink>
        )}
        {session && (
          <NavLink to="/home">
            <li>
              <button onClick={logoutSession}>
                <h3>Logout</h3>
              </button>
            </li>
          </NavLink>
        )}
      </ul>
    </div>
  );
};
