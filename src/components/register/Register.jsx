import React from "react";
import {useForm} from 'react-hook-form';
import { newUser } from "../../redux/auth/auth.actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit, formState: {errors, isValid} } = useForm();
  console.log(process.env.REACT_APP_BACK_URL);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sendRegister = async(formData) => {
    dispatch(newUser(formData, navigate));
  } 
  return (
    <div>
      <form onSubmit={handleSubmit(sendRegister)} className='register'>
        <h2>Register</h2>
        <label>Email 
          <input type='email' placeholder="Enter user emale" {...register('email')} name='email'></input>
        </label>
        <label>Password
          <input type='password' placeholder="Enter password" {...register('password')} name='password'></input>
        </label>
        <label>User name
          <input type='text' placeholder="Enter user name" {...register('userName')} name='userName'></input>
        </label>
        <button>Register</button>
      </form>

    </div>
  )
};

export default Register;
