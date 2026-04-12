import React from 'react';
import '../navbar/Navbar.css'
import Btn from '../btn/Btn';
import { FaWhatsapp } from "react-icons/fa";
const Navbar = () => {
  return (
      <nav>
         <span>
            <a href="#" className='logo'>LOGO</a>
         </span>
         <ul>
            <li>
                <a href="#">home</a>
            </li>
            <li>
                <a href="#">products</a>
            </li>
            <li>
                <a href="#">about</a>
            </li>
            <li>
                <a href="#">contact</a>
            </li>
         </ul>
        <Btn 
        text="Order via WhatsApp"
        icon={FaWhatsapp}
        />
      </nav>
  )
}

export default Navbar