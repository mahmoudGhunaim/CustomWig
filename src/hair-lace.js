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

import "./HairLace.css";

import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import frontStrrtch1 from "./assets/front stretch back 1.png";
import frontStrrtch2 from "./assets/front stretch back 2.png";

import frontmono1 from "./assets/front Mono top 1.png";
import frontmono2 from "./assets/front Mono top 2.png";

import frontWeft1 from "./assets/front Weft Back 1.png";
import frontWeft2 from "./assets/front Weft Back 2.png";

import fullwithadhesive1 from "./assets/full with adhesive 1.png";
import fullwithadhesive2 from "./assets/full with adhesive 2.png";

import fullwithoutsticking1 from "./assets/full without sticking 1.png";
import fullwithoutsticking2 from "./assets/full without sticking 2.png";

import fullMonoTop1 from "./assets/full Mono Top 1.png";
import fullMonoTop2 from "./assets/full Mono Top 2.png";

import fullSilkTop1 from "./assets/full Silk Top 1.png";
import fullSilkTop2 from "./assets/full Silk Top 2.png";
const a11yProps = (index) => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
});

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

const SliderButtons = ({ children }) => {
  const swiper = useSwiper();
  return (
    <div className="btn-sliider">
      <button onClick={() => swiper.slidePrev()}>
        <svg
          width="12"
          height="22"
          viewBox="0 0 12 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 1L1 11L11 21"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      {children}

      <button onClick={() => swiper.slideNext()} className="">
        <svg
          width="12"
          height="22"
          viewBox="0 0 12 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 21L11 11L1 1"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

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
const HairLace = ({
  setLastSelectedTab,
  lastSelectedTab,
  setSelectedCard,
  selectedCard,
}) => {
  const [value, setValue] = React.useState(0);
  const [showDetailImages, setShowDetailImages] = React.useState("");
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [lastActiveTab, setLastActiveTab] = React.useState(0); // State to track the active tab

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // Update the last selected tab for the currently selected card
    if (selectedCard) {
      setLastSelectedTab((prev) => ({ ...prev, [selectedCard]: newValue }));
    }
  };

  const handleSlideChange = (swiper) => {
    const index = swiper.activeIndex;
    const types = ["Front", "Full", "Silk"];
    const selectedType = types[index];
    setSelectedCard(selectedType);

    // Update last selected tab based on the selected card and the active slide index
  };

  const handleCardClick = (cardType) => {
    setSelectedCard(cardType);
    // Set the current tab value to the last selected tab for that card
    setValue(lastSelectedTab[cardType] || 0);
  };
  // Labels for each tab

  const labels = {
    Front: ["With Stretch Back", "Mono Top", "With Weft Back"],
    Full: [
      "With Adhesive",
      "Without Adhesive",
      "Mono Top",
      "Medical with Silk Top",
    ],
    Silk: [
      "Silk Top with Adhesive",
      "Silk Top No Adhesive",
      "Medical Silk Top",
    ],
  };

  const imagesMap = {
    Front: {
      0: [frontStrrtch1, frontStrrtch2], // With Stretch Back
      1: [frontmono1, frontmono2], // Mono Top
      2: [frontWeft1, frontWeft2], // With Weft Back
    },
    Full: {
      0: [fullwithadhesive1, fullwithadhesive2], // With Adhesive
      1: [fullwithoutsticking1, fullwithoutsticking2], // Without Adhesive
      2: [fullMonoTop1, fullMonoTop2], // Mono Top
      3: [fullSilkTop1, fullSilkTop2], // Medical with Silk Top
    },
  };

  // Function to handle tab changes
  const handleTabChange = (event, newValue) => {
    setLastActiveTab(newValue); // Track the active tab
    // Your existing logic to change tabs...
  };
  console.log("selectedCard", showDetailImages);

  return (
    <section className="HairLace-sec">
      <div className="HairLace-container" id="NetType">
        <div className="HairLace-head">
          <h2>Hair Lace</h2>
        </div>
        <div className="HairLace-cards desktop">
          {/* Front Lace-Wig Card */}
          <div
            className={`HairLace-card ${
              selectedCard === "Front" ? "HairLace-card-selected" : ""
            }`}
            onClick={() => handleCardClick("Front")}
          >
            <img src={frontBr} alt="Front Lace Wig" />
            <div className="HairLace-card-content">
              <img src={Front} alt="Front" />
              <div>
                <h6>Front Lace-Wig</h6>
                <p>{labels.Front[lastSelectedTab.Front]}</p>
              </div>
            </div>
          </div>

          {/* Full Lace-Wig Card */}
          <div
            className={`HairLace-card ${
              selectedCard === "Full" ? "HairLace-card-selected" : ""
            }`}
            onClick={() => handleCardClick("Full")}
          >
            <img src={fullBr} alt="Full Lace Wig" />
            <div className="HairLace-card-content">
              <img src={Full} alt="Full" />
              <div>
                <h6>Full Lace-Wig</h6>
                <p>{labels.Full[lastSelectedTab.Full]}</p>
              </div>
            </div>
          </div>

          {/* Silk Top Card */}

          <div
            className={`HairLace-card ${
              selectedCard === "Silk" ? "HairLace-card-selected" : ""
            }`}
            onClick={() => handleCardClick("Silk")}
          >
            <img src={silkBr} alt="Silk Top" />
            <div className="HairLace-card-content">
              <img src={Silk} alt="Silk" />
              <div>
                <h6>Silk top</h6>
                <p>{labels.Silk[lastSelectedTab.Silk]}</p>
              </div>
            </div>
          </div>
        </div>
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
            <div
              className={`HairLace-card ${
                selectedCard === "Front" ? "HairLace-card-selected" : ""
              }`}
            >
              <img src={frontBr} alt="Front Lace Wig" />
              <SliderButtons>
                <div className="HairLace-card-content">
                  <img src={Front} alt="Front" />
                  <div>
                    <h6>Front Lace-Wig</h6>
                    <p>{labels.Front[lastSelectedTab.Front]}</p>
                  </div>
                </div>
              </SliderButtons>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className={`HairLace-card ${
                selectedCard === "Full" ? "HairLace-card-selected" : ""
              }`}
            >
              <img src={fullBr} alt="Full Lace Wig" />
              <SliderButtons>
                <div className="HairLace-card-content">
                  <img src={Full} alt="Full" />
                  <div>
                    <h6>Full Lace-Wig</h6>
                    <p>{labels.Full[lastSelectedTab.Full]}</p>
                  </div>
                </div>
              </SliderButtons>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className={`HairLace-card ${
                selectedCard === "Silk" ? "HairLace-card-selected" : ""
              }`}
            >
              <img src={silkBr} alt="Silk Top" />
              <SliderButtons>
                <div className="HairLace-card-content">
                  <img src={Silk} alt="Silk" />
                  <div>
                    <h6>Silk top</h6>
                    <p>{labels.Silk[lastSelectedTab.Silk]}</p>
                  </div>
                </div>
              </SliderButtons>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* Tab content based on selected card */}
        {selectedCard === "Front" && (
          <div className="HairLace-card-tabs">
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={lastSelectedTab.Front}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="with stretch back" {...a11yProps(0)} />
                  <Tab label="Mono Top" {...a11yProps(1)} />
                  <Tab label="with weft back" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <CustomTabPanel
                value={value}
                className="HairLace-card-tabs-content"
                index={0}
              >
                <img
                  src={explain_front_lace_wig}
                  alt="Explain Front Lace Wig"
                />
                <p>
                  With the <strong>"front lace-wig with stretch back"</strong>{" "}
                  web form we use fine Swiss lace as a base. In contrast to the
                  full lace wig, the hair is only attached to the forehead area
                  by hand, the rest is sewn with a machine. The lace-wig is
                  fixed by adhesive or adhesive strips to the forehead. At the
                  back of the head, the flexible construction ensures an optimal
                  fit. In addition, the lace wig is optimally positioned with
                  three combs.
                  <div
                    className="alert-div"
                    onClick={() => setShowDetailImages(!showDetailImages)}
                    style={{
                      cursor: "pointer",
                      display: showDetailImages === true ? "none" : "flex",
                    }}
                  >
                    <img
                      style={{ width: "24px" }}
                      src={alert}
                      alt="alert icon"
                    />
                    Show detail images
                  </div>
                </p>
              </CustomTabPanel>
              <CustomTabPanel
                value={value}
                className="HairLace-card-tabs-content"
                index={1}
              >
                <img src={explain_front_lace_wig} alt="Explain Mono Top" />
                <p>
                  In the <strong>"Mono Top Wefted Back"</strong> outfit, a
                  stable Swiss Lace mesh part is only worked into the front
                  attachment area and over the top of the head. Wefts are sewn
                  onto stable rubber bands over the entire back of the head.
                  Especially during physical exertion and on warm summer days,
                  the outfit is characterized by ideal ventilation. The feathers
                  in the sideburns and the adjustable stretch straps in the neck
                  provide sufficient strength. Gluing is not necessary.
                  <div
                    className="alert-div"
                    onClick={() => setShowDetailImages(!showDetailImages)}
                    style={{
                      cursor: "pointer",
                      display: showDetailImages === true ? "none" : "flex",
                    }}
                  >
                    <img
                      style={{ width: "24px" }}
                      src={alert}
                      alt="alert icon"
                    />
                    Show detail images
                  </div>
                </p>
              </CustomTabPanel>
              <CustomTabPanel
                value={value}
                className="HairLace-card-tabs-content"
                index={2}
              >
                <img
                  src={explain_front_lace_wig}
                  alt="Explain with Weft Back"
                />
                <p>
                  The outfit <strong>"Front Lace with Weft Back"</strong>{" "}
                  consists of different Swiss Lace net units. There is a soft,
                  continuous front lace at the base and top of the head. There
                  are no annoying bands. The hairstyle style is freely
                  selectable. A slightly firmer cotton lace is sewn over the
                  back of the head and the side area in the neck. This includes
                  the stretch lace at the back of the head and provides
                  strength. Gluing is not absolutely necessary due to the
                  adjustable stretch straps in the neck, but possible for a
                  stronger hold.
                  <div
                    className="alert-div"
                    onClick={() => setShowDetailImages(!showDetailImages)}
                    style={{
                      cursor: "pointer",
                      display: showDetailImages === true ? "none" : "flex",
                    }}
                  >
                    <img
                      style={{ width: "24px" }}
                      src={alert}
                      alt="alert icon"
                    />
                    Show detail images
                  </div>
                </p>
              </CustomTabPanel>
            </Box>
          </div>
        )}

        {selectedCard === "Full" && (
          <div className="HairLace-card-tabs">
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={lastSelectedTab.Full}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="with adhesive" {...a11yProps(0)} />
                  <Tab label="without adhesive" {...a11yProps(1)} />
                  <Tab label="Mono Top" {...a11yProps(2)} />
                  <Tab label="Medical with Silk Top" {...a11yProps(3)} />
                </Tabs>
              </Box>
              <CustomTabPanel
                value={value}
                className="HairLace-card-tabs-content"
                index={0}
              >
                <img
                  src={explain_full_lace_wig}
                  alt="Explain Full Lace Wig with Adhesive"
                />
                <p>
                  With the <strong>"full lace-wig with adhesive"</strong> we use
                  fine Swiss lace as a base. All hairs are hand-knotted. A
                  particularly high strength of the knots is therefore
                  guaranteed. Due to the stretch application from ear to ear,
                  the lace-wig adapts optimally to your head. The lace-wig is
                  fixed on to the hairline with adhesive or adhesive strips.
                  Using own hair is not necessary.
                  <br />{" "}
                  <div
                    className="alert-div"
                    onClick={() => setShowDetailImages(!showDetailImages)}
                    style={{ cursor: "pointer", display: showDetailImages === true ? "none" : "flex"   }}
                  >
                    <img
                      style={{ width: "24px" }}
                      src={alert}
                      alt="alert icon"
                    />
                    Show detail images
                  </div>{" "}
                </p>
              </CustomTabPanel>
              <CustomTabPanel
                value={value}
                className="HairLace-card-tabs-content"
                index={1}
              >
                <img
                  src={explain_full_lace_wig}
                  alt="Explain Full Lace Wig without Adhesive"
                />
                <p>
                  For the <strong>"Full Lace without sticking"</strong> outfit,
                  we use fine Swiss lace as the basis, which is given shape and
                  stability by quilted bands. A particularly fine lace approach
                  is used in the upper area. All hair is tied by hand. A
                  particularly high strength of the knots is thus guaranteed.
                  The outfit is fixed by the adjustable stretch straps in the
                  neck and adapts ideally to the shape of the head thanks to the
                  flexible structure. Gluing and your own hair are not
                  necessary.
                  <div
                    className="alert-div"
                    onClick={() => setShowDetailImages(!showDetailImages)}
                    style={{
                      cursor: "pointer",
                      display: showDetailImages === true ? "none" : "flex",
                    }}
                  >
                    <img
                      style={{ width: "24px" }}
                      src={alert}
                      alt="alert icon"
                    />
                    Show detail images
                  </div>
                </p>
              </CustomTabPanel>
              <CustomTabPanel
                value={value}
                className="HairLace-card-tabs-content"
                index={2}
              >
                <img src={explain_full_lace_wig} alt="Explain Mono Top" />
                <p>
                  The outfit <strong>"Mono Top"</strong> consists of a mono top
                  in the front area, which guarantees a particularly beautiful
                  parting look. The slightly firmer Swiss Lace part as a middle
                  section provides stability in addition to the integrated
                  straps at the back of the head. The stretch lace at the back
                  of the head and in the neck area ensures a particularly good
                  fit. The feathers in the sideburn area and the adjustable
                  stretch strap in the neck provide additional support. Gluing
                  and your own hair are not necessary.
                  <div
                    className="alert-div"
                    onClick={() => setShowDetailImages(!showDetailImages)}
                    style={{
                      cursor: "pointer",
                      display: showDetailImages === true ? "none" : "flex",
                    }}
                  >
                    <img
                      style={{ width: "24px" }}
                      src={alert}
                      alt="alert icon"
                    />
                    Show detail images
                  </div>
                </p>
              </CustomTabPanel>
              <CustomTabPanel
                value={value}
                className="HairLace-card-tabs-content"
                index={3}
              >
                <img
                  src={explain_full_lace_wig}
                  alt="Explain Medical Full Lace Wig with Silk Top"
                />
                <p>
                  The <strong>"Medical Full Lace Wig with Silk Top"</strong>{" "}
                  mesh is made of particularly soft Swiss Lace net. The top of
                  the head is finished with double lace and folded at the front.
                  This creates a straight edge that offers great comfort and
                  strength. The ideal choice for bangs. A particularly soft
                  stretch lace is processed over the entire back of the head
                  area. The padding with cotton gauze and the attached silicone
                  pads in the neck offer additional comfort. The knots are sunk
                  from the inside by the lining. Both the feathers in the
                  sideburn area and the integrated stretch straps in the neck
                  provide sufficient support. Gluing is not necessary.
                  <div
                    className="alert-div"
                    onClick={() => setShowDetailImages(!showDetailImages)}
                    style={{
                      cursor: "pointer",
                      display: showDetailImages === true ? "none" : "flex",
                    }}
                  >
                    <img
                      style={{ width: "24px" }}
                      src={alert}
                      alt="alert icon"
                    />
                    Show detail images
                  </div>
                </p>
              </CustomTabPanel>
            </Box>
          </div>
        )}

        {selectedCard === "Silk" && (
          <div className="HairLace-card-tabs">
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={lastSelectedTab.Silk}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Silk Top with Adhesive" {...a11yProps(0)} />
                  <Tab label="Silk Top No Adhesive" {...a11yProps(1)} />
                  <Tab label="Medical Silk Top" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <CustomTabPanel
                value={value}
                className="HairLace-card-tabs-content"
                index={0}
              >
                <img
                  src={explain_front_lace_wig}
                  alt="Explain Silk Top with Adhesive"
                />
                <p>
                  With the <strong>"Silk Top with Adhesive"</strong>, the top
                  part is built with a silk base that offers a natural
                  appearance, while the adhesive ensures a secure fit. This
                  style is perfect for long-term wear and provides an incredibly
                  realistic look, mimicking a natural scalp.
                </p>
              </CustomTabPanel>
              <CustomTabPanel
                value={value}
                className="HairLace-card-tabs-content"
                index={1}
              >
                <img
                  src={explain_front_lace_wig}
                  alt="Explain Silk Top No Adhesive"
                />
                <p>
                  The <strong>"Silk Top No Adhesive"</strong> option is designed
                  with a breathable silk material that sits comfortably against
                  the skin. The adjustable straps give you flexibility and ease
                  of use without the need for adhesive. This style is ideal for
                  those looking for a quick on-the-go solution.
                </p>
              </CustomTabPanel>
              <CustomTabPanel
                value={value}
                className="HairLace-card-tabs-content"
                index={2}
              >
                <img
                  src={explain_front_lace_wig}
                  alt="Explain Medical Silk Top"
                />
                <p>
                  The <strong>"Medical Silk Top"</strong> is crafted for
                  sensitive scalps and provides maximum comfort. Made with
                  hypoallergenic materials, this wig is perfect for individuals
                  experiencing hair loss due to medical conditions. It features
                  a silk base that mimics the appearance of the scalp while
                  remaining gentle against the skin.
                </p>
              </CustomTabPanel>
            </Box>
          </div>
        )}
        {showDetailImages &&
          (selectedCard === "Front" || selectedCard === "Full") && (
            <div className="show-detail-lace">
              <div className="show-detail-lace-close-viewer-container">
                <button
                  className="show-detail-lace-close-viewer"
                  onClick={() => setShowDetailImages(false)}
                >
                  ×
                </button>
              </div>
              {selectedCard === "Front" && (
                <div className="image-detail-container">
                  {imagesMap.Front[lastSelectedTab.Front].map(
                    (image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Front detail ${lastSelectedTab.Front} ${
                          index + 1
                        }`}
                        onClick={() =>
                          setSelectedImage({
                            src: image,
                            alt: `Front detail ${lastSelectedTab.Front} ${
                              index + 1
                            }`,
                          })
                        }
                        style={{ cursor: "pointer", margin: "5px" }}
                      />
                    )
                  )}
                </div>
              )}

              {selectedCard === "Full" && (
                <div className="image-detail-container">
                  {imagesMap.Full[lastSelectedTab.Full].map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Full detail ${lastSelectedTab.Full} ${index + 1}`}
                      onClick={() =>
                        setSelectedImage({
                          src: image,
                          alt: `Full detail ${lastSelectedTab.Full} ${
                            index + 1
                          }`,
                        })
                      }
                      style={{ cursor: "pointer", margin: "5px" }}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
      </div>

      {selectedImage && (
        <ImageViewer
          image={selectedImage.src}
          onClose={() => setSelectedImage(null)} // Implement close function
        />
      )}
    </section>
  );
};

export default HairLace;
