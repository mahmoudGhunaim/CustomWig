import React from "react";
import "./label.css";
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
import getTranslation from './utils/translations'; // Import your translation utility

const hairTypeImages = {
  Straight: [SilkStraight, KinkyStraight, YakiStraight],
  Wavy: [DeepWave, BodyWave, WaterWave],
  Curly: [Curly, KinkyCurly],
};

const labels = {
  Front: [getTranslation("front_lace_wig_title", "Front Lace-Wig"),""],
  Full: [getTranslation("full_lace_wig_title", "Full Lace-Wig"),""],
  Silk: [getTranslation("front_lace_silk_top", "Front lace silk top"), getTranslation("folded_seamless_hairline", "Folded seamless hairline")],
};

const imageMap = {
  Front: frontBr,
  Full: fullBr,
  Silk: silkBr,
};

const Label = ({
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
  getPriceLength,
  getPriceDensity,
  getPricePUedge,
  getPriceBleachedKnots,
  selectedPrice,
  selectedNameColors
}) => {
  
  const hairTypes = {
    Straight: [getTranslation("silk_straight", "Straight"), getTranslation("kinky_straight", "Kinky Straight"), getTranslation("yaki_straight", "Yaki Straight")],
    Wavy: [getTranslation("deep_wave", "Wave"), getTranslation("body_wave", "Body Wave"), getTranslation("water_wave", "Water Wave")],
    Curly: [getTranslation("curly", "Curly"), getTranslation("jerry_kinky_curl", "Jerry/Kinky Curl")],
  };

  const currentHairImage =
    lastSelected.type && hairTypeImages[lastSelected.type]
      ? hairTypeImages[lastSelected.type][lastSelected.index]
      : SilkStraight;

  const currentNetType = React.useMemo(() => {
    const lastNonZeroType = Object.entries(lastSelectedTab)
      .reverse()
      .find(([_, value]) => value !== 0);

    if (lastNonZeroType) {
      return lastNonZeroType[0];
    }

    return selectedCard || "Front";
  }, [lastSelectedTab, selectedCard]);

  const currentOption = labels[currentNetType][lastSelectedTab[currentNetType]];

  return (
    <section className="label-sec">
      <div className="label-container">
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
          <div className="label-type">
            <div>
              <img src={currentHairImage} alt={getTranslation("hair_type", "Hair Type")} />
            </div>
            <h6>{getTranslation("hair_type", "Hair Type")}</h6>
            <p>
              {lastSelected.type
                ? ` ${hairTypes[lastSelected.type][lastSelected.index]}`
                : getTranslation("please_choose", "Please choose")}
            </p>
          </div>
        </a>
        <a href="#Length">
          <div className="label-type">
            <img src={HairLengthImage} alt={getTranslation("hair_length", "Hair Length")} />
            <h6>{getTranslation("length", "Length")}</h6>
            <p>
              {length} {isCm === false ? getTranslation("inch", "inch") : getTranslation("cm", "cm")}
              <h6 className={`${
                getPriceLength() !== "0 SAR" ? getPriceLength() : "zero-price"
              }`}>
                {getPriceLength() !== "0 SAR" ? getPriceLength() : null}
              </h6>
            </p>
          </div>
        </a>
        <a href="#Hairdensity">
          <div className="label-type">
            <img src={Hairdensity} alt={getTranslation("hair_density", "Hair Density")} />
            <h6>{getTranslation("hair_density", "Hair Density")}</h6>
            <p>
              {Density}%{" "}
              <h6 className={`${
                getPriceDensity() !== "0 SAR"
                  ? getPriceDensity()
                  : "zero-price"
              }`}>
                {getPriceDensity() !== "0 SAR" ? getPriceDensity() : null}
              </h6>
            </p>
          </div>
        </a>

        <a href="#NetType">
          <div className="label-type">
            <img src={imageMap[currentNetType]} alt={currentNetType} />
            <h6>{getTranslation("base_type", "Base Type")}</h6>
            <p>
              {lastSelectedTab[selectedCard] === undefined
                ? getTranslation("please_choose", "Please choose")
                : lastSelectedTab[currentNetType] === lastSelectedTab[selectedCard]
                ? currentOption
                : getTranslation("different_selection", "Different Selection")}
            </p>
          </div>
        </a>
        
        <a href="#Netcolor">
          <div className="label-type">
            <img src={selectedColor?.image || Transparent} alt={getTranslation("net_color", "Net Color")} />
            <h6>{getTranslation("net_color", "Net Color")}</h6>
            <p>{selectedColor?.name || getTranslation("please_choose", "Please choose")}</p>
          </div>
        </a>
        
        {selectedOptions.length > 0 && (
          <a href="#PU">
            <div className="label-type PU">
              <div className="Haircolor-label">
                <h3><h5>PU</h5></h3>
              </div>
              <h6>{getTranslation("pu_edge", "PU Edge")}</h6>
              <p>
                {selectedOptions.map((option, index) => (
                  <span key={index}>
                    {option}
                    {index < selectedOptions.length - 1 && " & "}
                  </span>
                ))}
                <h6 className={`${
                  getPricePUedge() !== "0 SAR"
                    ? getPricePUedge()
                    : "zero-price"
                }`}>
                  {getPricePUedge() !== "0 SAR" ? getPricePUedge() : null}
                </h6>
              </p>
            </div>
          </a>
        )}
       
        {selectedOptionsBK.length > 0 && (
          <a href="#BK">
            <div className="label-type BK">
              <div className="Haircolor-label">
                <h3><h5>BK</h5></h3>
              </div>
              <h6>{getTranslation("bleached_knots", "Bleached Knots")}</h6>
              <p>
                {selectedOptionsBK.map((option, index) => (
                  <span key={index}>
                    {option}
                    {index < selectedOptionsBK.length - 1 && " & "}
                  </span>
                ))}
                <h6 className={`${
                  getPriceBleachedKnots() !== "0 SAR"
                    ? getPriceBleachedKnots()
                    : "zero-price"
                }`}>
                  {getPriceBleachedKnots() !== "0 SAR"
                    ? getPriceBleachedKnots()
                    : null}
                </h6>
              </p>
            </div>
          </a>
        )}
        
        <a href="#Measurements">
          <div className="label-type">
            <img src={Measurements} alt={getTranslation("measurements", "Measurements")} />
            <h6>{getTranslation("measurements", "Measurements")}</h6>
            <p>
              {measurements.circumference !== null ? (
                <>
                  {measurements.circumference || getTranslation("please_choose", "Please choose")}, 
                  {measurements.frontToNape || getTranslation("please_choose", "Please choose")}, 
                  {measurements.forehead || getTranslation("please_choose", "Please choose")}, 
                  {measurements.head || getTranslation("please_choose", "Please choose")}, 
                  {measurements.siteToSite || getTranslation("please_choose", "Please choose")}, 
                  {measurements.neckWidth || getTranslation("please_choose", "Please choose")}
                </>
              ) : (
                getTranslation("please_choose", "Please choose")
              )}
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Label;