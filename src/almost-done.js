import React from "react";
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

const hairTypeImages = {
  Straight: [SilkStraight, KinkyStraight, YakiStraight],
  Wavy: [DeepWave, BodyWave, WaterWave],
  Curly: [Curly, KinkyCurly],
};

const labels = {
  Front: ["Premium Front Lace Wig",""],
  Full: ["Premium Full Lace Wig",""],
  Silk: ["Silk Top with Adhesive", "Silk Top No Adhesive", "Medical Silk Top"],
};
const imageMap = {
  Front: frontBr,
  Full: fullBr,
  Silk: silkBr,
};
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
}) => {
  const hairTypes = {
    Straight: ["Silk Straight", "Kinky Straight", "Yaki Straight"],
    Wavy: ["Deep Wave", "Body Wave", "Water Wave"],
    Curly: ["Curly", "Jerry/Kinky Curl"],
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
    <section className="AlmostDone-sec">
      <div className="AlmostDone-container">
        <div className="AlmostDone-head">
          <h2>Almost done</h2>
          <p>Please complete the following information to complete the order</p>
        </div>
        <div className="AlmostDone-data-container">
          <div className="AlmostDone-card-container">
            <a href="#Haircolor">
              <div className="AlmostDone-card">
                <div className="Haircolor-label">
                  <img src={hair} />
                  <svg
                    width="75"
                    height="75"
                    viewBox="0 0 75 75"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="Haircolor-svg"
                  >
                    <rect
                      width="75"
                      height="75"
                      fill={selectedColors.hairColor}
                    />
                  </svg>
                </div>
                <h6>Hair color</h6>
                <p>{selectedColors.hairColor || "Please choose"} {selectedPrice.hairColor ? <h6>+{selectedPrice.hairColor} SAR</h6> :  ``}</p>
              </div>
            </a>
            {selectedColors.colorGradient !== null && (
              <a href="#Haircolor">
                <div className="AlmostDone-card">
                  <div className="Haircolor-label">
                    <img src={hair} />
                    <svg
                      width="75"
                      height="75"
                      viewBox="0 0 75 75"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="Haircolor-svg"
                    >
                      <rect
                        width="75"
                        height="75"
                        fill={selectedColors.colorGradient}
                      />
                    </svg>
                  </div>
                  <h6>Colour gradient</h6>
                  <p>{selectedColors.colorGradient}{selectedPrice.colorGradient ? <h6>+{selectedPrice.colorGradient} SAR</h6> :  ``}</p>
                </div>
              </a>
            )}
            {selectedColors.highlight !== null && (
              <a href="#Haircolor">
                <div className="AlmostDone-card">
                  <div className="Haircolor-label">
                    <img src={hair} />
                    <svg
                      width="75"
                      height="75"
                      viewBox="0 0 75 75"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="Haircolor-svg"
                    >
                      <rect
                        width="75"
                        height="75"
                        fill={selectedColors.highlight}
                      />
                    </svg>
                  </div>
                  <h6>Colour gradient</h6>
                  <p>{selectedColors.highlight}{selectedPrice.highlight ? <h6>+{selectedPrice.highlight} SAR</h6> :  ``}</p>
                </div>
              </a>
            )}
            <a href="#Hairtype">
              <div className="AlmostDone-card">
                <div>
                  <img src={currentHairImage} />
                </div>
                <h6>Hair type</h6>
                <p>
                  {lastSelected.type
                    ? ` ${hairTypes[lastSelected.type][lastSelected.index]}`
                    : "Please choose"}
                </p>
              </div>
            </a>
            <a href="#Length">
              <div className="AlmostDone-card">
                <img src={HairLengthImage} />
                <h6>Length</h6>
                <p>
                  {length} {isCm === false ? `inch` : `cm`}{" "}
                  <h6
                    className={`${
                      getPriceLength() !== "0 SAR"
                        ? getPriceLength()
                        : "zero-price"
                    }`}
                  >
                    {getPriceLength() !== "0 SAR" ? getPriceLength() : null}
                  </h6>
                </p>
              </div>
            </a>
            <a href="#Hairdensity">
              <div className="AlmostDone-card">
                <img src={Hairdensity} />
                <h6>Hair density</h6>
                <p>
                  {Density}%{" "}
                  <h6
                    className={`${
                      getPriceDensity() !== "0 SAR"
                        ? getPriceDensity()
                        : "zero-price"
                    }`}
                  >
                    {getPriceDensity() !== "0 SAR" ? getPriceDensity() : null}
                  </h6>
                </p>
              </div>
            </a>

            <a href="#NetType">
              <div className="AlmostDone-card">
                <img src={imageMap[currentNetType]} alt={currentNetType} />
                <h6>Base Type</h6>
                <p>
                  {lastSelectedTab[selectedCard] === undefined
                    ? "Please choose"
                    : lastSelectedTab[currentNetType] ===
                      lastSelectedTab[selectedCard]
                    ? currentOption
                    : "Different Selection"}
                </p>
              </div>
            </a>
            <a href="#Netcolor">
              <div className="AlmostDone-card">
                <img
                  src={selectedColor?.image || Transparent}
                  alt="Net color"
                />
                <h6>Net color</h6>
                <p>{selectedColor?.name || "Please choose"}</p>
              </div>
            </a>
            {selectedOptions.length > 0 && (
              <a href="#PU">
                <div className="AlmostDone-card PU">
                  <div className="Haircolor-label">
                    <h3>
                      {" "}
                      <h5>PU</h5>
                    </h3>
                  </div>
                  <h6>PU edge</h6>
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
                      {" "}
                      <h5>BK</h5>
                    </h3>
                  </div>
                  <h6>Bleached knots</h6>
                  <p>
                    {selectedOptionsBK.map((option, index) => (
                      <span key={index}>
                        {option}
                        {index < selectedOptionsBK.length - 1 && " & "}{" "}
                        {/* Add a comma if it's not the last item */}
                      </span>
                    ))}
                    <h6
                      className={`${
                        getPriceBleachedKnots() !== "0 SAR"
                          ? getPriceBleachedKnots()
                          : "zero-price"
                      }`}
                    >
                      {getPriceBleachedKnots() !== "0 SAR"
                        ? getPriceBleachedKnots()
                        : null}
                    </h6>
                  </p>
                </div>
              </a>
            )}
            <a href="#Measurements">
              <div className="AlmostDone-card">
                <img src={Measurements} />
                <h6>Measurements</h6>
                <p>
                  {measurements.circumference !== null ? (
                    <>
                      {measurements.circumference || "Please choose"},
                      {measurements.frontToNape || "Please choose"},
                      {measurements.forehead || "Please choose"},
                      {measurements.head || "Please choose"},
                      {measurements.siteToSite || "Please choose"},
                      {measurements.neckWidth || "Please choose"}
                    </>
                  ) : (
                    "Please choose"
                  )}
                </p>
              </div>
            </a>
          </div>
          <div className="AlmostDone-Payment">
            <h3>Total Payment</h3>
            <div className="AlmostDone-Payment-cards">
              <div className="AlmostDone-Payment-card">
                <img src={deliveryIcon} alt="Delivery Time Icon" />
                <div>
                  <h5>Delivery time</h5>
                  <p>35-40 Days</p>
                </div>
              </div>
              <div className="AlmostDone-Payment-card">
                <img src={confidenceIcon} alt="Confidence Icon" />
                <div>
                  <h5>Shop with Confidence</h5>
                  <p>30 Days free return</p>
                </div>
              </div>
            </div>
            <h2>SAR {totalPrice}</h2>
           {CartHandlerComponent}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlmostDone;
