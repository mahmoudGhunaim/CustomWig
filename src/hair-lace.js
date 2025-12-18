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
  silkTopOption,
  setSilkTopOption,
}) => {
  const [image, setImage] = useState("https://hairs.softylus.com/wp-content/uploads/2025/02/Front-Lace-Wig.png");

  const laceDescriptions = {
    "Front Lace-Wig": {
      title: getTranslation("front_lace_best_for", "Best For"),
      points: [
        getTranslation("front_lace_point_1", "First-Time Wearers: Perfect for beginners seeking a natural hairline without the advanced commitment of a full lace cap."),
        getTranslation("front_lace_point_2", "Ideal for wearers who would like to use adhesives, and prefer a lighter weight at the crown area."),
        getTranslation("front_lace_point_3", "Protective Styling: Ideal for those who wish to completely conceal their natural hair (using a cap) for a fresh, protective style or total look transformation.")
      ]
    },
    "Silk top": {
      "Silk-top with front lace": {
        title: getTranslation("silk_top_with_lace_best_for", "Best For (androgenic alopecia & cancer hair loss)"),
        points: [
          getTranslation("silk_top_with_lace_point_1", "Crown & Parting Realism: The ultimate choice for covering thinning or loss specifically at the crown, providing a flawless, skin-like part."),
          getTranslation("silk_top_with_lace_point_2", "Natural Hairline Solution: Perfect for those who cannot or do not wish to blend their real hair at the front, offering a realistic, ready-to-wear front hairline.")
        ]
      },
      "Silk-top without front lace": {
        title: getTranslation("silk_top_without_lace_best_for", "Best For (androgenic alopecia & cancer hair loss)"),
        points: [
          getTranslation("silk_top_without_lace_point_1", "Crown & Parting Realism: The ultimate choice for covering thinning or loss specifically at the crown, providing a flawless, skin-like part."),
          getTranslation("silk_top_without_lace_point_2", "Ideal for women who wish to show and blend their own natural hairline at the front for a highly personalized look.")
        ]
      }
    },
    "Full Lace-Wig": {
      title: getTranslation("full_lace_best_for", "Best For (Alopecia Totalis)"),
      points: [
        getTranslation("full_lace_point_1", "Total Hair Loss: The superior choice for individuals with complete hair loss (such as Alopecia Totalis) or those who wish to cover their natural hair fully underneath using a wig cap and adhesive."),
        getTranslation("full_lace_point_2", "Ultimate Styling Freedom: Essential for clients who want the option to wear their hair in high ponytails, elaborate braids, or complete up-dos, as the perimeter (nape and sides) hairline is recreated.")
      ]
    }
  };

  const getCurrentDescription = () => {
    if (hairLace === "Silk top") {
      return laceDescriptions["Silk top"][silkTopOption];
    }
    return laceDescriptions[hairLace];
  };

  useEffect(() => {
    if (hairLace === "Front Lace-Wig") {
      setImage("https://hairs.softylus.com/wp-content/uploads/2025/02/Front-Lace-Wig.png");
    } else if (hairLace === "Silk top") {
      if (silkTopOption === "Silk-top with front lace") {
        setImage("https://hairs.softylus.com/wp-content/uploads/2025/05/Silk-top-with-front.png");
      } else {
        setImage("https://hairs.softylus.com/wp-content/uploads/2025/02/Silk-top.png");
      }
    } else if (hairLace === "Full Lace-Wig") {
      setImage("https://hairs.softylus.com/wp-content/uploads/2025/05/Full-Lace-Wig-2.png");
    }
  }, [hairLace, silkTopOption]);

  return (
    <section className="HairLace-sec">
      <div className="HairLace-container" id="NetType">
        <div className="HairLace-container-image">
          <img key={`${hairLace}-${silkTopOption}`} src={image} alt={getTranslation(`${selectedCard}_lace`, `${selectedCard} Lace`)} />
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
          
          {hairLace === "Silk top" && (
            <div className="silk-top-options">
              <label>
                <input
                  type="radio"
                  name="silkTopOption"
                  value="Silk-top with front lace"
                  checked={silkTopOption === "Silk-top with front lace"}
                  onChange={() => setSilkTopOption("Silk-top with front lace")}
                />
                {getTranslation("silk_top_with_front_lace", "Silk-top with front lace")}
              </label>
              <label>
                <input
                  type="radio"
                  name="silkTopOption"
                  value="Silk-top without front lace"
                  checked={silkTopOption === "Silk-top without front lace"}
                  onChange={() => setSilkTopOption("Silk-top without front lace")}
                />
                {getTranslation("silk_top_without_front_lace", "Silk-top without front lace")}
              </label>
            </div>
          )}

          {getCurrentDescription() && (
            <div className="lace-description" key={`desc-${hairLace}-${silkTopOption}`}>
              <h3>{getCurrentDescription().title}</h3>
              <ul>
                {getCurrentDescription().points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HairLace;