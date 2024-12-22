import React from "react";
import "./header.css";
import headerImage from "./assets/22342 2.png"; 
import deliveryIcon from "./assets/Groupqqq.svg";      
import confidenceIcon from "./assets/aaaaaaaaaaa.svg"; 
import Cart from "./assets/cart-plus.svg";
import getTranslation from './utils/translations'; // Import your translation utility

const Header = ({ CartHandlerComponent, basePrice, totalPrice }) => {
  return (
    <section className="header-sec">
      <div className="header-container">
        <div className="header-image">
          <img src={headerImage} alt={getTranslation("header_decoration", "Header Decoration")} />
        </div>
        <div className="header-content">
          <h1>{getTranslation("create_hair_today", "Create Your Own Hair Today!")}</h1>
          <p>{getTranslation("create_unique_today", "Create your unique lace wig in our custom area! After placing your order, please allow an estimated 25-30 business days (approximately 6 weeks) for processing.")}</p>
          {/* <div className="header-pricing">
            <h2>{totalPrice} SAR</h2>
            {CartHandlerComponent}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Header;