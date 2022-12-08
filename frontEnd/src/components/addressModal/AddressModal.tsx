import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import AddressCard from "../AddressCard/AddressCard";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./AddressModal.css";

interface IProps {
  isOpen: boolean;
  address: string[];
  customerId: string;
}

const AddressModal = ({ isOpen, address, customerId }: IProps) => {
  const [addressArr, setAddressArr] = useState<string[]>([]);
  const token = localStorage.getItem("token") as string;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const deleteAddress = async (addressName: string) => {
    await axios
      .patch(
        `${api.address}/costumers/address/`,
        {
          costumer_id: customerId,
          address: addressName,
        },
        config
      )
      .then((res) => setAddressArr(res.data));
  };

  useEffect(() => {
    setAddressArr(address);
  }, [address]);

  return (
    <>
      {addressArr.length ? (
        <div
          style={isOpen ? { display: "flex" } : { display: "none" }}
          className="address_modal_wrapper"
        >
          <div className="modal_inside_wrapper">
            {addressArr.map((addressName, idx) => (
              <div
                style={{ marginBottom: "1rem", width: "100%" }}
                key={`${address}${idx}`}
              >
                <AddressCard>
                  <div className="inside_card_wrapper">
                    <div style={{ marginRight: "10px" }}>{addressName}</div>
                    <PrimaryButton
                      onPress={() => deleteAddress(addressName)}
                      type="button"
                    >
                      delete
                    </PrimaryButton>
                  </div>
                </AddressCard>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AddressModal;
