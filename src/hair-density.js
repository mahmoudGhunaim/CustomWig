import React, { useState, useEffect } from "react";
import getTranslation from "./utils/translations";
import SwapImage from "./SwapImage";
import "./HairDensity.css";

import Straight100 from "./assets/Straight100.png";
import Straight110 from "./assets/Straight110.png";
import Straight120 from "./assets/Straight120.png";
import Straight150 from "./assets/Straight150.png";
import Straight180 from "./assets/Straight180.png";
import Straight200 from "./assets/Straight200.png";

import Wavy100 from "./assets/Wavy100.png";
import Wavy110 from "./assets/Wavy110.png";
import Wavy120 from "./assets/Wavy120.png";
import Wavy150 from "./assets/Wavy150.png";
import Wavy180 from "./assets/Wavy180.png";
import Wavy200 from "./assets/Wavy200.png";

import Curly100 from "./assets/Curly100.png";
import Curly110 from "./assets/Curly110.png";
import Curly120 from "./assets/Curly120.png";
import Curly150 from "./assets/Curly150.png";
import Curly180 from "./assets/Curly180.png";
import Curly200 from "./assets/Curly200.png";

const HairDensity = ({
  Density,
  setDensity,
  getPriceDensity,
  lastSelected,
}) => {
  const [currentImage, setCurrentImage] = useState("");
  const [destiny, setDestiny] = useState(100);

  const imageMap = {
    Wavy: {
      100: Wavy100,
      110: Wavy110,
      120: Wavy120,
      150: Wavy150,
      180: Wavy180,
      200: Wavy200,
    },
    Straight: {
      100: Straight100,
      110: Straight110,
      120: Straight120,
      150: Straight150,
      180: Straight180,
      200: Straight200,
    },
    Curly: {
      100: Curly100,
      110: Curly110,
      120: Curly120,
      150: Curly150,
      180: Curly180,
      200: Curly200,
    },
  };

  useEffect(() => {
    if (imageMap[lastSelected]) {
      setCurrentImage(imageMap[lastSelected][Density]);
    }
  }, [lastSelected, Density]);

  const handleDensityChange = (newDensity) => {
    setDensity(newDensity);
    setDestiny(newDensity);
    setCurrentImage(imageMap[lastSelected][newDensity]);
  };

  return (
    <section className="HairDensity-sec">
      <div className="HairDensity-container" id="Hairdensity">
        <div className="main-content">
          <div className="HairDensity-image">
            <SwapImage src={currentImage} alt={`${lastSelected} ${Density}%`} />
          </div>
          <div className="HairDensity-content">
            <h6>
              {getTranslation("hair_density", "Hair density")}
              <h6
                className={
                  getPriceDensity() !== "0 SAR"
                    ? getPriceDensity()
                    : "zero-price"
                }
              >
                {getPriceDensity() !== "0 SAR" ? getPriceDensity() : null}
              </h6>
            </h6>
            <p>
              {getTranslation(
                "hair_density_description",
                "The human hair is evenly distributed and knotted into the lace by hand. Determine the desired hair density (knot density) using the regulator. As a standard we use a hair density of 80%."
              )}
            </p>
            <div className="HairDensity-content-button-container">
              {[100, 110, 120, 150, 180, 200].map((value) => (
                <button
                  key={value}
                  onClick={() => handleDensityChange(value)}
                  className={destiny === value ? "active" : ""}
                >
                  {value}% <span>DENSITY</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HairDensity;
