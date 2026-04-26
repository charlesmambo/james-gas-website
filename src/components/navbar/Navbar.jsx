import React, { useState } from 'react';
import '../navbar/Navbar.css'
import Btn from '../btn/Btn';
import { FaWhatsapp } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import LOGO from '../../../public/j-logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);

  return (
      <nav>
         <div className='logo'>
            <Link to="/home">
                <img className='logo_img' src={LOGO} alt="" />
            </Link>
         </div>
<ul className='md_nav_links'>
  <li>
    <Link to="/home">home</Link>
  </li>
  <li>
    <Link to="/products">products</Link>
  </li>
  <li>
    <Link to="/about">about</Link>
  </li>
  <li>
    <Link to="/contact">contact</Link>
  </li>
</ul>
         <div className="md_nav_links">
                 <a
        href="https://wa.me/+27695940761"
         target="_blank"
         rel="noopener noreferrer"
         >
        <Btn 
        text="Order via WhatsApp"
        icon={LuMessageCircle}
        className='md_nav_links'
        /></a>
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
      <Link to="/home" onClick={() => setIsOpen(false)}>home</Link>
    </li>

    <li>
      <Link to="/products" onClick={() => setIsOpen(false)}>products</Link>
    </li>

    <li>
      <Link to="/about" onClick={() => setIsOpen(false)}>about</Link>
    </li>

    <li>
      <Link to="/contact" onClick={() => setIsOpen(false)}>contact</Link>
    </li>

    <li>
       <a
        href="https://wa.me/+27695940761"
         target="_blank"
         rel="noopener noreferrer"
         >
      <Btn 
        text="Order via WhatsApp"
        icon={LuMessageCircle}
        className="nav_mobile_btn"
        onClick={() => setIsOpen(false)}
      />
      </a>
    </li>

  </ul>
)}
      </nav>
  )
}

export default Navbar