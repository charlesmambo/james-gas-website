import React from "react";
import "../btn/Btn.css";

const Btn = ({ text, icon: Icon, className = "", ...props }) => {
  return (
    <button className={`primary_btn ${className}`} {...props}>
      {Icon && <Icon className="btn_icon" />}
      {text}
    </button>
  );
};

export default Btn;