import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../../redux/auth/auth.actions';

const Logout = () => {
  const navigate = useNavigate;
  const dispatch = useDispatch;
  const logOut = () => {
    dispatch(logoutUser(navigate))
    console.log(logoutUser);
  }

  return (
    <button onClick={logOut}>Logout</button>
  )
}

export default Logout