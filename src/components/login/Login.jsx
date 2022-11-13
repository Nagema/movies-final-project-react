import React, { useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { loginUser } from "../../redux/auth/auth.actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Register from "../register/Register";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const send = async (formData) => {
    dispatch(loginUser(formData, navigate));
  };

  const goToRegister = () => {
    setShowLogin(!showLogin);
  };
  return (
    <>
      {showLogin ? (
        <div className="login-container">
          <form onSubmit={handleSubmit(send)} className="login">
            <h2>Login</h2>
            <div>
              <input
                placeholder="Email"
                type="email"
                name="email"
                {...register("email", {
                  required: "Introduce un email, por favor",
                  minLength: {
                    value: 2,
                    message: "el email tiene que ser mas largo",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Introduce un email con formato valido",
                  },
                })}
              />
            </div>
            <div>
              <input
                placeholder="Password"
                type="password"
                name="password"
                {...register("password", {
                  required: "El password tiene que existir",
                  // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
                })}
              />
            </div>
            <button>Login</button>
          </form>
          <div className="go-to-register-button">
            <p>You dont have an account?</p>
            <button onClick={goToRegister}>Register</button>
          </div>
        </div>
      ) : (
        <Register
          showLogin={showLogin}
          setShowLogin={(login) => setShowLogin(login)}
        />
      )}
    </>
  );
};

export default Login;
