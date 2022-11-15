import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faUser } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import "./Navbar.css";
import iconMenu from "../../assets/icon-menu.svg";
import iconClose from "../../assets/icon-close-menu.svg";
import Logout from "../logout/Logout";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isWide = useMediaQuery({
    query: "(min-width: 599px)",
  });

  const [menuIcon, setMenuIconToggle] = useState(true);

  const handleMenuIcon = () => {
    setMenuIconToggle(!menuIcon);
  };

  const { user, token } = useSelector((state) => state.auth);
  return (
    <nav>
      {user && (
        <div className="userName-wrapper">
          <NavLink activeclassname={"active"} to="/user">
            Welcome {user.userName} <FontAwesomeIcon icon={faUser} />
          </NavLink>
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
          {menuIcon && !isWide ? (
            <button className="toggle-button" onClick={handleMenuIcon}>
              <img
                className="toggle-button-menu"
                src={iconMenu}
                alt="open menu"
              />
            </button>
          ) : (
            <>
              {!isWide && (
                <button className="toggle-button" onClick={handleMenuIcon}>
                  <img
                    className="toggle-button-close"
                    src={iconClose}
                    alt="close menu"
                  />
                </button>
              )}
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
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
