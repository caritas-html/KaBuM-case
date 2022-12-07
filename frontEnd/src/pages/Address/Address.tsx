import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Header from "../../components/Header/Header";
import InputForm from "../../components/InputForm/InputForm";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import api from "../../utils/api";
import "./Address.css";

const Address = () => {
  const [searchParams] = useSearchParams();
  const [address, setAddress] = useState("");
  const [customerName, setCustomerName] = useState("");

  const navigate = useNavigate();

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };

  const data = {
    costumer_id: searchParams.get("id"),
    address,
  };

  const addAddress = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(data.costumer_id);
    await axios
      .post(`${api.address}/costumers/address`, data, config)
      .then((res) => {
        navigate("/home");
        toast("Address added successfully");
      })
      .catch((err) => toast(err.response.data.message));
  };

  useEffect(() => {
    setCustomerName(searchParams.get("customerName") as string);
  });
  return (
    <>
      <Header />
      <div className="background_wrapper">
        <div className="add_address_wrapper">
          <form onSubmit={addAddress}>
            <InputForm
              value={(e) => {
                setAddress(e.currentTarget.value);
              }}
              type="name"
              name={`${customerName} Address`}
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <PrimaryButton type="submit">Add Adress</PrimaryButton>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Address;
