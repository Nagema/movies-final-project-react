import React from "react";
import "./Logout.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/auth/auth.actions";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOutButton = () => {
    dispatch(logoutUser(navigate));
  };

  return (
    <button className="logout-button" onClick={logOutButton}>
      Logout
    </button>
  );
};

export default Logout;
