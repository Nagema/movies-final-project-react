import React from "react";
import "./Register.css";
import { useForm } from "react-hook-form";
import { newUser } from "../../redux/auth/auth.actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sendRegister = async (formData) => {
    dispatch(newUser(formData, navigate));
  };
  return (
    <div className="register-container">
      <form onSubmit={handleSubmit(sendRegister)} className="register">
        <h2>Register</h2>
        <div>
          <label>User name</label>
          <input
            type="text"
            placeholder="User name"
            {...register("userName")}
            name="userName"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="User email"
            {...register("email")}
            name="email"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            name="password"
          />
        </div>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
