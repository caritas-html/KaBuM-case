import axios from "axios";
import React, { useEffect, useState } from "react";
import CostumerCard from "../../components/CostumerCard/CostumerCard";
import Header from "../../components/Header/Header";
import api from "../../utils/api";
import "./Home.css";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { createSearchParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AddressModal from "../../components/addressModal/AddressModal";

interface ICostumer {
  id: string;
  name: string;
  birthday: string;
  cpf: string;
  rg: string;
  phone: string;
}

const Home = () => {
  const [costumers, setCustumers] = useState([]);
  const [address, setAddress] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem("token") as string;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const getCustumers = async () => {
    await axios.get(`${api.address}/costumers`, config).then((res) => {
      if (res.data) {
        setCustumers(res.data);
      }
    });
  };

  const createCustumer = () => {
    navigate("/customer");
  };

  const addAdress = async (customerId: string) => {
    navigate({
      pathname: "/address",
      search: createSearchParams({
        id: customerId,
        customerName,
      }).toString(),
    });
  };

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const openAddressModal = async (costumerId: string): Promise<void> => {
    await axios
      .get(`${api.address}/costumers/address/${costumerId}`, config)
      .then((res) => {
        setAddress(res.data.address);
        if (res.data.address.length) {
          toggleModal();
        } else {
          toast("There is no address registered on this customer");
        }
      })
      .catch((err) => toast(err.response.data.message));
  };

  const deleteCustomer = async (customerId: string) => {
    await axios
      .delete(`${api.address}/costumers/${customerId}`, config)
      .then((res) => getCustumers())
      .then((res) => console.log(res))
      .then((res) => toast("Customer successfully deleted"))
      .catch((err) => toast(err.response.data.message));
  };

  const parseJwt = (token: string) => {
    const decode = JSON.parse(atob(token.split(".")[1]));
    return decode;
  };

  useEffect(() => {
    getCustumers();
    if (!token) {
      navigate("/");
      navigate(0);
    }
    const isTokenExpired = parseJwt(token);
    if (isTokenExpired.exp * 1000 < new Date().getTime()) {
      localStorage.removeItem("token");
    }
  }, []);
  return (
    <>
      <Header />

      {token ? (
        <div className="background_wrapper">
          <div className="add_button_wrapper" style={{ marginTop: "1rem" }}>
            <PrimaryButton onPress={createCustumer} type="button">
              Add Customer
            </PrimaryButton>
          </div>
          <div className="cell_wrapper">
            {costumers.map((costumer: ICostumer) => {
              return (
                <CostumerCard key={costumer.id}>
                  <>
                    <div>
                      <div className="customers_infos_wrapper">
                        <div>
                          <div>Name: {costumer.name}</div>
                          <div>Birthday: {costumer.birthday}</div>
                          <div>CPF: {costumer.cpf}</div>
                          <div>RG: {costumer.rg}</div>
                          <div>Phone: {costumer.phone}</div>
                        </div>
                        <div style={{ margin: "0.5rem 1rem" }}>
                          <PrimaryButton
                            onPress={() => openAddressModal(costumer.id)}
                            type="button"
                          >
                            Address List
                          </PrimaryButton>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          margin: "0.5rem 1rem",
                        }}
                      >
                        <PrimaryButton
                          onPress={() => addAdress(costumer.id)}
                          type="button"
                        >
                          Add Address
                        </PrimaryButton>
                        <PrimaryButton
                          onPress={() => deleteCustomer(costumer.id)}
                          type="button"
                        >
                          Delete Customer
                        </PrimaryButton>
                      </div>
                    </div>
                  </>
                  <AddressModal
                    address={address}
                    customerId={costumer.id}
                    isOpen={isOpenModal}
                  />
                </CostumerCard>
              );
            })}
            <ToastContainer />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Home;
