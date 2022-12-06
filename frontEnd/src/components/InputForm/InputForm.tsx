import React from "react";
import "./inputForm.css";

interface InputProps {
  name: string;
  type: React.HTMLInputTypeAttribute | undefined;
  value: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const InputForm: React.FC<InputProps> = (props): JSX.Element => {
  return (
    <div className="input_wrapper">
      <label className="label_item">{props.name}</label>
      <input
        type={props.type}
        className="input_item"
        placeholder={props.name}
        onChange={props.value}
      />
    </div>
  );
};

export default InputForm;
