import React from "react";

const FormGroup = ({ label, children }) => {
  return　(
    <div style={{ display: "flex", alignContent: "center",marginBottom: "1rem"}}>
      <label style={{ width: "150px", marginRight:"1rem" }}>{label}</label>
      <div style={{ flex: 1 }}>
        {children}
      </div>
     </div>

  ); 
};

export default FormGroup;