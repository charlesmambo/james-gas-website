import React from 'react';
import '../productCard/ProductCard.css';
import Btn from '../btn/Btn';
import { LuMessageCircle } from "react-icons/lu";

const ProductCard = ({
  image,
  title,
  price,
  onOrderClick,
}) => {
  return (
    <div className='product_card'>
      
      <div className="product_img">
        <img src={image} alt={title} />
      </div>

      <div className="product_card_content">
        
        <div className="product_card_content_title">
          <h4>{title}</h4>
          <h1 className='price_text'>R{price}</h1>
        </div>

        <Btn 
          text="Order Now"
          icon={LuMessageCircle}
          className="full_width"
          onClick={onOrderClick}
        />

      </div>

    </div>
  );
};

export default ProductCard;