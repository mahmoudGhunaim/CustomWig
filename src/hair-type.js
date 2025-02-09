import React, { useState, useEffect } from "react";
import "./HairType.css";
import StraightIcon from "./assets/Straight.png";
import WavyIcon from "./assets/Wavy.png";
import CurlyIcon from "./assets/Curlyy.png";
import StraightImage from "./assets/StraightImage.png";
import WavyImage from "./assets/WavyImage.png";
import CurlyImage from "./assets/CurlyImage.png";

const HairType = ({ lastSelected, setLastSelected }) => {
  const [hairDescription, setHairDescription] = useState(
    "Smooth unprocessed hair with beautiful natural shine. The hair can easily swell when wet."
  );
  const [hairImage, setHairImage] = useState("https://hairs.softylus.com/wp-content/uploads/2025/02/StraightImage.png"); // Default image to StraightImage
  const [activeButton, setActiveButton] = useState("Straight"); // Track the active button

  useEffect(() => {
    setLastSelected("Straight");
  }, [setLastSelected]);

  const handleHairTypeSelect = (type, description, image) => {
    setLastSelected(type);
    setHairDescription(description);
    setHairImage(image);
    setActiveButton(type); // Set the active button type
  };

  return (
    <section className="HairType-sec">
      <div className="HairType-container" id="Hairtype">
        <div className="HairType-image">
          <img src={hairImage} alt={`${lastSelected} Hair`} />
        </div>
        <div className="HairType-image-type">
          <h2>Select Hair Type</h2>
          <div className="HairType-image-type-buttons">
            <button
              className={`HairType-image-type-buttons ${
                activeButton === "Straight" ? "HairType-image-type-buttons-active" : ""
              }`}
              onClick={() =>
                handleHairTypeSelect(
                  "Straight",
                  "Smooth unprocessed hair with beautiful natural shine. The hair can easily swell when wet.",
                  "https://hairs.softylus.com/wp-content/uploads/2025/02/StraightImage.png"
                )
              }
            >
              <img src={StraightIcon} alt="Straight Hair" />
              <span>Straight</span>
            </button>
            <button
              className={`HairType-image-type-buttons ${
                activeButton === "Wavy" ? "HairType-image-type-buttons-active" : ""
              }`}
              onClick={() =>
                handleHairTypeSelect(
                  "Wavy",
                  "Wavy hair flowing from the root to the top. More defined and wavy than body wave. This texture can be styled to determine the intensity of the waves.",
                  "https://hairs.softylus.com/wp-content/uploads/2025/02/WavyImage.png"
                )
              }
            >
              <img src={WavyIcon} alt="Wavy Hair" />
              <span>Wavy</span>
            </button>
            <button
              className={`HairType-image-type-buttons ${
                activeButton === "Curly" ? "HairType-image-type-buttons-active" : ""
              }`}
              onClick={() =>
                handleHairTypeSelect(
                  "Curly",
                  "Nappy hair that is extremely thick and resistant. The structure resembles Afro-American hair.",
                  "https://hairs.softylus.com/wp-content/uploads/2025/02/CurlyImage.png"
                )
              }
            >
              <img src={CurlyIcon} alt="Curly Hair" />
              <span>Curly</span>
            </button>
          </div>
          <p>{hairDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default HairType;