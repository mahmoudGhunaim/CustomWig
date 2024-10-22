import React, { useState } from "react";
import plus from "./assets/plus.svg";
import check_circle from "./assets/check-circle.svg";

import Transparent from "./assets/Transparent.png";
import Light_Brown from "./assets/Light_Brown.png";
import Medium_Brown from "./assets/Medium_Brown.png";
import Dark_Brown from "./assets/Dark_Brown.png";

import "./LaceTone.css";

const LaceTone = ({setSelectedColor,selectedColor}) => {

  const colors = [
    { name: "Transparent", image: Transparent, description: "for light skin" },
    {
      name: "Light Brown",
      image: Light_Brown,
      description: "for light brown skin",
    },
    {
      name: "Medium Brown",
      image: Medium_Brown,
      description: "for brown skin",
    },
    { name: "Dark Brown", image: Dark_Brown, description: "for dark skin" },
  ];

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <section className="LaceTone-sec">
      <div className="LaceTone-container" id="Netcolor">
        <h2>
          <img src={selectedColor ? check_circle : plus} alt="icon" />
          Lace tone {selectedColor ? `- ${selectedColor.name} ` : ""}
        </h2>
        <p>
          Select the mesh net color according to your skin color. To do this,
          click on the field with the desired mesh color.
        </p>
        <div className="LaceTone-colors">
          {colors.map((color) => (
            <div
              key={color.name}
              className="LaceTone-color"
              onClick={() => handleColorSelect(color)}
              style={{ cursor: "pointer" }}
            >
              <div
                className={
                  selectedColor?.name === color.name
                    ? "LaceTone-color-select"
                    : ""
                }
              >
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
