import React from "react";
import plus from "./assets/plus.svg";
import check_circle from "./assets/check-circle.svg";
import Transparent from "./assets/Transparent.png";
import Light_Brown from "./assets/Light_Brown.png";
import Medium_Brown from "./assets/Medium_Brown.png";
import Dark_Brown from "./assets/Dark_Brown.png";
import getTranslation from './utils/translations'; // Import your translation utility
import "./LaceTone.css";

const LaceTone = ({ setSelectedColor, selectedColor }) => {
  const colors = [
    { name: getTranslation("transparent", "Transparent"), image: Transparent, description: getTranslation("transparent_description", "for light skin") },
    { name: getTranslation("light_brown", "Light Brown"), image: Light_Brown, description: getTranslation("light_brown_description", "for light brown skin") },
    { name: getTranslation("medium_brown", "Medium Brown"), image: Medium_Brown, description: getTranslation("medium_brown_description", "for brown skin") },
    { name: getTranslation("dark_brown", "Dark Brown"), image: Dark_Brown, description: getTranslation("dark_brown_description", "for dark skin") },
  ];

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <section className="LaceTone-sec">
      <div className="LaceTone-container" id="Netcolor">
        <h2>
          <img src={selectedColor ? check_circle : plus} alt={getTranslation("icon", "Icon")} />
          {getTranslation("lace_tone", "Lace Tone")} {selectedColor ? `- ${selectedColor.name} ` : ""}
        </h2>
        <p>
          {getTranslation("select_mesh_color", "Select the mesh net color according to your skin color. To do this, click on the field with the desired mesh color.")}
        </p>
        <div className="LaceTone-colors">
          {colors.map((color) => (
            <div
              key={color.name}
              className="LaceTone-color"
              onClick={() => handleColorSelect(color)}
              style={{ cursor: "pointer" }}
            >
              <div className={selectedColor?.name === color.name ? "LaceTone-color-select" : ""}>
                <img src={color.image} alt={color.name} />
              </div>
              <div>
                <h6>{color.name}</h6>
                <p>{color.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LaceTone;