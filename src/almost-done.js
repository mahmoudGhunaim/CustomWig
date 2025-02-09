import React, { useEffect, useState } from "react";
import "./AlmostDone.css";
import deliveryIcon from "./assets/Groupqqq.svg";
import confidenceIcon from "./assets/aaaaaaaaaaa.svg";
import Cart from "./assets/cart-plus.svg";
import hair from "./assets/hair.png";
import Hairdensity from "./assets/Hair density.png";
import HairLengthImage from "./assets/HairLength.png";
import Measurements from "./assets/Measurements.png";
import NetType from "./assets/Net Type.png";

import SilkStraight from "./assets/SilkStraight.png";
import KinkyStraight from "./assets/KinkyStraight.jpg";
import YakiStraight from "./assets/YakiStraight.jpg";
import DeepWave from "./assets/DeepWave.png";
import BodyWave from "./assets/BodyWave.jpg";
import WaterWave from "./assets/WaterWave.jpg";
import Curly from "./assets/Curly.png";
import KinkyCurly from "./assets/KinkyCurly.png";

import Transparent from "./assets/Transparent.png";

import frontBr from "./assets/front_br.png";
import fullBr from "./assets/full_br.png";
import silkBr from "./assets/silk_br.png";
import getTranslation from "./utils/translations";

import FrontLaceWig from "./assets/Front Lace-Wig.png";
import SilkTop from "./assets/Silk top.png";
import FullLaceWig from "./assets/Full Lace-Wig.png";




const AlmostDone = ({
  selectedOptionsBK,
  Density,
  selectedColor,
  length,
  isCm,
  measurements,
  lastSelected,
  lastSelectedTab,
  selectedCard,
  selectedColors,
  selectedOptions,
  // selectedOptionsSilkTop,
  getPriceLength,
  getPriceDensity,
  getPricePUedge,
  // getPriceSilkTop,
  getPriceBleachedKnots,
  selectedPrice,
  CartHandlerComponent,
  totalPrice,
  selectedNameColors,
  setHairLace,
  hairLace
}) => {
const [HairImage,setHairImage] = useState("https://hairs.softylus.com/wp-content/uploads/2025/02/StraightImage.png")
useEffect(() => {
    if (lastSelected === 'Wavy') {
      setHairImage("https://hairs.softylus.com/wp-content/uploads/2025/02/WavyImage.png");
   
    
    } else if (lastSelected === 'Curly') {
      setHairImage("https://hairs.softylus.com/wp-content/uploads/2025/02/CurlyImage.png");
      
    } else if (lastSelected === 'Straight') {
      setHairImage("https://hairs.softylus.com/wp-content/uploads/2025/02/StraightImage.png");
      
    }
  }, [lastSelected]);
 
  const [imageLace, setImageLace] = useState(FrontLaceWig);

  useEffect(() => {
    if (hairLace === "Front Lace-Wig") {
      setImageLace(FrontLaceWig);
    } else if (hairLace === "Silk top") {
      setImageLace(SilkTop);
    } else if (hairLace === "Full Lace-Wig") {
      setImageLace(FullLaceWig);
    }
  }, [hairLace]);
  return (
    <section className="AlmostDone-sec">
      <div className="AlmostDone-container">
        <div className="AlmostDone-head">
        <h2>{getTranslation('almost_done', 'Almost done')}</h2>

        <p>{getTranslation('complete_order', 'Please complete the following information to complete the order')}</p>
        </div>
        <div className="AlmostDone-data-container">
          <div className="AlmostDone-card-container">
            <a href="#Haircolor">
            <div className="label-type">
            <div className="Haircolor-label">
              <img src={hair} alt={getTranslation("hair_icon", "Hair Icon")} />
              <svg
                width="75"
                height="75"
                viewBox="0 0 75 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="Haircolor-svg"
              >
                <rect width="75" height="75" fill={selectedColors.hairColor} />
              </svg>
            </div>
            <h6>{getTranslation("hair_color", "Hair Color")}</h6>
            <p>{selectedNameColors.hairColor || getTranslation("please_choose", "Please choose")} 
              {selectedPrice.hairColor ? <h6>+{selectedPrice.hairColor} SAR</h6> :  ``}</p>
          </div>
        </a>
        {selectedColors.colorGradient !== null && (
          <a href="#Haircolor">
            <div className="label-type">
              <div className="Haircolor-label">
                <img src={hair} alt={getTranslation("hair_icon", "Hair Icon")} />
                <svg
                  width="75"
                  height="75"
                  viewBox="0 0 75 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="Haircolor-svg"
                >
                  <rect width="75" height="75" fill={selectedColors.colorGradient} />
                </svg>
              </div>
              <h6>{getTranslation("color_gradient", "Colour Gradient")}</h6>
              <p>{selectedNameColors.colorGradient} 
                {selectedPrice.colorGradient ? <h6>+{selectedPrice.colorGradient} SAR</h6> :  ``}</p>
            </div>
          </a>
        )}
        {selectedColors.highlight !== null && (
          <a href="#Haircolor">
            <div className="label-type">
              <div className="Haircolor-label">
                <img src={hair} alt={getTranslation("hair_icon", "Hair Icon")} />
                <svg
                  width="75"
                  height="75"
                  viewBox="0 0 75 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="Haircolor-svg"
                >
                  <rect width="75" height="75" fill={selectedColors.highlight} />
                </svg>
              </div>
              <h6>{getTranslation("highlight", "Colour Gradient")}</h6>
              <p>{selectedNameColors.highlight} 
                {selectedPrice.highlight ? <h6>+{selectedPrice.highlight} SAR</h6> :  ``}</p>
            </div>
          </a>
        )}
            <a href="#Hairtype">
              <div className="AlmostDone-card">
                <div>
                  <img src={HairImage} />
                </div>
                <h6>{getTranslation('hair_type', 'Hair type')}</h6>
                  <p>
                   {lastSelected}
                  </p>
              </div>
            </a>
            <a href="#Length">
              <div className="AlmostDone-card">
                <img src={HairLengthImage} />
                <h6>{getTranslation('hair_length', 'Length')}</h6>
<p>
  {length} {isCm === false ? getTranslation('inch', 'inch') : getTranslation('cm', 'cm')}{" "}
  <h6
    className={`${
      getPriceLength() !== "0 SAR"
        ? getPriceLength()
        : "zero-price"
    }`}
  >
    {getPriceLength() !== "0 SAR" ? (
      <>
        +{getPriceLength().replace(' SAR', '')} {getTranslation('currency_sar', 'SAR')}
      </>
    ) : null}
  </h6>
</p>
              </div>
            </a>
            <a href="#Hairdensity">
              <div className="AlmostDone-card">
                <img src={Hairdensity} />
                <h6>{getTranslation('hair_density', 'Hair density')}</h6>
<p>
  {Density}%{" "}
  <h6
    className={`${
      getPriceDensity() !== "0 SAR"
        ? getPriceDensity()
        : "zero-price"
    }`}
  >
    {getPriceDensity() !== "0 SAR" ? (
      <>
        +{getPriceDensity().replace(' SAR', '')} {getTranslation('currency_sar', 'SAR')}
      </>
    ) : null}
  </h6>
</p>
              </div>
            </a>

            <a href="#NetType">
              <div className="AlmostDone-card">
                <img src={imageLace}  />
                <h6>{getTranslation('base_type', 'Base Type')}</h6>
<p>
  {hairLace}
</p>
              </div>
            </a>
            <a href="#Netcolor">
              <div className="AlmostDone-card">
              <img src={selectedColor?.image || Transparent} alt={getTranslation("net_color", "Net Color")} />
            <h6>{getTranslation("net_color", "Net Color")}</h6>
            <p>{selectedColor?.name || getTranslation("please_choose", "Please choose")}</p>
              </div>
            </a>
            {selectedOptions.length > 0 && (
              <a href="#PU">
                <div className="AlmostDone-card PU">
                  <div className="Haircolor-label">
                  <h3>
  <h5>{getTranslation('pu', 'PU')}</h5>
</h3>
                  </div>
                  <h6>{getTranslation('pu_edge', 'PU edge')}</h6>

                  <p>
                    {selectedOptions.map((option, index) => (
                      <span key={index}>
                        {option}
                        {index < selectedOptions.length - 1 && " & "}{" "}
                        {/* Add a comma if it's not the last item */}
                      </span>
                    ))}
                    <h6
                      className={`${
                        getPricePUedge() !== "0 SAR"
                          ? getPricePUedge()
                          : "zero-price"
                      }`}
                    >
                      {getPricePUedge() !== "0 SAR" ? getPricePUedge() : null}
                    </h6>
                  </p>
                </div>
              </a>
            )}
           
           {selectedOptionsBK.length > 0 && (
  <a href="#BK">
    <div className="AlmostDone-card BK">
      <div className="Haircolor-label">
        <h3>
          <h5>{getTranslation('bk', 'BK')}</h5>
        </h3>
      </div>
      <h6>{getTranslation('bleached_knots', 'Bleached knots')}</h6>
      <p>
        {selectedOptionsBK.map((option, index) => (
          <span key={index}>
            {getTranslation(option.toLowerCase(), option)}
            {index < selectedOptionsBK.length - 1 && " & "}{" "}
          </span>
        ))}
        <h6
          className={`${
            getPriceBleachedKnots() !== "0 SAR"
              ? getPriceBleachedKnots()
              : "zero-price"
          }`}
        >
          {getPriceBleachedKnots() !== "0 SAR" ? (
            <>
              {getPriceBleachedKnots().replace(' SAR', '')} {getTranslation('currency_sar', 'SAR')}
            </>
          ) : null}
        </h6>
      </p>
    </div>
  </a>
)}
            <a href="#Measurements">
              <div className="AlmostDone-card">
                <img src={Measurements} />
                <h6>{getTranslation('head_measurements', 'Measurements')}</h6>
<p>
  {measurements.circumference !== null ? (
    <>
      {measurements.circumference || getTranslation('please_choose', 'Please choose')},
      {measurements.frontToNape || getTranslation('please_choose', 'Please choose')},
      {measurements.forehead || getTranslation('please_choose', 'Please choose')},
      {measurements.head || getTranslation('please_choose', 'Please choose')},
      {measurements.siteToSite || getTranslation('please_choose', 'Please choose')},
      {measurements.neckWidth || getTranslation('please_choose', 'Please choose')}
    </>
  ) : (
    getTranslation('please_choose', 'Please choose')
  )}
</p>
              </div>
            </a>
          </div>
          <div className="AlmostDone-Payment">
          <h3>{getTranslation('total_payment', 'Total Payment')}</h3>
            {/* <div className="AlmostDone-Payment-cards">
              <div className="AlmostDone-Payment-card">
                <img src={deliveryIcon} alt="Delivery Time Icon" />
                <div>
                  <h5>{getTranslation('delivery_time', 'Delivery time')}</h5>
                  <p>{getTranslation('delivery_days', '35-40 Days')}</p>
                </div>
              </div>
              <div className="AlmostDone-Payment-card">
                <img src={confidenceIcon} alt="Confidence Icon" />
                <div>
                  <h5>{getTranslation('shop_confidence', 'Shop with Confidence')}</h5>
                  <p>{getTranslation('return_period', '30 Days free return')}</p>
                </div>
              </div>
            </div> */}
            <h2>
  {getTranslation('currency_sar', 'SAR')} {totalPrice}
</h2>

           {CartHandlerComponent}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlmostDone;
