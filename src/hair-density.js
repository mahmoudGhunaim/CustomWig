import React, { useState } from "react";
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


import "swiper/css";
import "./HairDensity.css";
import "swiper/css/navigation";
const marks = [
  { value: 60, label: "60%" },
  { value: 80, label: "80%" },
  { value: 90, label: "90%" },
  { value: 100, label: "100%" },
  { value: 120, label: "120%" },
  { value: 150, label: "150%" },
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
              <img src={plus} alt="Plus icon" /> Hair density{" "}
              <h6
                className={`${
                  getPriceDensity() !== "0 SAR"
                    ? getPriceDensity()
                    : "zero-price"
                }`}
              >
                {getPriceDensity() !== "0 SAR" ? getPriceDensity() : null}
              </h6>
            </h6>
            <p>
              The human hair is evenly distributed and knotted into the lace by
              hand. Determine the desired hair density (knot density) using the
              regulator. As a standard we use a hair density of 80%.
            </p>
            <button onClick={toggleDetails}>
              <img src={alert} alt="alert icon" /> Show detail images
            </button>
            <Box className="HairDensity-Slider">
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
          <div className="HairDensity-image">
          <img src={getHairDensityImage(Density)} alt={`Hair Density ${Density}%`} />
          </div>
        </div>

        <div className={`detail-section ${showDetails ? "visible" : ""}`}>
          <div className="detail-header">
            <h2>Detail Images</h2>
            <button className="back-button" onClick={toggleDetails}>
              ← Back
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
              <SwiperSlide className="image-detail-hair-density-slide">
                <p>Hair density 60%</p>
                <div className="image-detail-hair-density-image">
                  <div>
                    <img
                      src={density60}
                      onClick={() =>
                        openImageViewer(density60, "Density 60 - Mesh back")
                      }
                      className="clickable-image"
                      alt="Density 60 back"
                    />
                    <p>Mesh back</p>
                  </div>
                  <div>
                    <img
                      src={densityhair60}
                      onClick={() =>
                        openImageViewer(
                          densityhair60,
                          "Density 60 - Front view"
                        )
                      }
                      className="clickable-image"
                      alt="Density 60 front"
                    />
                    <p>Front view</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="image-detail-hair-density-slide">
                <p>Hair density 80%</p>
                <div className="image-detail-hair-density-image">
                  <div>
                    <img
                      onClick={() =>
                        openImageViewer(density80, "Density 80 - Mesh back")
                      }
                      src={density80}
                      alt="Density 80 back"
                      className="clickable-image"
                    />
                    <p>Mesh back</p>
                  </div>
                  <div>
                    <img
                      className="clickable-image"
                      src={densityhair80}
                      onClick={() =>
                        openImageViewer(
                          densityhair80,
                          "Density 80 - Front view"
                        )
                      }
                      alt="Density 80 front"
                    />
                    <p>Front view</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="image-detail-hair-density-slide">
                <p>Hair density 90%</p>
                <div className="image-detail-hair-density-image">
                  <div>
                    <img
                      className="clickable-image"
                      src={density90}
                      alt="Density 90 back"
                      onClick={() =>
                        openImageViewer(density90, "Density 90 - Mesh back")
                      }
                    />
                    <p>Mesh back</p>
                  </div>
                  <div>
                    <img
                      className="clickable-image"
                      src={densityhair90}
                      alt="Density 90 front"
                      onClick={() =>
                        openImageViewer(
                          densityhair90,
                          "Density 90 - Front view"
                        )
                      }
                    />
                    <p>Front view</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="image-detail-hair-density-slide">
                <p>Hair density 100%</p>
                <div className="image-detail-hair-density-image">
                  <div>
                    <img
                      className="clickable-image"
                      src={density100}
                      alt="Density 100 back"
                      onClick={() =>
                        openImageViewer(density100, "Density 90 - Mesh back")
                      }
                    />
                    <p>Mesh back</p>
                  </div>
                  <div>
                    <img
                      className="clickable-image"
                      src={densityhair100}
                      alt="Density 100 front"
                      onClick={() =>
                        openImageViewer(
                          densityhair100,
                          "Density 90 - Front view"
                        )
                      }
                    />
                    <p>Front view</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="image-detail-hair-density-slide">
                <p>Hair density 120%</p>
                <div className="image-detail-hair-density-image">
                  <div>
                    <img
                      className="clickable-image"
                      src={density120}
                      alt="Density 120 back"
                      onClick={() =>
                        openImageViewer(density120, "Density 90 - Mesh back")
                      }
                    />
                    <p>Mesh back</p>
                  </div>
                  <div>
                    <img
                      className="clickable-image"
                      src={densityhair120}
                      alt="Density 120 front"
                      onClick={() =>
                        openImageViewer(
                          densityhair120,
                          "Density 90 - Front view"
                        )
                      }
                    />
                    <p>Front view</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="image-detail-hair-density-slide">
                <p>Hair density 150%</p>
                <div className="image-detail-hair-density-image">
                  <div>
                    <img
                      className="clickable-image"
                      src={density150}
                      alt="Density 150 back"
                      onClick={() =>
                        openImageViewer(density150, "Density 90 - Mesh back")
                      }
                    />
                    <p>Mesh back</p>
                  </div>
                  <div>
                    <img
                      className="clickable-image"
                      src={densityhair150}
                      alt="Density 150 front"
                      onClick={() =>
                        openImageViewer(
                          densityhair150,
                          "Density 90 - Front view"
                        )
                      }
                    />
                    <p>Front view</p>
                  </div>
                </div>
              </SwiperSlide>
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
