import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const linkStyle = {
    margin: "0 1rem",
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
  };
  const activeStyle = {
    color: "#007bff",
  };
  return (
    <nav style={{ textAlign: "center", margin: "2rem 0" }}>
      <NavLink to="/" style={linkStyle} end activeStyle={activeStyle}>
        Home
      </NavLink>
      <NavLink to="/about" style={linkStyle} activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  );
};

export default NavBar;
