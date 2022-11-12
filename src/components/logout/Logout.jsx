import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../../redux/auth/auth.actions';


const Logout = () => {
  const navigate = useNavigate;
  const dispatch = useDispatch;
  const logOutButton = () => {
    dispatch(logoutUser(navigate));
  }

  return (
    <button onClick={logOutButton}>Logout</button>
  )
}

export default Logout