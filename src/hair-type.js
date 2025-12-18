import React, { useState, useEffect } from "react";
import "./HairType.css";
import StraightIcon from "./assets/Straight.png";
import WavyIcon from "./assets/Wavy.png";
import CurlyIcon from "./assets/Curlyy.png";
import StraightImage from "./assets/StraightImage.png";
import WavyImage from "./assets/WavyImage.png";
import CurlyImage from "./assets/CurlyImage.png";
import getTranslation from "./utils/translations"; // Import your translation utility

const HairType = ({ lastSelected, setLastSelected }) => {
  const [hairDescription, setHairDescription] = useState(
    getTranslation("straight_hair_description", "Smooth unprocessed hair with beautiful natural shine. The hair can easily swell when wet.")
  );
  const [hairImage, setHairImage] = useState(StraightImage); // Default image to StraightImage
  const [activeButton, setActiveButton] = useState("Straight"); // Track the active button

  useEffect(() => {
    setLastSelected("Straight");
  }, [setLastSelected]);

  const descriptions = {
    straight_hair_description: "Smooth unprocessed hair with beautiful natural shine. The hair can easily swell when wet.",
    wavy_hair_description: "Natural flowing waves that add volume and movement. Perfect for a relaxed, effortless look.",
    curly_hair_description: "Beautiful bouncy curls with natural texture. Adds volume and a playful, dynamic style."
  };

  const handleHairTypeSelect = (type, descriptionKey, image) => {
    setLastSelected(type);
    setHairDescription(getTranslation(descriptionKey, descriptions[descriptionKey]));
    setHairImage(image);
    setActiveButton(type); // Set the active button type
  };

  return (
    <section className="HairType-sec">
      <div className="HairType-container" id="Hairtype">
        <div className="HairType-image">
          <img key={activeButton} src={hairImage} alt={getTranslation(`${lastSelected}_hair`, `${lastSelected} Hair`)} />
        </div>
        <div className="HairType-image-type">
          <h2>
            {getTranslation("select_hair_type", "Select Hair Type")} 
          </h2>
          <div className="HairType-image-type-buttons">
            <button
              className={`HairType-image-type-buttons ${
                activeButton === "Straight"
                  ? "HairType-image-type-buttons-active"
                  : ""
              }`}
              onClick={() =>
                handleHairTypeSelect(
                  "Straight",
                  "straight_hair_description",
                  StraightImage
                )
              }
            >
              <img src={StraightIcon} alt={getTranslation("straight_hair", "Straight Hair")} />
              <span>{getTranslation("straight", "Straight")}</span>
            </button>
            <button
              className={`HairType-image-type-buttons ${
                activeButton === "Wavy" ? "HairType-image-type-buttons-active" : ""
              }`}
              onClick={() =>
                handleHairTypeSelect(
                  "Wavy",
                  "wavy_hair_description",
                  WavyImage
                )
              }
            >
              <img src={WavyIcon} alt={getTranslation("wavy_hair", "Wavy Hair")} />
              <span>{getTranslation("wavy", "Wavy")}</span>
            </button>
            <button
              className={`HairType-image-type-buttons ${
                activeButton === "Curly" ? "HairType-image-type-buttons-active" : ""
              }`}
              onClick={() =>
                handleHairTypeSelect(
                  "Curly",
                  "curly_hair_description",
                  CurlyImage
                )
              }
            >
              <img src={CurlyIcon} alt={getTranslation("curly_hair", "Curly Hair")} />
              <span>{getTranslation("curly", "Curly")}</span>
            </button>
          </div>
          <p key={`desc-${activeButton}`} className="hair-description-animate">{hairDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default HairType;