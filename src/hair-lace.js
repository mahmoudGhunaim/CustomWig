import React, { useEffect, useState } from "react";

import frontBr from "./assets/front_br.png";
import fullBr from "./assets/full_br.png";
import silkBr from "./assets/silk_br.png";
import Front from "./assets/Front.png";
import Full from "./assets/Full.png";
import Silk from "./assets/Silk.png";
import explain_front_lace_wig from "./assets/explain_front_lace_wig.png";
import explain_full_lace_wig from "./assets/explain_full_lace_wig.png";
import alert from "./assets/alert-2.svg";
import attachment2 from "./assets/attachment2.png";
import attachment3 from "./assets/attachment3.png";
import "./HairLace.css";
import silk1 from "./assets/silk1.png";
import silk2 from "./assets/silk2.png";
import silk3 from "./assets/silk3.png";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import frontStrrtch1 from "./assets/front stretch back 1.png";
import frontStrrtch2 from "./assets/front stretch back 2.png";
import fullwithadhesive1 from "./assets/full with adhesive 1.png";
import fullwithadhesive2 from "./assets/full with adhesive 2.png";

import getTranslation from "./utils/translations"; // Import getTranslation utility

import FrontLaceWig from "./assets/Front Lace-Wig.png";
import SilkTop from "./assets/Silk top.png";
import FullLaceWig from "./assets/Full Lace-Wig.png";

const HairLace = ({
  setLastSelectedTab,
  lastSelectedTab,
  setSelectedCard,
  selectedCard,
  setHairLace,
  hairLace,
}) => {
  const [image, setImage] = useState(FrontLaceWig);

  useEffect(() => {
    if (hairLace === "Front Lace-Wig") {
      setImage(FrontLaceWig);
    } else if (hairLace === "Silk top") {
      setImage(SilkTop);
    } else if (hairLace === "Full Lace-Wig") {
      setImage(FullLaceWig);
    }
  }, [hairLace]);

  return (
    <section className="HairLace-sec">
      <div className="HairLace-container" id="NetType">
        <div className="HairLace-container-image">
          <img src={image} alt={selectedCard} />
        </div>
        <div className="HairLace-container-content">
          <h2>Choose Base & Lace</h2>
          <div className="HairLace-container-buttons">
            <button
              onClick={() => setHairLace("Front Lace-Wig")}
              className={hairLace === "Front Lace-Wig" ? "active" : ""}
            >
              <img src={Front} />
              <span>Front Lace-Wig</span>
            </button>
            <button
              onClick={() => setHairLace("Silk top")}
              className={hairLace === "Silk top" ? "active" : ""}
            >
              <img src={Silk} />
              <span>Silk top</span>
            </button>
            <button
              onClick={() => setHairLace("Full Lace-Wig")}
              className={hairLace === "Full Lace-Wig" ? "active" : ""}
            >
              <img src={Full} />
              <span>Full Lace-Wig</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HairLace;
