import React, { useState } from 'react';
import '../navbar/Navbar.css'
import Btn from '../btn/Btn';
import { FaWhatsapp } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import LOGO from '../../../public/j-logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);

  return (
      <nav>
         <div className='logo'>
            <a href="#">
                <img className='logo_img' src={LOGO} alt="" />
            </a>
         </div>
         <ul className='md_nav_links'>
            <li>
                <a href="#home">home</a>
            </li>
            <li>
                <a href="#products">products</a>
            </li>
            <li>
                <a href="#about">about</a>
            </li>
            <li>
                <a href="#contact">contact</a>
            </li>
         </ul>
         <div className="md_nav_links">
        <Btn 
        text="Order via WhatsApp"
        icon={LuMessageCircle}
        className='md_nav_links'
        />
        </div>
<div className="mobile_toggle">
  {!isOpen ? (
    <GiHamburgerMenu
      className="toggle_icon open_icon"
      onClick={() => setIsOpen(true)}
    />
  ) : (
    <AiOutlineClose
      className="toggle_icon close_icon"
      onClick={() => setIsOpen(false)}
    />
  )}
</div>
        
{isOpen && (
  <ul className="mobile_navbar_links">

    <li>
      <a href="#home" onClick={() => setIsOpen(false)}>home</a>
    </li>

    <li>
      <a href="#products" onClick={() => setIsOpen(false)}>products</a>
    </li>

    <li>
      <a href="#about" onClick={() => setIsOpen(false)}>about</a>
    </li>

    <li>
      <a href="#contact" onClick={() => setIsOpen(false)}>contact</a>
    </li>

    <li>
      <Btn 
        text="Order via WhatsApp"
        icon={LuMessageCircle}
        className="nav_mobile_btn"
        onClick={() => setIsOpen(false)}
      />
    </li>

  </ul>
)}
      </nav>
  )
}

export default Navbar