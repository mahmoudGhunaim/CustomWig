import React from "react";
import "./header.css";
import headerImage from "./assets/image_fx_ (30) 1.png"; 
import deliveryIcon from "./assets/Groupqqq.svg";      
import confidenceIcon from "./assets/aaaaaaaaaaa.svg"; 
import Cart from "./assets/cart-plus.svg"
const Header = () => {
  return (
    <section className="header-sec">
      <div className="header-container">
        <div className="header-image">
          <img src={headerImage} alt="Header Decoration" />
        </div>
        <div className="header-content">
          <h1>Create Your Own Hair Today!</h1>
          <div className="header-cards">
            <div className="header-card">
              <img src={deliveryIcon} alt="Delivery Time Icon" />
              <div>
                <h5>Delivery time</h5>
                <p>35-40 Days</p>
              </div>
            </div>
            <div className="header-card">
              <img src={confidenceIcon} alt="Confidence Icon" />
              <div>
                <h5>Shop with Confidence</h5>
                <p>30 Days free return</p>
              </div>
            </div>
          </div>
          <div className="header-pricing">
            <h2>SAR 2649.00</h2>
            <div className="header-pricing-card">
              <img src={Cart} alt="Add to Cart Icon" />
              <p>Add to Cart</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
