import React from 'react';
import '../footer/Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import LOGO from '../../../public/j-white.png'
const Footer = () => {
  return (
    <footer>
        <div className="footer_wrapper">
        <div className="footer_title">
         <div className='logo footer_logo'>
          <a href="#">
            <img className='logo_img footer_logo_img' src={LOGO} alt="" />
            </a>
         </div>
          <p>Fast, reliable, and safe LPG gas delivery directly to your home or business in Cape Town. Order in seconds via WhatsApp.</p>
          <div className="footer_icons">
            <span><FaFacebook /></span>
            <span><FaInstagram /></span>
            <span><FaTwitter /></span>
          </div>
        </div>

        <div className="footer_links">
            <h3>Quick links</h3>
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
        </div>
        <div className="footer_links footer_ctc">
            <h3>contact info</h3>
            <ul>
                <li>
                    <GrLocation className='ft_icon'/>
                    Cape Town, South Africa
                </li>
                <li>
                    <MdLocalPhone className='ft_icon'/>
                    +27 123 456 789
                </li>
                <li>
                    <MdEmail className='ft_icon'/>
                    info@jamesgas.co.za
                </li>
                <li>
                    <IoTime className='ft_icon'/>
                    Mon-Sun: 8am - 6pm
                </li>
            </ul>
        </div>
        </div>
       <div className="rights">
        <p>© {new Date().getFullYear()} Jams Gas. All rights reserved.</p>
       </div>
    </footer>
  )
}

export default Footer