import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Header from "../../components/Header/Header";
import InputForm from "../../components/InputForm/InputForm";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import api from "../../utils/api";
import "./Customer.css";
import { useNavigate } from "react-router-dom";

const Customer = () => {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };

  const data = {
    name,
    birthday,
    cpf,
    rg,
    phone,
  };

  const createCustomer = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios
      .post(`${api.address}/costumers`, data, config)
      .then((res) => {
        toast("Customer created with success");
        navigate("/home");
      })
      .catch((err) => toast(err.response.data.message));
  };

  return (
    <>
      <Header />
      <div className="background_wrapper">
        <div className="customer_create_wrapper">
          <form onSubmit={createCustomer}>
            <InputForm
              value={(e) => {
                setName(e.currentTarget.value);
              }}
              type="name"
              name="Name"
            />
            <InputForm
              value={(e) => {
                setBirthday(e.currentTarget.value);
              }}
              type="date"
              name="Birthday"
            />
            <InputForm
              value={(e) => {
                setCpf(e.currentTarget.value);
              }}
              type="number"
              name="CPF"
            />
            <InputForm
              value={(e) => {
                setRg(e.currentTarget.value);
              }}
              type="number"
              name="RG"
            />
            <InputForm
              value={(e) => {
                setPhone(e.currentTarget.value);
              }}
              type="number"
              name="Phone (11 digits)"
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <PrimaryButton type="submit">createCustomer</PrimaryButton>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Customer;
