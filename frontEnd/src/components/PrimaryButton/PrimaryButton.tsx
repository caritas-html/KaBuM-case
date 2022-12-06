import React from "react";
import "./PrimaryButton.css";

type props = {
  children: string;
  type: "button" | "submit" | "reset" | undefined;
};

const PrimaryButton: React.FC<props> = ({ children, type }) => {
  return (
    <div className="primary_button_wrapper">
      <button type={type} className="primary_button">
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
