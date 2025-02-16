import React, { useEffect, useState } from "react";
import Front from "./assets/Front.png";
import Full from "./assets/Full.png";
import Silk from "./assets/Silk.png";
import "./HairLace.css";
import getTranslation from "./utils/translations"; // Import your translation utility

const HairLace = ({
  setLastSelectedTab,
  lastSelectedTab,
  setSelectedCard,
  selectedCard,
  setHairLace,
  hairLace,
}) => {
  const [image, setImage] = useState("https://hairs.softylus.com/wp-content/uploads/2025/02/Front-Lace-Wig.png");

  useEffect(() => {
    if (hairLace === "Front Lace-Wig") {
      setImage("https://hairs.softylus.com/wp-content/uploads/2025/02/Front-Lace-Wig.png");
    } else if (hairLace === "Silk top") {
      setImage("https://hairs.softylus.com/wp-content/uploads/2025/02/Silk-top.png");
    } else if (hairLace === "Full Lace-Wig") {
      setImage("https://hairs.softylus.com/wp-content/uploads/2025/02/Full-Lace-Wig.png");
    }
  }, [hairLace]);

  return (
    <section className="HairLace-sec">
      <div className="HairLace-container" id="NetType">
        <div className="HairLace-container-image">
          <img src={image} alt={getTranslation(`${selectedCard}_lace`, `${selectedCard} Lace`)} />
        </div>
        <div className="HairLace-container-content">
          <h2>{getTranslation("choose_base_lace", "Choose Base & Lace")}</h2>
          <div className="HairLace-container-buttons">
            <button
              onClick={() => setHairLace("Front Lace-Wig")}
              className={hairLace === "Front Lace-Wig" ? "active" : ""}
            >
              <img src={Front} alt={getTranslation("front_lace_wig_icon", "Front Lace-Wig Icon")} />
              <span>{getTranslation("front_lace_wig", "Front Lace-Wig")}</span>
            </button>
            <button
              onClick={() => setHairLace("Silk top")}
              className={hairLace === "Silk top" ? "active" : ""}
            >
              <img src={Silk} alt={getTranslation("silk_top_icon", "Silk Top Icon")} />
              <span>{getTranslation("silk_top", "Silk top")}</span>
            </button>
            <button
              onClick={() => setHairLace("Full Lace-Wig")}
              className={hairLace === "Full Lace-Wig" ? "active" : ""}
            >
              <img src={Full} alt={getTranslation("full_lace_wig_icon", "Full Lace-Wig Icon")} />
              <span>{getTranslation("full_lace_wig", "Full Lace-Wig")}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HairLace;