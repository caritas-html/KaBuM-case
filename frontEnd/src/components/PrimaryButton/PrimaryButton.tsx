import React from "react";
import "./PrimaryButton.css";

type props = {
  children: string;
};

const PrimaryButton: React.FC<props> = ({ children }) => {
  const login = () => {};
  return (
    <div className="primary_button_wrapper">
      <button className="primary_button" onClick={() => login(email, password)}>
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
