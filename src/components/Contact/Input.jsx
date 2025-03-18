import React from "react";

const Input = ({ id, type = "text", value, onChange, disabled }) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      style={{
        width: "100%", 
        padding: "0.5rem",
        fontSize: "1rem",
        boxSizing: "border-box" 
      }}
    />
  );
};

export default Input;