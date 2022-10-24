import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useStytch, useStytchSession } from "@stytch/stytch-react";

export const Authenticate = () => {
  const client = useStytch();
  const session = useStytchSession();
  const navigate = useNavigate();

  const dependecies = [client, session]

  useEffect(() => {
    if (session) {
      navigate("/account");
    } else {
      const token = new URLSearchParams(window.location.search).get("token");

      client.magicLinks.authenticate(token, {
          session_duration_minutes: 60,
        })
        .then(() => {
          alert("Successfully authentcated!");
        });
    }
  }, [dependecies]);// eslint-disable-line react-hooks/exhaustive-deps

  return <div>Loading...</div>;
};
