import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <NavLink activeclassname={"active"} to="/">
        Home
      </NavLink>
      <NavLink activeclassname={"active"} to="/favorites">
        Favorites
      </NavLink>
      <NavLink activeclassname={"active"} to="/login">
        Login
      </NavLink>
    </nav>
  );
};

export default Navbar;
