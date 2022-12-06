import React from "react";
import "./inputForm.css";

interface InputProps {
  name: string;
}

const InputForm: React.FC<InputProps> = (props): JSX.Element => {
  return (
    <div className="input_wrapper">
      <label className="label_item">{props.name}</label>
      <input className="input_item" placeholder={props.name} />
    </div>
  );
};

export default InputForm;
