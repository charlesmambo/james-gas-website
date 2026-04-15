import React from 'react';
import '../home/Home.css';
import { TbTruckDelivery } from "react-icons/tb";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import ProductCard from '../../components/productCard/ProductCard';
import { FaHandPointer } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import Btn from '../../components/btn/Btn';
import { IoTimeOutline } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import Outline from '../../components/btn/Outline';
import { LuMessageCircle } from "react-icons/lu";
import { FaFireAlt } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdAccessTime } from "react-icons/md";
import { HiCursorArrowRipple } from "react-icons/hi2";
import { FiMessageCircle } from "react-icons/fi";
import ABTIMG from '../../../public/abt.png'
import cylinder5kg from '../../../public/cylinder-5kg.png'

const Home = () => {
  return (
    <div className='home_container'>
        <div className="hero_section_wrapper">
        <div className="hero_section">
            <div className="hero_tag"><FaFireAlt /> Same-Day Delivery in Cape Town</div>
            <h1><span className='hero_text'>Fast & Reliable Gas</span><br /> Delivery to Your Door</h1>
            <p>Order LPG gas cylinders in minutes via WhatsApp. Same-day delivery available in Cape Town. Safe, certified, and always on time.</p>
            <div className="hero_btn_container">
              <Btn 
                text="Order Now via WhatsApp"
                icon={LuMessageCircle}
                className='hero_solid_btn'
                />
                <Outline/>
            </div>
        </div>
        </div>

        <div className="service">
            <div className="service_card">
                <span><TbTruckDelivery className='service_icon'/></span>
                <div className="service_card_content">
                    <h3>Same-Day Delivery</h3>
                    <p>Fastest in the city</p>
                </div>
            </div>
            <div className="service_card">
                <span><HiOutlineLocationMarker className='service_icon'/></span>
                <div className="service_card_content">
                    <h3>Citywide Coverage</h3>
                    <p>We deliver everywhere</p>
                </div>
            </div>
            <div className="service_card">
                <span><FaShieldAlt className='service_icon'/></span>
                <div className="service_card_content">
                    <h3>Safe & Certified</h3>
                    <p>100% quality checked</p>
                </div>
            </div>
            <div className="service_card">
                <span><MdAccessTime className='service_icon'/></span>
                <div className="service_card_content">
                    <h3>24/7 Ordering</h3>
                    <p>Always available</p>
                </div>
            </div>
        </div>

        <div className="product_container">
            <div className="product_container_title">
                <h2>Order Gas</h2>
                <p>Choose the perfect size for your home or business</p>
            </div>
            
            <div className="product_card_container">
              <ProductCard
                image={cylinder5kg}
                title="3kg Cylinder"
                price={300}
              />
              <ProductCard
                image={cylinder5kg}
                title="5kg Cylinder"
                price={500}
              />
              <ProductCard
                image={cylinder5kg}
                title="8kg Cylinder"
                price={700}
              />
              <ProductCard
                image={cylinder5kg}
                title="12kg Cylinder"
                price={1000}
              />
              <ProductCard
                image={cylinder5kg}
                title="15kg Cylinder"
                price={1200}
              />
              <ProductCard
                image={cylinder5kg}
                title="20kg Cylinder"
                price={1500}
              />
              <ProductCard
                image={cylinder5kg}
                title="25kg Cylinder"
                price={1700}
              />
              <ProductCard
                image={cylinder5kg}
                title="30kg Cylinder"
                price={2000}
              />
            </div>

            <div className="how_it_works">
                <div className="how_it_works_title">
                    <h2>How It Works</h2>
                    <p>Get your gas delivered in 3 simple steps</p>
                </div>

                <div className="how_it_works_content">
                    <div className="how_it_works_content_card">
                        <div className="card_num">1</div>

                        <div className="how_it_works_content_card_content">
                            <div className="how_it_works_icon select_icon"><HiCursorArrowRipple /></div>
                            <h4>Choose Your Size</h4>
                            <p>Select the cylinder size that fits your needs</p>
                        </div>
                    </div>
                    <div className="how_it_works_content_card">
                        <div className="card_num">2</div>

                        <div className="how_it_works_content_card_content">
                            <div className="how_it_works_icon whats_icon"><FiMessageCircle /></div>
                            <h4>Order via WhatsApp</h4>
                            <p>Click Order Now and send us a quick message</p>
                        </div>
                    </div>
                    <div className="how_it_works_content_card">
                        <div className="card_num">3</div>

                        <div className="how_it_works_content_card_content">
                            <div className="how_it_works_icon select_icon"><TbTruckDelivery /></div>
                            <h4>We Deliver</h4>
                            <p>Sit back and relax. We deliver to your door</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="abt">
                <div className="abt_img">
                   {/* <img src={ABTIMG} alt="" /> */}
                </div>

                <div className="abt_content">
                    <div className="abt_content_title">
                        {/* <div className="divider"></div> */}
                        <h2>About Us</h2>
                    </div>
                    <div className="abt_desc">
                        <p>At Jams Gas, we make getting gas simple, fast, and stress-free. We deliver quality gas cylinders straight to your doorstep, so you never have to worry about running out or making a trip to refill.</p>
                        <p>Our service is designed for convenience. With just a quick WhatsApp message, you can place your order in seconds and have it delivered to your home or business without delays.</p>
                        <p>We take safety seriously. Every cylinder is carefully checked and handled to meet strict safety standards, giving you peace of mind every time you order.</p>
                        <p>Whether you’re cooking at home or running a business, Jams Gas is your trusted partner for reliable, fast, and affordable gas delivery.</p>
                    </div>
                </div>
            </div>

            <div className="ctc">
                <div className="ctc_title">
                    <h2>Get In Touch</h2>
                    <p>Choose your preferred way to contact us</p>
                </div>

                <div className="ctc_card_container">
                    <div className="ctc_card whats_card">
                        <div className="ctc_icon_container ctc_whats_icon"><FiMessageCircle /></div>
                        <h4 className='w_text'>Order Instantly on WhatsApp</h4>
                        <p className='w_text'>Fastest way to order. Send us a message and we'll respond within minutes.</p>
                        <div className="ctc_btn_container">
                            <Btn 
                            text="Start Chat"
                            icon={FiMessageCircle}
                            className="ctc_btn"
                            />
                        </div>
                        <p className='ctc_rp_text w_text'>
                            <IoTimeOutline />
                            Response time: Under 5 minutes
                        </p>
                    </div>
                    <div className="ctc_card ctc_calls">
                        <div className="ctc_icon_container call_icon"><MdCall /></div>
                        <h4 className='ctc_calls_text'>Call for Quick Orders</h4>
                        <p className='ctc_calls_text'>Speak directly with our team for immediate assistance and orders.</p>
                        <div className="ctc_btn_container call_btn_container">
                            <Btn 
                            text="+276 238 6152"
                            icon={MdCall}
                            className="ctc_btn call_btn"
                            />
                        </div>
                        <p className='ctc_rp_text ctc_calls_text'>
                            <IoTimeOutline />
                            Available: Mon-Sun, 8am - 6pm
                        </p>
                    </div>
                    <div className="ctc_card email_card">
                        <div className="ctc_icon_container email_icon"><MdOutlineEmail /></div>
                        <h4>Send an Email</h4>
                        <p>For general inquiries, bulk orders, or if you have any questions.</p>
                        <div className="ctc_btn_container email_btn_container">
                            <Btn 
                            text="info@jamesgas.co.za"
                            icon={MdOutlineEmail}
                            className="ctc_btn email_btn"
                            />
                        </div>
                        <p className='ctc_rp_text'>
                            <IoTimeOutline />
                            Response time: Within 24 hours
                        </p>
                    </div>
                </div>
            </div>

            <div className="delivery_area">
                <div className="delivery_area_title">
                    <h2>We Deliver Across Cape Town</h2>
                    <p>Fast, reliable delivery to your neighborhood</p>
                </div>

                <div className="delivery_area_content_wrapper">
                    <div className="delivery_area_map_box">
                    </div>
                    <div className="delivery_area_content_container">
                        <h2>Service Areas</h2>
                        <div className="delivery_area_content">
                           <div className="delivery_area_content_card">
                             <span> <HiOutlineLocationMarker/></span>
                             <div className="delivery_area_content_titles">
                                <h4>Cape Town CBD</h4>
                                <p>Same-day delivery</p>
                             </div>
                           </div>
                           <div className="delivery_area_content_card">
                             <span> <HiOutlineLocationMarker/></span>
                             <div className="delivery_area_content_titles">
                                <h4>Claremont</h4>
                                <p>Same-day delivery</p>
                             </div>
                           </div>
                           <div className="delivery_area_content_card">
                             <span> <HiOutlineLocationMarker/></span>
                             <div className="delivery_area_content_titles">
                                <h4>Bellville</h4>
                                <p>Same-day delivery</p>
                             </div>
                           </div>
                           <div className="delivery_area_content_card">
                             <span> <HiOutlineLocationMarker/></span>
                             <div className="delivery_area_content_titles">
                                <h4>Khayelitsha</h4>
                                <p>Same-day delivery</p>
                             </div>
                           </div>
                           <div className="delivery_area_content_card">
                             <span> <HiOutlineLocationMarker/></span>
                             <div className="delivery_area_content_titles">
                                <h4>Mitchells Plain</h4>
                                <p>Same-day delivery</p>
                             </div>
                           </div>
                           <div className="delivery_area_content_card">
                             <span> <HiOutlineLocationMarker/></span>
                             <div className="delivery_area_content_titles">
                                <h4>Sea Point</h4>
                                <p>Same-day delivery</p>
                             </div>
                           </div>
                        </div>
                        <div className="delivery_area_check">
                            <h4>Don't see your area?</h4>
                            <p>We're constantly expanding our delivery zones. Contact us to check if we deliver to your location.</p>
                            <a href="#"><FiMessageCircle />Ask on WhatsApp</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home