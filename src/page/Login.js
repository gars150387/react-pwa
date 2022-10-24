import { useStytch } from "@stytch/stytch-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export const Login = () => {
    const [email, setEmail] = useState("")
  const client = useStytch();
  const navigate = useNavigate()

  const handleLogin = async () => {
    await client.magicLinks.email.loginOrCreate();
    alert("Login successfully")
    navigate("/account")
  };

  return (
    <div style={{ paddingBottom: "25px" }}>
      <input
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
