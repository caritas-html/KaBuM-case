import React from "react";
import "./CostumerCard.css";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const CostumerCard = ({ children }: IProps) => {
  return <div className="costumer_card_wrapper">{children}</div>;
};

export default CostumerCard;
