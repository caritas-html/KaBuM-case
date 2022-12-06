import React from "react";
import "./LoginForm.css";
import InputForm from "../InputForm/InputForm";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import LoginSvg from "../../assets/login.svg";

const LoginForm = () => {
  return (
    <div className="form_wrapper">
      <div className="image_wrapper">
        <img className="login_image" src={LoginSvg} />
      </div>
      <InputForm name="Email" />
      <InputForm name="Password" />
      <div className="button_wrapper">
        <PrimaryButton>Login</PrimaryButton>
        <PrimaryButton>Register</PrimaryButton>
      </div>
    </div>
  );
};

export default LoginForm;
