import React from "react";

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

const SliderButtons = ({ children }) => {
  const swiper = useSwiper();
  return (
    <div className="btn-sliider">
      <button onClick={() => swiper.slidePrev()}>
        <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1L1 11L11 21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {children}
      <button onClick={() => swiper.slideNext()} className="">
        <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 21L11 11L1 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

const ImageViewer = ({ image, alt, onClose }) => {
  return (
    <div className="image-viewer-overlay" onClick={onClose}>
      <button className="close-viewer" onClick={onClose}>×</button>
      <div className="image-viewer-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt={alt} />
        <p>{alt}</p>
      </div>
    </div>
  );
};

const CustomTabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const HairLace = ({ setLastSelectedTab, lastSelectedTab, setSelectedCard, selectedCard }) => {
  const [value, setValue] = React.useState(0);
  const [showDetailImages, setShowDetailImages] = React.useState("");
  const [selectedImage, setSelectedImage] = React.useState(null);

  const imagesMap = {
    Front: [frontStrrtch1, frontStrrtch2, attachment3],
    Full: [fullwithadhesive1, fullwithadhesive2, attachment2],
    Silk: [silk1, silk2, silk3],
  };

  const handleSlideChange = (swiper) => {
    const index = swiper.activeIndex;
    const types = ["Front", "Full", "Silk"];
    const selectedType = types[index];
    setSelectedCard(selectedType);
  };

  const handleCardClick = (cardType) => {
    setSelectedCard(cardType);
    if (cardType === "Silk") {
      setValue(lastSelectedTab.Silk || 0);
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setLastSelectedTab(prev => ({ ...prev, Silk: newValue }));
  };

  return (
    <section className="HairLace-sec">
      <div className="HairLace-container" id="NetType">
        <div className="HairLace-head">
          <h2>{getTranslation("base_and_lace", "Base & Lace")}</h2>
        </div>
        
        <div className="HairLace-cards desktop">
          {/* Cards */}
          <div 
            className={`HairLace-card ${selectedCard === "Front" ? "HairLace-card-selected" : ""}`}
            onClick={() => handleCardClick("Front")}
          >
            <img src={frontBr} alt={getTranslation("front_lace_wig", "Front Lace Wig")} />
            <div className="HairLace-card-content">
              <img src={Front} alt={getTranslation("front", "Front")} />
              <div>
                <h6>{getTranslation("front_lace_wig_title", "Front Lace-Wig")}</h6>
                <p>{getTranslation("premium_front_lace_wig", "Premium Front Lace Wig")}</p>
              </div>
            </div>
          </div>

          <div 
            className={`HairLace-card ${selectedCard === "Full" ? "HairLace-card-selected" : ""}`}
            onClick={() => handleCardClick("Full")}
          >
            <img src={fullBr} alt={getTranslation("full_lace_wig", "Full Lace Wig")} />
            <div className="HairLace-card-content">
              <img src={Full} alt={getTranslation("full", "Full")} />
              <div>
                <h6>{getTranslation("full_lace_wig_title", "Full Lace-Wig")}</h6>
                <p>{getTranslation("premium_full_lace_wig", "Premium Full Lace Wig")}</p>
              </div>
            </div>
          </div>

          <div 
            className={`HairLace-card ${selectedCard === "Silk" ? "HairLace-card-selected" : ""}`}
            onClick={() => handleCardClick("Silk")}
          >
            <img src={silkBr} alt={getTranslation("silk_top", "Silk Top")} />
            <div className="HairLace-card-content">
              <img src={Silk} alt={getTranslation("silk", "Silk")} />
              <div>
                <h6>{getTranslation("silk_top_title", "Silk top")}</h6>
                <p>{getTranslation("premium_silk_top_wig", "Premium Silk Top Wig")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Swiper */}
        <Swiper
          className="mobile card-swiper"
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={handleSlideChange}
          initialSlide={0}
        >
          <SwiperSlide>
            <div className={`HairLace-card ${selectedCard === "Front" ? "HairLace-card-selected" : ""}`}>
              <img src={frontBr} alt={getTranslation("front_lace_wig", "Front Lace Wig")} />
              <SliderButtons>
                <div className="HairLace-card-content">
                  <img src={Front} alt={getTranslation("front", "Front")} />
                  <div>
                    <h6>{getTranslation("front_lace_wig_title", "Front Lace-Wig")}</h6>
                    <p>{getTranslation("premium_front_lace_wig", "Premium Front Lace Wig")}</p>
                  </div>
                </div>
              </SliderButtons>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={`HairLace-card ${selectedCard === "Full" ? "HairLace-card-selected" : ""}`}>
              <img src={fullBr} alt={getTranslation("full_lace_wig", "Full Lace Wig")} />
              <SliderButtons>
                <div className="HairLace-card-content">
                  <img src={Full} alt={getTranslation("full", "Full")} />
                  <div>
                    <h6>{getTranslation("full_lace_wig_title", "Full Lace-Wig")}</h6>
                    <p>{getTranslation("premium_full_lace_wig", "Premium Full Lace Wig")}</p>
                  </div>
                </div>
              </SliderButtons>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={`HairLace-card ${selectedCard === "Silk" ? "HairLace-card-selected" : ""}`}>
              <img src={silkBr} alt={getTranslation("silk_top", "Silk Top")} />
              <SliderButtons>
                <div className="HairLace-card-content">
                  <img src={Silk} alt={getTranslation("silk", "Silk")} />
                  <div>
                    <h6>{getTranslation("silk_top_title", "Silk top")}</h6>
                    <p>{getTranslation("premium_silk_top_wig", "Premium Silk Top Wig")}</p>
                  </div>
                </div>
              </SliderButtons>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Content Sections */}
        {selectedCard === "Front" && (
          <div className="HairLace-card-tabs HairLace-card-tabs-fix">
            <img src={attachment3} alt={getTranslation("explain_front_lace_wig", "Explain Front Lace Wig")} />
            <p>
              {getTranslation("front_lace_wig_description", "Our front lace wig features a fine Swiss lace base at the front and top for a natural look. The back is crafted with a flexible, comfortable, and ventilated fabric that ensures an optimal fit and breathability. You can easily fix the front lace using adhesive or adhesive strips, or opt for glue-less alternatives. For added security,  stretch straps in the neck ensures a secure, custom fit along with combs and clips strategically placed on the sides, keeping your wig in place all day long. This type of wig offers a more practical solution for daily wear,  perfect for those who may want a quicker, easier option for everyday use.")}
              <div
                className="alert-div"
                onClick={() => setShowDetailImages(!showDetailImages)}
                style={{ cursor: "pointer", display: showDetailImages === true ? "none" : "flex" }}
              >
                <img style={{ width: "24px" }} src={alert} alt={getTranslation("alert_icon", "Alert icon")} />
                {getTranslation("show_detail_images", "Show detail images")}
              </div>
            </p>
          </div>
        )}

        {selectedCard === "Full" && (
          <div className="HairLace-card-tabs HairLace-card-tabs-fix">
            <img src={attachment2} alt={getTranslation("explain_full_lace_wig", "Explain Full Lace Wig")} />
            <p>
              {getTranslation("full_lace_wig_description", "Our full lace wig offers a seamless, natural look with an entirely lace base that provides maximum flexibility and breathability. The lightweight, ventilated fabric ensures comfort while allowing for a secure fit, and the lace cap gives you the freedom to style the wig in any direction, including updos and ponytails. This versatile wig is perfect for women with no or very thin natural hair, offering a realistic, full-coverage solution. It’s also ideal for those seeking a more detailed, undetectable style, as the lace construction allows for a truly natural look all around.")}
              <div
                className="alert-div"
                onClick={() => setShowDetailImages(!showDetailImages)}
                style={{ cursor: "pointer", display: showDetailImages === true ? "none" : "flex" }}
              >
                <img style={{ width: "24px" }} src={alert} alt={getTranslation("alert_icon", "Alert icon")} />
                {getTranslation("show_detail_images", "Show detail images")}
              </div>
            </p>
          </div>
        )}

        {/* Silk Section with Tabs */}
        {selectedCard === "Silk" && (
          <div className="HairLace-card-tabs">
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs value={lastSelectedTab.Silk || 0} onChange={handleChange} aria-label="silk top tabs">
                  <Tab label={getTranslation("front_lace_silk_top", "Front lace silk top")} />
                  <Tab label={getTranslation("folded_seamless_hairline", "Folded seamless hairline")} />
                  {/* <Tab label={getTranslation("medical_silk_top", "Medical Silk Top")} /> */}
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <img src={explain_front_lace_wig} alt={getTranslation("explain_silk_top_with_adhesive", "Explain Silk Top with Adhesive")} />
                <p>
                  {getTranslation("silk_top_with_adhesive_description", "Our full lace wig offers a seamless, natural look with an entirely lace base that provides maximum flexibility and breathability. The lightweight, ventilated fabric ensures comfort while allowing for a secure fit, and the lace cap gives you the freedom to style the wig in any direction, including updos and ponytails. This versatile wig is perfect for women with no or very thin natural hair, offering a realistic, full-coverage solution. It’s also ideal for those seeking a more detailed, undetectable style, as the lace construction allows for a truly natural look all around.")}
                  <div
                    className="alert-div"
                    onClick={() => setShowDetailImages(!showDetailImages)}
                    style={{ cursor: "pointer", display: showDetailImages === true ? "none" : "flex" }}
                  >
                    <img style={{ width: "24px" }} src={alert} alt={getTranslation("alert_icon", "Alert icon")} />
                    {getTranslation("show_detail_images", "Show detail images")}
                  </div>
                </p>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <img src={explain_front_lace_wig} alt={getTranslation("explain_silk_top_no_adhesive", "Explain Silk Top No Adhesive")} />
                <p>
                  {getTranslation("silk_top_no_adhesive_description", " The Silk Top No Adhesive option is designed with a breathable silk material that sits comfortably against the skin. The adjustable straps give you flexibility and ease of use without the need for adhesive. This style is ideal for those looking for a quick on-the-go solution.")}
                  <div
                    className="alert-div"
                    onClick={() => setShowDetailImages(!showDetailImages)}
                    style={{ cursor: "pointer", display: showDetailImages === true ? "none" : "flex" }}
                  >
                    <img style={{ width: "24px" }} src={alert} alt={getTranslation("alert_icon", "Alert icon")} />
                    {getTranslation("show_detail_images", "Show detail images")}
                  </div>
                </p>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <img src={explain_front_lace_wig} alt={getTranslation("explain_medical_silk_top", "Explain Medical Silk Top")} />
                <p>
                  {getTranslation("medical_silk_top_description", "The Medical Silk Top is crafted for sensitive scalps and provides maximum comfort. Made with hypoallergenic materials, this wig is perfect for individuals experiencing hair loss due to medical conditions. It features a silk base that mimics the appearance of the scalp while remaining gentle against the skin.")}
                  <div
                    className="alert-div"
                    onClick={() => setShowDetailImages(!showDetailImages)}
                    style={{ cursor: "pointer", display: showDetailImages === true ? "none" : "flex" }}
                  >
                    <img style={{ width: "24px" }} src={alert} alt={getTranslation("alert_icon", "Alert icon")} />
                    {getTranslation("show_detail_images", "Show detail images")}
                  </div>
                </p>
              </CustomTabPanel>
            </Box>
          </div>
        )}

        {/* Image Detail View */}
        {showDetailImages && (selectedCard === "Front" || selectedCard === "Full" || selectedCard === "Silk") && (
          <div className="show-detail-lace">
            <div className="show-detail-lace-close-viewer-container">
              <button className="show-detail-lace-close-viewer" onClick={() => setShowDetailImages(false)}>
                ×
              </button>
            </div>
            <div className="image-detail-container">
              {imagesMap[selectedCard].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${selectedCard} detail ${index + 1}`}
                  onClick={() => setSelectedImage({
                    src: image,
                    alt: `${selectedCard} detail ${index + 1}`
                  })}
                  style={{ cursor: "pointer", margin: "5px" }}
                />
              ))}
            </div>
          </div>
        )}

        {selectedImage && (
          <ImageViewer
            image={selectedImage.src}
            alt={selectedImage.alt}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    </section>
  );
};

export default HairLace;