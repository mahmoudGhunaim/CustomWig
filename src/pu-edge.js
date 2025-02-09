import React, { useState } from "react";
import plus from "./assets/plus.svg";
import check_circle from "./assets/check-circle.svg";
import "./PUedge.css";
import alert from "./assets/alert-2.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import puback1 from "./assets/PU edge back 1.png";
import puback2 from "./assets/PU edge back 2.png";
import pufront1 from "./assets/PU edge front 1.png";
import pufront2 from "./assets/PU edge front 2.png";
import getTranslation from './utils/translations'; // Import your translation utility

const ImageViewer = ({ image, alt, onClose }) => {
  return (
    <div className="image-viewer-overlay" onClick={onClose}>
      <button className="close-viewer" onClick={onClose}>
        ×
      </button>
      <div className="image-viewer-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt={alt} />
        <p>{alt}</p>
      </div>
    </div>
  );
};

const PUedge = ({ setSelectedOptions, selectedOptions, getPricePUedge }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSelect = (option) => {
    if (option === "Without") {
      setSelectedOptions([]);
    } else if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      const newSelections = [...selectedOptions, option];
      setSelectedOptions(newSelections);
    }
  };

  const closeImageViewer = () => setSelectedImage(null);

  return (
    <section className="PUedge-sec" id="PU">
      <div className="PUedge-container">
        <div className="PUedge-content">
          <h2>
            <img src={plus} alt={getTranslation("plus_icon", "Plus icon")} />
            {getTranslation("pu_edge", "PU Edge")}
            {selectedOptions.length === 0 && <span>*{getTranslation("optional", "optional")}</span>}
            {selectedOptions.length > 0 && <h6>{getPricePUedge()}</h6>}
          </h2>
          <p>
            {getTranslation("pu_description", "Optionally select a PU edge for the hair line. A PU edge makes it easier to apply your lace wig with adhesive or adhesive strips and ensures a high strength.")}
          </p>
          {/* <button onClick={() => setShowDetails(!showDetails)}>
            <img style={{ width: "24px" }} src={alert} alt={getTranslation("alert_icon", "Alert icon")} />
            {getTranslation("show_detail_images", "Show detail images")}
          </button> */}
        </div>
        <div className="PUedge-select">
          <button
            className={selectedOptions.length === 0 ? "PUedge-button-selected" : ""}
            onClick={() => handleSelect("Without")}
          >
            {getTranslation("without", "Without")}
          </button>
          <button
            className={selectedOptions.includes("Front") ? "PUedge-button-selected" : ""}
            onClick={() => handleSelect("Front")}
          >
            {getTranslation("front", "Front")}
          </button>
          <button
            className={selectedOptions.includes("Back") ? "PUedge-button-selected" : ""}
            onClick={() => handleSelect("Back")}
          >
            {getTranslation("head_back", "Back")}
          </button>
        </div>

        {showDetails && (
          <div>
            <Swiper
              className="image-detail-hair-pu-swiper"
              modules={[Navigation, Pagination, A11y, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{ clickable: true }}
              initialSlide={0}
            >
              <SwiperSlide className="SwiperSlide-pu">
                <p>{getTranslation("pu_edge_front", "PU Edge Front")}</p>
                <div>
                  <img src={pufront1} alt={getTranslation("pu_edge_front_1", "PU Edge Front 1")} onClick={() => setSelectedImage({ src: pufront1, alt: getTranslation("pu_edge_front_1", "PU Edge Front 1") })} />
                  <img src={pufront2} alt={getTranslation("pu_edge_front_2", "PU Edge Front 2")} onClick={() => setSelectedImage({ src: pufront2, alt: getTranslation("pu_edge_front_2", "PU Edge Front 2") })} />
                </div>
              </SwiperSlide>
              <SwiperSlide className="SwiperSlide-pu">
                <p>{getTranslation("pu_edge_back", "PU Edge Back")}</p>
                <div>
                  <img src={puback1} alt={getTranslation("pu_edge_back_1", "PU Edge Back 1")} onClick={() => setSelectedImage({ src: puback1, alt: getTranslation("pu_edge_back_1", "PU Edge Back 1") })} />
                  <img src={puback2} alt={getTranslation("pu_edge_back_2", "PU Edge Back 2")} onClick={() => setSelectedImage({ src: puback2, alt: getTranslation("pu_edge_back_2", "PU Edge Back 2") })} />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        )}

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

export default PUedge;