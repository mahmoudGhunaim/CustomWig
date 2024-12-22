import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import plus from "./assets/plus.svg";
import alert from "./assets/alert-2.svg";
import HairDensitya from "./assets/HairDensity.png";
import density60 from "./assets/density 60.png";
import densityhair60 from "./assets/densityhair60.png";
import density80 from "./assets/density 80.jpg";
import densityhair80 from "./assets/densityhair80.png";
import density90 from "./assets/density 90.png";
import densityhair90 from "./assets/densityhair90.png";
import density100 from "./assets/densityhair100.png";
import densityhair100 from "./assets/density 100.png";
import density120 from "./assets/density 120.png";
import densityhair120 from "./assets/densityhair120.png";
import density150 from "./assets/densityhair100.png";
import densityhair150 from "./assets/density 150.png";

import HairDensity60 from "./assets/Hair density60.jpg"
import HairDensity80 from "./assets/Hair density80.jpg"
import HairDensity90 from "./assets/Hair density90.jpg"
import HairDensity100 from "./assets/Hair density100.jpg"
import HairDensity120 from "./assets/Hair density120.jpg"
import HairDensity150 from "./assets/Hair density150.jpg"

import getTranslation from "./utils/translations";
import SwapImage  from "./SwapImage"
import "swiper/css";
import "./HairDensity.css";
import "swiper/css/navigation";
const marks = [
  { value: 60 },
  { value: 80},
  { value: 90 },
  { value: 100 },
  { value: 120 },
  { value: 150 },
];

const valuetext = (value) => `${value} %`;

const ImageViewer = ({ image, alt, onClose }) => {
  return (
    <div className="image-viewer-overlay" onClick={onClose}>
      <button className="close-viewer" onClick={onClose}>
        ×
      </button>
      <div
        className="image-viewer-content"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={image} alt={alt} />
        <p>{alt}</p>
      </div>
    </div>
  );
};

const HairDensity = ({ Density, setDensity, getPriceDensity }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [percentagePosition, setPercentagePosition] = useState(0);
  const sliderRef = useRef(null);
  useEffect(() => {
    if (sliderRef.current) {
      // Calculate percentage position based on slider value
      const sliderWidth = sliderRef.current.clientWidth;
      const percentage = (Density - 60) / (150 - 60); // Normalize value between 0 and 1
      const position = percentage * (sliderWidth - 55); // 55 is thumb width
      setPercentagePosition(position);
    }
  }, [Density]);
  const getHairDensityImage = (value) => {
    switch (value) {
      case 60:
        return HairDensity60;
      case 80:
        return HairDensity80;
      case 90:
        return HairDensity90;
      case 100:
        return HairDensity100;
      case 120:
        return HairDensity120;
      case 150:
        return HairDensity150;
      default:
        return HairDensitya;
    }
  };

  const handleSliderChange = (event, newValue) => {
    setDensity(newValue);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  const openImageViewer = (image, alt) => {
    setSelectedImage({ src: image, alt: alt });
    document.body.style.overflow = "hidden";
  };

  const closeImageViewer = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section className="HairDensity-sec">
      <div
        className={`HairDensity-container ${showDetails ? "show-details" : ""}`}
        id="Hairdensity"
      >
        <div className={`main-content ${showDetails ? "hidden" : ""}`}>
          <div className="HairDensity-content">
          <h6>
              <img src={plus} alt={getTranslation("plus_icon", "Plus icon")} /> 
              {getTranslation("hair_density", "Hair density")}{" "}
              <h6 className={`${getPriceDensity() !== "0 SAR" ? getPriceDensity() : "zero-price"}`}>
                {getPriceDensity() !== "0 SAR" ? getPriceDensity() : null}
              </h6>
            </h6>
            <p>{getTranslation("hair_density_description", "The human hair is evenly distributed and knotted into the lace by hand. Determine the desired hair density (knot density) using the   regulator. As a standard we use a hair density of 80%.")}</p>

            <button onClick={toggleDetails}>
              <img src={alert} alt={getTranslation("alert_icon", "Alert icon")} /> 
              {getTranslation("show_detail_images", "Show detail images")}
            </button>
            <div className="hair-density-slider-container">
      <h4 
        className="hair-density-percentage"
        style={{ 
          left: `${percentagePosition + 27.5}px`
        }}
      >
        {Density} %
      </h4>
      <Box 
        className="hair-density-slider" 
        ref={sliderRef}
      >
        <Slider
          aria-label="Hair Density Slider"
          value={Density}
          getAriaValueText={valuetext}
          onChange={handleSliderChange}
          step={null}
          valueLabelDisplay="auto"
          marks={marks}
          min={60}
          max={150}
          disableSwap
          sx={{
            color: "#131313",
            "& .MuiSlider-thumb": {
              backgroundColor: "#131313",
              width: "55px",
              height: "55px",
              position: "relative",
              "&:hover": {
                boxShadow: "none",
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
              backgroundColor: "#bbb",
            },
            "& .MuiSlider-markLabel": {
              top: "65px",
            },
          }}
        />
      </Box>
    </div>
          </div>
          <div className="HairDensity-image">
          <SwapImage 
    src={getHairDensityImage(Density)} 
    alt={`Hair Density ${Density}%`} 
  />   </div>
        </div>

        <div className={`detail-section ${showDetails ? "visible" : ""}`}>
        <div className="detail-header">
            <h2>{getTranslation("detail_images", "Detail Images")}</h2>
            <button className="back-button" onClick={toggleDetails}>
              ← {getTranslation("back", "Back")}
            </button>
          </div>
          <div className="image-detail-hair-density">
          <Swiper
  className="image-detail-hair-density-swiper"
  modules={[Navigation, Pagination, A11y, Autoplay]}
  spaceBetween={20}
  slidesPerView={1}
  navigation={{ clickable: true }}
  initialSlide={0}
>
  {[
    { value: 60, backImage: density60, frontImage: densityhair60 },
    { value: 80, backImage: density80, frontImage: densityhair80 },
    { value: 90, backImage: density90, frontImage: densityhair90 },
    { value: 100, backImage: density100, frontImage: densityhair100 },
    { value: 120, backImage: density120, frontImage: densityhair120 },
    { value: 150, backImage: density150, frontImage: densityhair150 }
  ].map(({ value, backImage, frontImage }) => (
    <SwiperSlide key={value} className="image-detail-hair-density-slide">
      <p>{getTranslation(`hair_density_${value}`, `Hair density ${value}%`)}</p>
      <div className="image-detail-hair-density-image">
        <div>
          <img
            src={backImage}
            onClick={() => openImageViewer(backImage, `${getTranslation(`density_${value}`, `Density ${value}`)} - ${getTranslation("mesh_back", "Mesh back")}`)}
            className="clickable-image"
            alt={`${getTranslation(`density_${value}`, `Density ${value}`)} - ${getTranslation("mesh_back", "Mesh back")}`}
          />
          <p>{getTranslation("mesh_back", "Mesh back")}</p>
        </div>
        <div>
          <img
            src={frontImage}
            onClick={() => openImageViewer(frontImage, `${getTranslation(`density_${value}`, `Density ${value}`)} - ${getTranslation("front_view", "Front view")}`)}
            className="clickable-image"
            alt={`${getTranslation(`density_${value}`, `Density ${value}`)} - ${getTranslation("front_view", "Front view")}`}
          />
          <p>{getTranslation("front_view", "Front view")}</p>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
          </div>
        </div>
        {selectedImage && (
          <ImageViewer
            image={selectedImage.src}
            alt={selectedImage.alt}
            onClose={closeImageViewer}
          />
        )}
      </div>
    </section>
  );
};

export default HairDensity;
