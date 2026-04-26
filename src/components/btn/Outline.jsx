import React from 'react';
import { IoMdArrowDown } from "react-icons/io";

const Outline = ({ className = '', text = "view products" }) => {
  return (
    <button className={`outline_btn ${className}`}>
      {text}
      <IoMdArrowDown />
    </button>
  );
};

export default Outline;