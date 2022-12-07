import React, { useState } from "react";
import "./RegisterForm.css";
import InputForm from "../InputForm/InputForm";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../../utils/api";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = (event: React.FormEvent) => {
    event.preventDefault();
    axios
      .post(`${api.address}/users`, { name, email, password })
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.response.message);
        toast(err.response.data.message);
      });
  };
  return (
    <div className="form_wrapper">
      <form onSubmit={registerUser}>
        <div className="title_wrapper">
          <h1>Register</h1>
        </div>
        <InputForm
          value={(e) => {
            setName(e.currentTarget.value);
          }}
          type="name"
          name="Name"
        />
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
        <div className="register_button_wrapper">
          <PrimaryButton type="submit">Sign Up</PrimaryButton>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default RegisterForm;
