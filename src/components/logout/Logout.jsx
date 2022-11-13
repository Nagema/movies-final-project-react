import React from "react";
import "./Logout.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/auth/auth.actions";

const Logout = (user) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOutButton = () => {
    dispatch(logoutUser(navigate));
  };
  return (
    <div>
      <button className="logout-button" onClick={logOutButton}>
        Logout
      </button>
      <div>
        <p>Welcome {user.user.userName}</p>
      </div>
    </div>
  );
};

export default Logout;
