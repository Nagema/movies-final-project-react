import React from "react";
import {useForm} from 'react-hook-form';
import { loginUser } from "../redux/auth/auth.actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, formState: {errors, isValid} } = useForm();
  console.log(process.env.REACT_APP_BACK_URL);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const send = async(formData) => {
    dispatch(loginUser(formData, navigate));
  } 
  return (
    <div>
      <form onSubmit={handleSubmit(send)}>
        <label>Email
          <input type='email' {...register('email', {
             required: "Introduce un email, por favor",
            minLength: {
                value: 2,
                message: "el email tiene que ser mas largo"
            },
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i ,
                message: "Introduce un email con formato valido"
            }
          })}/>
        </label>
        <label>Password
          <input type='password' {...register('password', {
            required: "El password tiene que existir",
            // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
          })}/>
        </label>
        <button>Login</button>
      </form>
    </div>
  )
};

export default Login;
