import React from 'react';
import '../productCard/ProductCard.css';
import Btn from '../btn/Btn';
import { FaWhatsapp } from "react-icons/fa";
import IMG from '../../../public/jam.png'

const ProductCard = () => {
  return (
    <div className='product_card'>
        <div className="product_img">
           <img src={IMG} alt="gas cylinder" />
        </div>
        <div className="product_card_content">
            <div className="product_card_content_title">
                <h4>5kg Cylinder</h4>
                <h1 className='price_text'>R100.00</h1>
            </div>
            <Btn 
            text="Order Now"
            icon={FaWhatsapp}
             className="full_width"
            />
        </div>
    </div>
  )
}

export default ProductCard