import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    console.log({ email, password });
  };
  return (
    <div
      style={{
        width: "50%",
        height: "80%",
        margin: "2% auto",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <input
          name="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <input
          name="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <NavLink to="/account">
          <button>Login</button>
        </NavLink>
        <br />
        <button>Cancel</button>
      </form>
    </div>
  );
};
