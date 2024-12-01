import React from "react";
import "./header.css";
import headerImage from "./assets/image_fx_ (30) 1.png"; 
import deliveryIcon from "./assets/Groupqqq.svg";      
import confidenceIcon from "./assets/aaaaaaaaaaa.svg"; 
import Cart from "./assets/cart-plus.svg"

const Header = ({CartHandlerComponent,  basePrice,
  totalPrice }) => {
  return (
    <section className="header-sec">
      <div className="header-container">
        <div className="header-image">
          <img src={headerImage} alt="Header Decoration" />
        </div>
        <div className="header-content">
          <h1>Create Your Own Hair Today!</h1>
          
          <div className="header-pricing">
            <h2>{totalPrice} SAR</h2>
            {CartHandlerComponent}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
