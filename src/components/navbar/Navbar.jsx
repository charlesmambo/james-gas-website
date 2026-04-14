import React from 'react';
import '../navbar/Navbar.css'
import Btn from '../btn/Btn';
import { FaWhatsapp } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import LOGO from '../../../public/j-logo.png'

const Navbar = () => {
  return (
      <nav>
         <div className='logo'>
            <a href="#">
                <img className='logo_img' src={LOGO} alt="" />
            </a>
         </div>
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
        icon={LuMessageCircle}
        />
      </nav>
  )
}

export default Navbar