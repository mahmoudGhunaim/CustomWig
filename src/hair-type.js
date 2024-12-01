import React, { useState, useEffect } from "react";
import "./HairType.css";
import StraightIcon from "./assets/Straight.png";
import WavyIcon from "./assets/Wavy.png";
import CurlyIcon from "./assets/Curlyy.png";
import SilkStraight from "./assets/SilkStraight.png";
import KinkyStraight from "./assets/KinkyStraight.jpg";
import YakiStraight from "./assets/YakiStraight.jpg";
import DeepWave from "./assets/DeepWave.png";
import BodyWave from "./assets/BodyWave.jpg";
import WaterWave from "./assets/WaterWave.jpg";
import Curly from "./assets/Curly.png";
import KinkyCurly from "./assets/KinkyCurly.png";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import "swiper/css";
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';

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

const SliderButtons = ({children}) => {
      const swiper = useSwiper();
      return (
        <div className="btn-sliider">
    <button onClick={() => swiper.slidePrev()} >
    <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 1L1 11L11 21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    </button>
    {children}

          <button onClick={() => swiper.slideNext()} className=''>
          <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 21L11 11L1 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
          </button>
    </div>
  )
}
const HairType = ({ lastSelected, setLastSelected }) => {
  const [activeTab, setActiveTab] = useState(window.innerWidth <= 1024 ? "Straight" : null);
  const [straightValue, setStraightValue] = useState(0);
  const [wavyValue, setWavyValue] = useState(0);
  const [curlyValue, setCurlyValue] = useState(0);
  const [straightImage, setStraightImage] = useState(SilkStraight);
  const [wavyImage, setWavyImage] = useState(DeepWave);
  const [curlyImage, setCurlyImage] = useState(Curly);

  const tabImages = {
    Straight: [SilkStraight, KinkyStraight, YakiStraight],
    Wavy: [DeepWave, BodyWave, WaterWave],
    Curly: [Curly, KinkyCurly],
  };




  // Set initial active tab based on device


  useEffect(() => {
    if (lastSelected) {
      setActiveTab(lastSelected.type);
      if (lastSelected.type === "Straight") {
        setStraightValue(lastSelected.index);
        setStraightImage(tabImages.Straight[lastSelected.index]);
      } else if (lastSelected.type === "Wavy") {
        setWavyValue(lastSelected.index);
        setWavyImage(tabImages.Wavy[lastSelected.index]);
      } else if (lastSelected.type === "Curly") {
        setCurlyValue(lastSelected.index);
        setCurlyImage(tabImages.Curly[lastSelected.index]);
      }
    }
  }, [lastSelected]);

  const handleCardClick = (cardType) => {
    setActiveTab(cardType);
    if (cardType === "Straight") {
      setLastSelected({ type: "Straight", index: straightValue });
    } else if (cardType === "Wavy") {
      setLastSelected({ type: "Wavy", index: wavyValue });
    } else if (cardType === "Curly") {
      setLastSelected({ type: "Curly", index: curlyValue });
    }
  };
  const handleSlideChange = (swiper) => {
    const index = swiper.activeIndex;
    const types = ["Straight", "Wavy", "Curly"];
    setActiveTab(types[index]);
    setLastSelected({ type: types[index], index: 0 });
  };
  const handleTabChange = (cardType, newTabIndex) => {
    setLastSelected({ type: cardType, index: newTabIndex });

    if (cardType === "Straight") {
      setStraightValue(newTabIndex);
      setStraightImage(tabImages.Straight[newTabIndex]);
    } else if (cardType === "Wavy") {
      setWavyValue(newTabIndex);
      setWavyImage(tabImages.Wavy[newTabIndex]);
    } else if (cardType === "Curly") {
      setCurlyValue(newTabIndex);
      setCurlyImage(tabImages.Curly[newTabIndex]);
    }
  };
  return (
    <section className="HairType-sec">
      <div className="HairType-container" id="Hairtype">
        <div className="HairType-head">
          <h2>Hair Type</h2>
        </div>
        <div className="HairType-cards desktop">
          {/* Straight Card */}
          <div
            className={`HairType-card ${
              activeTab === "Straight" ? "HairType-card-active" : ""
            }`}
            onClick={() => handleCardClick("Straight")}
          >
            <img src={straightImage} alt="Hair Type" />
            <div className="HairType-label">
              <img src={StraightIcon} alt="Straight Icon" />
              <div>
                <h6>Straight</h6>
                <p>
                  {activeTab === "Straight" &&
                    (straightValue === 0
                      ? "Silk Straight"
                      : straightValue === 1
                      ? "Kinky Straight"
                      : "Yaki Straight")}
                </p>
              </div>
            </div>
          </div>

          {/* Wavy Card */}
          <div
            className={`HairType-card ${
              activeTab === "Wavy" ? "HairType-card-active" : ""
            }`}
            onClick={() => handleCardClick("Wavy")}
          >
            <img src={wavyImage} alt="Hair Type" />
            <div className="HairType-label">
              <img src={WavyIcon} alt="Wavy Icon" />
              <div>
                <h6>Wavy</h6>
                <p>
                  {activeTab === "Wavy" &&
                    (wavyValue === 0
                      ? "Deep Wave"
                      : wavyValue === 1
                      ? "Body Wave"
                      : "Water Wave")}
                </p>
              </div>
            </div>
          </div>

          {/* Curly Card */}
          <div
            className={`HairType-card ${
              activeTab === "Curly" ? "HairType-card-active" : ""
            }`}
            onClick={() => handleCardClick("Curly")}
          >
            <img src={curlyImage} alt="Hair Type" />
            <div className="HairType-label">
              <img src={CurlyIcon} alt="Curly Icon" />
              <div>
                <h6>Curly</h6>
                <p>
                  {activeTab === "Curly" &&
                    (curlyValue === 0 ? "Curly" : "Jerry/Kinky Curl")}
                </p>
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
              <div className={`HairType-card ${activeTab === "Straight" ? "HairType-card-active" : ""}`} >
                <img src={straightImage} alt="Straight Hair Type" />
                <SliderButtons>
                  <div className="HairType-label">
                    <img src={StraightIcon} alt="Straight Icon" />
                    <div>
                      <h6>Straight</h6>
                      <p>
                        {activeTab === "Straight" &&
                          (straightValue === 0
                            ? "Silk Straight"
                            : straightValue === 1
                            ? "Kinky Straight"
                            : "Yaki Straight")}
                      </p>
                    </div>
                  </div>
                </SliderButtons>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={`HairType-card ${activeTab === "Wavy" ? "HairType-card-active" : ""}`}>
                <img src={wavyImage} alt="Wavy Hair Type" />
                <SliderButtons>
                  <div className="HairType-label">
                    <img src={WavyIcon} alt="Wavy Icon" />
                    <div>
                      <h6>Wavy</h6>
                      <p>
                        {activeTab === "Wavy" &&
                          (wavyValue === 0
                            ? "Deep Wave"
                            : wavyValue === 1
                            ? "Body Wave"
                            : "Water Wave")}
                      </p>
                    </div>
                  </div>
                </SliderButtons>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={`HairType-card ${activeTab === "Curly" ? "HairType-card-active" : ""}`}>
                <img src={curlyImage} alt="Curly Hair Type" />
                <SliderButtons>
                  <div className="HairType-label">
                    <img src={CurlyIcon} alt="Curly Icon" />
                    <div>
                      <h6>Curly</h6>
                      <p>
                        {activeTab === "Curly" &&
                          (curlyValue === 0 ? "Curly" : "Jerry/Kinky Curl")}
                      </p>
                    </div>
                  </div>
                </SliderButtons>
              </div>
            </SwiperSlide>
          </Swiper>
      

        {/* Tab content for Straight */}
        {activeTab === "Straight" && (
          <CSSTransition
            in={activeTab === "Straight"}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="card-tabs">
              <Box sx={{ width: "100%" }} id="Straight">
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={straightValue}
                    onChange={(event, newValue) =>
                      handleTabChange("Straight", newValue)
                    }
                    aria-label="basic tabs example"
                  >
                    <Tab label="Silk Straight" {...a11yProps(0)} />
                    <Tab label="Kinky Straight" {...a11yProps(1)} />
                    <Tab label="Yaki Straight" {...a11yProps(2)} />
                  </Tabs>
                </Box>
                <CustomTabPanel value={straightValue} index={0}>
                  <p>
                    <strong>Silky Straight:</strong> Smooth unprocessed hair
                    with beautiful natural shine. The hair can easily swell when
                    wet.
                  </p>
                </CustomTabPanel>
                <CustomTabPanel value={straightValue} index={1}>
                  <p>
                    <strong>Kinky Straight:</strong> Thicker, smooth hair with a
                    non-continuous texture that seems less smooth but rather
                    smooth or blow-dried.
                  </p>
                </CustomTabPanel>
                <CustomTabPanel value={straightValue} index={2}>
                  <p>
                    <strong>Yaki Straight:</strong> Smooth hair that shows fine
                    waves, resembling Afro-American hair after using a relaxer
                    or straightening.
                  </p>
                </CustomTabPanel>
              </Box>
            </div>
          </CSSTransition>
        )}

        {/* Tab content for Wavy */}
        {activeTab === "Wavy" && (
          <CSSTransition
            in={activeTab === "Wavy"}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="card-tabs">
              <Box sx={{ width: "100%" }} id="Wavy">
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={wavyValue}
                    onChange={(event, newValue) =>
                      handleTabChange("Wavy", newValue)
                    }
                    aria-label="basic tabs example"
                  >
                    <Tab label="Deep Wave" {...a11yProps(0)} />
                    <Tab label="Body Wave" {...a11yProps(1)} />
                    <Tab label="Water Wave" {...a11yProps(2)} />
                  </Tabs>
                </Box>
                <CustomTabPanel value={wavyValue} index={0}>
                  <p>
                    <strong>Deep Wave:</strong>&nbsp;Wavy hair flowing from the
                    root to the tip. This texture can be styled for different
                    intensity levels of waves.
                  </p>
                </CustomTabPanel>
                <CustomTabPanel value={wavyValue} index={1}>
                  <p>
                    <strong>Body Wave:</strong> Naturally wavy hair popular for
                    its versatility. It can be worn in both wavy and
                    straightened states.
                  </p>
                </CustomTabPanel>
                <CustomTabPanel value={wavyValue} index={2}>
                  <p>
                    <strong>Water Wave:</strong> Wavy hair with defined fluency
                    and intense wave patterns.
                  </p>
                </CustomTabPanel>
              </Box>
            </div>
          </CSSTransition>
        )}

        {/* Tab content for Curly */}
        {activeTab === "Curly" && (
          <CSSTransition
            in={activeTab === "Curly"}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="card-tabs">
              <Box sx={{ width: "100%" }} id="Curly">
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={curlyValue}
                    onChange={(event, newValue) =>
                      handleTabChange("Curly", newValue)
                    }
                    aria-label="basic tabs example"
                  >
                    <Tab label="Curly" {...a11yProps(0)} />
                    <Tab label="Jerry/Kinky Curl" {...a11yProps(1)} />
                  </Tabs>
                </Box>
                <CustomTabPanel value={curlyValue} index={0}>
                  <p>
                    <strong>Curly:</strong> Nappy hair that is thick and
                    resistant, resembling Afro-American hair.
                  </p>
                </CustomTabPanel>
                <CustomTabPanel value={curlyValue} index={1}>
                  <p>
                    <strong>Mongolian Kinky Curly:</strong> Highly defined kinky
                    curly hair suitable for afro hair textures, providing a
                    natural look with minimal blending.
                  </p>
                </CustomTabPanel>
              </Box>
            </div>
          </CSSTransition>
        )}
      </div>
    </section>
  );
};

export default HairType;
