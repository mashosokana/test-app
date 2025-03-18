import React from "react";
import style from "./FormGroup.module.css"

const FormGroup = ({ label, children }) => {
  return　(
    <div className={style.container}>
      <label className={style.label}>{label}</label>
      <div className={style.inputContainer}>
        {children}
      </div>
     </div>

  ); 
};

export default FormGroup;