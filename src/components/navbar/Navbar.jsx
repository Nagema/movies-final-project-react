import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="logo-wrapper">
        <FontAwesomeIcon icon={faFilm} />
        <span className="app-title">The cinephile </span>
      </div>
      <div className="menu-wrapper">
        <NavLink activeclassname={"active"} to="/">
          Home
        </NavLink>
        <NavLink activeclassname={"active"} to="/favorites">
          Favorites
        </NavLink>
        <NavLink activeclassname={"active"} to="/login">
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
