import React, { useState } from "react";
import plus from "./assets/plus.svg";
import whiteplus from "./assets/whiteplus.svg"
import Straight from "./assets/HairLength.png";
import Wavy from "./assets/WavyLingth.png";
import Curly from "./assets/CurlyLingth.png";
import "./HairLength.css";
import getTranslation from "./utils/translations"; // Import your translation utility
import SwapImage from "./SwapImage";

const inchValues = [12, 14, 16, 18, 20, 22, 24, 26, 28];
const cmValues = [30, 35, 40, 45, 50, 55, 60, 66, 71];

const valuetext = (value, isCm) => {
  return (
    <>
      {isCm ? value.toFixed(1) : Math.round(value)}
      <br />
      <span>
        {isCm ? getTranslation("cm", "cm") : getTranslation("inches", "inches")}
      </span>
    </>
  );
};

const HairLength = ({
  setLength,
  length,
  setIsCm,
  isCm,
  lastSelected,
  getPriceLength,
}) => {
  const lengthValues = isCm ? cmValues : inchValues;
  const [sliderIndex, setSliderIndex] = useState(() => {
    const values = isCm ? cmValues : inchValues;
    const index = values.indexOf(length);
    return index !== -1 ? index : 0;
  });

  const handleSliderChange = (e) => {
    const index = parseInt(e.target.value);
    setSliderIndex(index);
    const newLength = lengthValues[index];
    setLength(newLength);
  };

  const handleLengthClick = (value) => {
    const index = lengthValues.indexOf(value);
    setSliderIndex(index);
    setLength(value);
  };

  const toggleUnit = () => {
    setIsCm((prev) => !prev);
    if (!isCm) {
      // Converting to cm - find equivalent cm value
      const inchIndex = inchValues.indexOf(length);
      if (inchIndex !== -1 && cmValues[inchIndex]) {
        setLength(cmValues[inchIndex]);
        setSliderIndex(inchIndex);
      } else {
        setLength(cmValues[0]);
        setSliderIndex(0);
      }
    } else {
      // Converting to inches - find equivalent inch value
      const cmIndex = cmValues.indexOf(length);
      if (cmIndex !== -1 && inchValues[cmIndex]) {
        setLength(inchValues[cmIndex]);
        setSliderIndex(cmIndex);
      } else {
        setLength(inchValues[0]);
        setSliderIndex(0);
      }
    }
  };

  const getLengthIndicatorPosition = (currentLength) => {
    const maxSliderValue = isCm ? 75 : 30; // Maximum length based on selected unit
    const percentage = (currentLength / maxSliderValue) * 100; // Calculate percentage of the length
    return `${percentage}%`; // Return percentage value for responsive positioning
  };

  let hairImage;
  if (lastSelected === "Straight") {
    hairImage = "https://hairs.softylus.com/wp-content/uploads/2025/02/HairLength.png";
  } else if (lastSelected === "Wavy") {
    hairImage = "https://hairs.softylus.com/wp-content/uploads/2025/02/WavyLingth.png";
  } else if (lastSelected === "Curly") {
    hairImage = "https://hairs.softylus.com/wp-content/uploads/2025/02/CurlyLingth.png";
  } else {
    hairImage = "https://hairs.softylus.com/wp-content/uploads/2025/02/HairLength.png"; 
  }

  return (
    <section className="HairLength-sec">
      <div className="HairLength-container" id="Length">
        <div className="HairLength-image">
          <SwapImage
            src={hairImage}
            alt={getTranslation("hair_length_image", "Hair Length")}
          />
          <div
            className="HairLength-Length"
            style={{ top: getLengthIndicatorPosition(length) }}
          >
            <div className="HairLength-Length-divider"></div>
            <p>{valuetext(length, isCm)}</p> {/* Display formatted length */}
            <h6
              className={`${
                getPriceLength() !== "0 SAR" ? getPriceLength() : "zero-price"
              }`}
            >
              {getPriceLength() !== "0 SAR" ? getPriceLength() : null}
            </h6>
          </div>
        </div>
        <div className="HairLength-content">
          <h6>
            {getTranslation("hair_length", "Hair length")} -{" "}
            {valuetext(length, isCm)}
            <h6
              className={`${
                getPriceLength() !== "0 SAR" ? getPriceLength() : "zero-price"
              }`}
            >
              {getPriceLength() !== "0 SAR" ? getPriceLength() : null}
            </h6>
          </h6>
          <h5>
            {getTranslation(
              "determine_hair_length",
              "Determine the desired hair length with the help of the regulator."
            )}
          </h5>
          <p>
            {getTranslation(
              "hair_length_measurement_note",
              "Please note that the hair length is measured in the straight state, regardless of the selected hair structure."
            )}
          </p>

          <div className="HairLength-buttons">
            <button
              className={`${isCm ? "unactivebutton" : "activebutton"}`}
              onClick={toggleUnit}
            >
              {getTranslation("inch_button", "Inch")}
            </button>
            <button
              className={`${isCm ? "activebutton" : "unactivebutton"}`}
              onClick={toggleUnit}
            >
              {getTranslation("cm_button", "Cm")}
            </button>
          </div>

          <div className="length-slider-wrapper">
            <div className="length-slider-container">
              <input
                type="range"
                min="0"
                max={lengthValues.length - 1}
                value={sliderIndex}
                onChange={handleSliderChange}
                className="length-slider"
                style={{
                  background: `linear-gradient(to right, #131313 0%, #131313 ${(sliderIndex / (lengthValues.length - 1)) * 100}%, #E8DFD0 ${(sliderIndex / (lengthValues.length - 1)) * 100}%, #E8DFD0 100%)`
                }}
              />
              <div className="length-slider-labels">
                {lengthValues.map((value, index) => (
                  <span
                    key={value}
                    className={`length-label ${length === value ? 'active' : ''}`}
                    onClick={() => handleLengthClick(value)}
                  >
                    {value}{isCm ? '' : '"'}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HairLength;
