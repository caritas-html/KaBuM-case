import React, { useState } from "react";
import "./LoginForm.css";
import InputForm from "../InputForm/InputForm";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import LoginSvg from "../../assets/login.svg";
import api from "../../utils/api";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { redirect } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event: React.FormEvent) => {
    event.preventDefault();
    axios
      .post(`${api.address}/sessions`, { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        redirect("/");
      })
      .catch((err) => toast("Email/Password incorrect"));
  };

  return (
    <div className="form_wrapper">
      <form onSubmit={login}>
        <div className="image_wrapper">
          <img className="login_image" src={LoginSvg} />
        </div>
        <InputForm
          value={(e) => {
            setEmail(e.currentTarget.value);
          }}
          type="email"
          name="Email"
        />
        <InputForm
          value={(e) => {
            setPassword(e.currentTarget.value);
          }}
          type="password"
          name="Password"
        />
        <div className="button_wrapper">
          <PrimaryButton type="submit">Login</PrimaryButton>
          <PrimaryButton type="button">Register</PrimaryButton>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
