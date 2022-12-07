import React from "react";
import "./PrimaryButton.css";

type props = {
  children: string;
  type: "button" | "submit" | "reset" | undefined;
  onPress?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const PrimaryButton: React.FC<props> = ({ children, type, onPress }) => {
  return (
    <div className="primary_button_wrapper">
      <button onClick={onPress} type={type} className="primary_button">
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
