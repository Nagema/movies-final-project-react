import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import Logout from "../logout/Logout";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user, token } = useSelector((state) => state.auth);
  // console.log(user);
  return (
    <nav>
      {user && (
        <div className="userName-wrapper">
          <p>
            Welcome {user.userName} <FontAwesomeIcon icon={faUser} />
          </p>
        </div>
      )}
      <div className="navbar-container">
        <NavLink activeclassname={"active"} to="/">
          <div className="logo-wrapper">
            <FontAwesomeIcon icon={faFilm} />
            <span className="app-title">The cinephile </span>
          </div>
        </NavLink>

        <div className="menu-wrapper">
          <NavLink activeclassname={"active"} to="/">
            Home
          </NavLink>
          {user && (
            <>
              <NavLink activeclassname={"active"} to="/favorites">
                Favorites
              </NavLink>
              <Logout user={user} className="button" />
            </>
          )}
          {!user && (
            <NavLink activeclassname={"active"} to="/login">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
