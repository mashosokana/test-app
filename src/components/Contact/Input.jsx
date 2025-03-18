import React from "react";
import style from "./Input.module.css"

const Input = ({ id, type = "text", value, onChange, disabled }) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
     className={style.input}
    />
  );
};

export default Input;