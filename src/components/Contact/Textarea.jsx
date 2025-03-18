import React from "react";
const Textarea = ({ id, value, onChange, disabled }) => {
  return (
    <textarea
    id={id}
    value={value}
    onChange={onChange}
    disabled={disabled}
    style={{
      width: "100%",
      height: "150px", 
      padding: "0.5rem",
      fontSize: "1rem",
      boxSizing: "border-box"
    }}
    />
  );
};

export default Textarea;