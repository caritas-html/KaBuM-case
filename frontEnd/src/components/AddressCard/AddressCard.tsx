import React from "react";
import "./AddressCard.css";

interface IProps {
  children: string | JSX.Element;
}

const AddressCard = ({ children }: IProps) => {
  return (
    <>
      {children ? <div className="address_card_wrapper">{children}</div> : null}
    </>
  );
};

export default AddressCard;
