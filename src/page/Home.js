import React from "react";

export const Home = () => {
  return (
    <div style={{
        objectFit: "fill",
        height:"100vh",
          background:
            "no-repeat url(https://imgs.search.brave.com/Xes8IG0EJb9T_Np9YZhTSCnz7LDQKX1XGC8xBT-K6vQ/rs:fit:1200:1067:1/g:ce/aHR0cHM6Ly9iZ3Iu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzA5L2NoZWVz/ZWJ1cmdlci1oYW1i/dXJnZXIuanBnP3Jl/c2l6ZT02ODU)",
        }}>
      <div style={{ color: "#fff", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <h1 style={{ fontSize: "50px"}}>Burger factory</h1>
      </div>
    </div>
  );
};
