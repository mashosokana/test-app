import React from "react";
import style from "./Textarea.module.css"

const Textarea = ({ id, value, onChange, disabled }) => {
  return (
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={style.textarea}
    />
  );
};

export default Textarea;