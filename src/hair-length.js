import React, { useState } from "react";
import plus from "./assets/plus.svg";
import Straight from "./assets/HairLength.png";
import Wavy from "./assets/WavyLingth.png";
import Curly from "./assets/CurlyLingth.png";
import "./HairLength.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import getTranslation from "./utils/translations"; // Import your translation utility
import SwapImage from "./SwapImage";
const inchMarks = [
  { value: 12, label: "12" },
  { value: 14, label: "14" },
  { value: 16, label: "16" },
  { value: 18, label: "18" },
  { value: 20, label: "20" },
  { value: 22, label: "22" },
  { value: 24, label: "24" },
  { value: 26, label: "26" },
  { value: 28, label: "28" },
];

const cmMarks = [
  { value: 25, label: "25" },
  { value: 30, label: "30" },
  { value: 35, label: "35" },
  { value: 40, label: "40" },
  { value: 45, label: "45" },
  { value: 55, label: "55" },
  { value: 60, label: "60" },
  { value: 66, label: "66" },
  { value: 71, label: "71" },
];

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
  const marks = isCm ? cmMarks : inchMarks; // Get marks based on the selected unit
  const handleSliderChange = (event, newValue) => {
    setLength(newValue);
  };

  const toggleUnit = () => {
    setIsCm((prev) => !prev); // Toggle between inches and centimeters
    // If converting to cm, convert current length in inches to cm.
    if (!isCm) {
      setLength(Math.round(length * 2.54)); // Convert to cm
    } else {
      setLength(Math.round(length / 2.54)); // Convert to inches
    }
  };

  const getLengthIndicatorPosition = (currentLength) => {
    const maxSliderValue = isCm ? 75 : 30; // Maximum length based on selected unit
    const imageWidth = 600; // Image width in pixels
    const percentage = currentLength / maxSliderValue; // Calculate percentage of the length
    return `${percentage * imageWidth}px`; // Return pixel value for positioning
  };

  let hairImage;
  if (lastSelected === "Straight") {
    hairImage = Straight;
  } else if (lastSelected === "Wavy") {
    hairImage = Wavy;
  } else if (lastSelected === "Curly") {
    hairImage = Curly;
  } else {
    hairImage = Straight; 
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

          <Box className="HairLength-Slider">
            <Slider
              aria-label={getTranslation(
                "hair_length_slider",
                "Hair Length Slider"
              )}
              value={length}
              onChange={handleSliderChange}
              min={isCm ? 30 : 12} // Adjust min for cm
              max={isCm ? 71 : 28} // Adjust max for cm
              step={null} // No intermediate steps; user can select only marked values
              valueLabelDisplay="auto"
              marks={marks}
              valueLabelFormat={(value) => valuetext(value, isCm)} // Format display based on unit
              sx={{
                color: "#131313", // Slider rail and track color
                "& .MuiSlider-thumb": {
                  backgroundColor: "#131313", // Customize thumb color
                  width: "55px",
                  height: "55px",
                  position: "relative",
                  "&:hover": {
                    boxShadow: "none", // No shadow on hover
                  },
                  "&::after": {
                    content: '"+"',
                    position: "absolute",
                    top: "-8px",
                    left: "32.5px",
                    transform: "translateX(-50%)",
                    fontSize: "45px",
                    color: "white",
                  },
                },
                "& .MuiSlider-track": {
                  backgroundColor: "#131313",
                },
                "& .MuiSlider-rail": {
                  backgroundColor: "#bbb", // Customize rail color
                },
                "& .MuiSlider-markLabel": {
                  top: "65px", // Set the top position for mark labels
                },
              }}
            />
          </Box>
        </div>
      </div>
    </section>
  );
};

export default HairLength;
