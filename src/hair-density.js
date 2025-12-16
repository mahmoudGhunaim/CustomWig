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
  const densityValues = [100, 110, 120, 150, 180, 200];
  const [sliderIndex, setSliderIndex] = useState(0);

  const imageMap = {
    Wavy: {
      100: "https://hairs.softylus.com/wp-content/uploads/2025/02/Wavy100.png",
      110: "https://hairs.softylus.com/wp-content/uploads/2025/02/Wavy110.png",
      120: "https://hairs.softylus.com/wp-content/uploads/2025/02/Wavy120.png",
      150: "https://hairs.softylus.com/wp-content/uploads/2025/02/Wavy150.png",
      180: "https://hairs.softylus.com/wp-content/uploads/2025/02/Wavy180.png",
      200: "https://hairs.softylus.com/wp-content/uploads/2025/02/Wavy200.png",
    },
    Straight: {
      100: "https://hairs.softylus.com/wp-content/uploads/2025/02/Straight100.png",
      110: "https://hairs.softylus.com/wp-content/uploads/2025/02/Straight110.png",
      120: "https://hairs.softylus.com/wp-content/uploads/2025/02/Straight120.png",
      150: "https://hairs.softylus.com/wp-content/uploads/2025/02/Straight150.png",
      180: "https://hairs.softylus.com/wp-content/uploads/2025/02/Straight180.png",
      200: "https://hairs.softylus.com/wp-content/uploads/2025/02/Straight200.png",
    },
    Curly: {
      100: "https://hairs.softylus.com/wp-content/uploads/2025/02/Curly100.png",
      110: "https://hairs.softylus.com/wp-content/uploads/2025/02/Curly110.png",
      120: "https://hairs.softylus.com/wp-content/uploads/2025/02/Curly120.png",
      150: "https://hairs.softylus.com/wp-content/uploads/2025/02/Curly150.png",
      180: "https://hairs.softylus.com/wp-content/uploads/2025/02/Curly180.png",
      200: "https://hairs.softylus.com/wp-content/uploads/2025/02/Curly200.png",
    },
  };

  useEffect(() => {
    if (imageMap[lastSelected]) {
      setCurrentImage(imageMap[lastSelected][Density]);
    }
  }, [lastSelected, Density]);

  useEffect(() => {
    // Sync slider index with Density value
    const index = densityValues.indexOf(Density);
    if (index !== -1) {
      setSliderIndex(index);
    }
  }, [Density]);

  const handleSliderChange = (e) => {
    const index = parseInt(e.target.value);
    setSliderIndex(index);
    const newDensity = densityValues[index];
    setDensity(newDensity);
    setCurrentImage(imageMap[lastSelected][newDensity]);
  };

  const handleDensityChange = (newDensity) => {
    const index = densityValues.indexOf(newDensity);
    setSliderIndex(index);
    setDensity(newDensity);
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
                "density_notice",
                "The human hair is evenly distributed and knotted into the lace by hand. Determine the desired hair density (knot density) using the regulator. As a standard we use a hair density of 80%."
              )}
            </p>
            <div className="density-slider-wrapper">
              <div className="density-current-value">
                <span className="density-value-number">{Density}%</span>
                <span className="density-value-label">{getTranslation("density", "DENSITY")}</span>
              </div>
              <div className="density-slider-container">
                <input
                  type="range"
                  min="0"
                  max={densityValues.length - 1}
                  value={sliderIndex}
                  onChange={handleSliderChange}
                  className="density-slider"
                  style={{
                    background: `linear-gradient(to right, #131313 0%, #131313 ${(sliderIndex / (densityValues.length - 1)) * 100}%, #E8DFD0 ${(sliderIndex / (densityValues.length - 1)) * 100}%, #E8DFD0 100%)`
                  }}
                />
                <div className="density-slider-labels">
                  {densityValues.map((value, index) => (
                    <span
                      key={value}
                      className={`density-label ${Density === value ? 'active' : ''}`}
                      onClick={() => handleDensityChange(value)}
                    >
                      {value}%
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HairDensity;
