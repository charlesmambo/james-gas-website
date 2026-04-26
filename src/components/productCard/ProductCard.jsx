import React from 'react';
import '../productCard/ProductCard.css';
import Btn from '../btn/Btn';
import { LuMessageCircle } from "react-icons/lu";

const ProductCard = ({
  image,
  title,
  price,
}) => {

    const handleOrder = () => {
    const message = `Hi Jams Gas 👋%0A%0AI would like to order:%0A%0A• ${title}%0A• Price: R${price}%0A%0APlease confirm availability and delivery.`;

    const whatsappUrl = `https://wa.me/2762386152?text=${message}`;

    window.open(whatsappUrl, "_blank");
  };
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
         onClick={handleOrder}
        />

      </div>

    </div>
  );
};

export default ProductCard;