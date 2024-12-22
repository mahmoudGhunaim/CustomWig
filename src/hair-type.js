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
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import getTranslation from './utils/translations'; // Import your translation utility
import SwapImage from "./SwapImage";
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
        <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1L1 11L11 21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {children}
      <button onClick={() => swiper.slideNext()}>
        <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 21L11 11L1 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
  // const [SilkStraight, setSilkStraight] = useState(SilkStraight);
  // const [DeepWave, setDeepWave] = useState(DeepWave);
  // const [Curly, setCurly] = useState(Curly);

  // const tabImages = {
  //   Straight: [SilkStraight, KinkyStraight, YakiStraight],
  //   Wavy: [DeepWave, BodyWave, WaterWave],
  //   Curly: [Curly, KinkyCurly],
  // };

  // Set initial active tab based on device
  useEffect(() => {
    if (lastSelected) {
      setActiveTab(lastSelected.type);
      if (lastSelected.type === "Straight") {
        setStraightValue(lastSelected.index);
        // setSilkStraight(tabImages.Straight[lastSelected.index]);
      } else if (lastSelected.type === "Wavy") {
        setWavyValue(lastSelected.index);
        // setDeepWave(tabImages.Wavy[lastSelected.index]);
      } else if (lastSelected.type === "Curly") {
        setCurlyValue(lastSelected.index);
        // setCurly(tabImages.Curly[lastSelected.index]);
      }
    }
  }, [lastSelected]);

  const handleCardClick = (cardType) => {
    setActiveTab(cardType);
    setLastSelected({ type: cardType, index: cardType === "Straight" ? straightValue : cardType === "Wavy" ? wavyValue : curlyValue });
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
      // setSilkStraight(tabImages.Straight[newTabIndex]);
    } else if (cardType === "Wavy") {
      setWavyValue(newTabIndex);
      // setDeepWave(tabImages.Wavy[newTabIndex]);
    } else if (cardType === "Curly") {
      setCurlyValue(newTabIndex);
      // setCurly(tabImages.Curly[newTabIndex]);
    }
  };

  return (
    <section className="HairType-sec">
      <div className="HairType-container" id="Hairtype">
        <div className="HairType-head">
          <h2>{getTranslation("hair_type", "Hair Type")}</h2> {/* Added translation */}
        </div>
        <div className="HairType-cards desktop">
          {/* Straight Card */}
          <div
            className={`HairType-card ${activeTab === "Straight" ? "HairType-card-active" : ""}`}
            onClick={() => handleCardClick("Straight")}
          >
            <SwapImage src={SilkStraight} alt={getTranslation("straight_hair", "Straight Hair Type")} />
            <div className="HairType-label">
              <img src={StraightIcon} alt={getTranslation("straight_icon", "Straight Icon")} />
              <div>
                <h6>{getTranslation("straight", "Straight")}</h6>
                <p>
                  {/* {activeTab === "Straight" &&
                    (straightValue === 0
                      ? getTranslation("silk_straight", "Silk Straight")
                      : straightValue === 1
                      ? getTranslation("kinky_straight", "Kinky Straight")
                      : getTranslation("yaki_straight", "Yaki Straight"))} */}
                </p>
              </div>
            </div>
          </div>

          {/* Wavy Card */}
          <div
            className={`HairType-card ${activeTab === "Wavy" ? "HairType-card-active" : ""}`}
            onClick={() => handleCardClick("Wavy")}
          >
            <SwapImage src={DeepWave} alt={getTranslation("wavy_hair", "Wavy Hair Type")} />
            <div className="HairType-label">
              <img src={WavyIcon} alt={getTranslation("wavy_icon", "Wavy Icon")} />
              <div>
                <h6>{getTranslation("wavy", "Wavy")}</h6>
                <p>
                  {/* {activeTab === "Wavy" &&
                    (wavyValue === 0
                      ? getTranslation("deep_wave", "Deep Wave")
                      : wavyValue === 1
                      ? getTranslation("body_wave", "Body Wave")
                      : getTranslation("water_wave", "Water Wave"))} */}
                </p>
              </div>
            </div>
          </div>

          {/* Curly Card */}
          <div
            className={`HairType-card ${activeTab === "Curly" ? "HairType-card-active" : ""}`}
            onClick={() => handleCardClick("Curly")}
          >
            <SwapImage src={Curly} alt={getTranslation("curly_hair", "Curly Hair Type")} />
            <div className="HairType-label">
              <img src={CurlyIcon} alt={getTranslation("curly_icon", "Curly Icon")} />
              <div>
                <h6>{getTranslation("curly", "Curly")}</h6>
                <p>
                  {/* {activeTab === "Curly" &&
                    (curlyValue === 0 ? getTranslation("curly", "Curly") : getTranslation("jerry_kinky_curl", "Jerry/Kinky Curl"))} */}
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
            <div className={`HairType-card ${activeTab === "Straight" ? "HairType-card-active" : ""}`}>
              <img src={SilkStraight} alt={getTranslation("straight_hair", "Straight Hair Type")} />
              <SliderButtons>
                <div className="HairType-label">
                  <img src={StraightIcon} alt={getTranslation("straight_icon", "Straight Icon")} />
                  <div>
                    <h6>{getTranslation("straight", "Straight")}</h6>
                    <p>
                      {/* {activeTab === "Straight" &&
                        (straightValue === 0
                          ? getTranslation("silk_straight", "Silk Straight")
                          : straightValue === 1
                          ? getTranslation("kinky_straight", "Kinky Straight")
                          : getTranslation("yaki_straight", "Yaki Straight"))} */}
                    </p>
                  </div>
                </div>
              </SliderButtons>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={`HairType-card ${activeTab === "Wavy" ? "HairType-card-active" : ""}`}>
              <img src={DeepWave} alt={getTranslation("wavy_hair", "Wavy Hair Type")} />
              <SliderButtons>
                <div className="HairType-label">
                  <img src={WavyIcon} alt={getTranslation("wavy_icon", "Wavy Icon")} />
                  <div>
                    <h6>{getTranslation("wavy", "Wavy")}</h6>
                    <p>
                      {/* {activeTab === "Wavy" &&
                        (wavyValue === 0
                          ? getTranslation("deep_wave", "Deep Wave")
                          : wavyValue === 1
                          ? getTranslation("body_wave", "Body Wave")
                          : getTranslation("water_wave", "Water Wave"))} */}
                    </p>
                  </div>
                </div>
              </SliderButtons>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={`HairType-card ${activeTab === "Curly" ? "HairType-card-active" : ""}`}>
              <img src={Curly} alt={getTranslation("curly_hair", "Curly Hair Type")} />
              <SliderButtons>
                <div className="HairType-label">
                  <img src={CurlyIcon} alt={getTranslation("curly_icon", "Curly Icon")} />
                  <div>
                    <h6>{getTranslation("curly", "Curly")}</h6>
                    <p>
                      {/* {activeTab === "Curly" &&
                        (curlyValue === 0 ? getTranslation("curly", "Curly") : getTranslation("jerry_kinky_curl", "Jerry/Kinky Curl"))} */}
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
            <p>{getTranslation("straight_description_smooth", "Straight: Smooth unprocessed hair with beautiful natural shine. The hair can easily swell when wet.")}</p>            </div>
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
            <p>{getTranslation("wave_description_flowing", "Wave: Wavy hair flowing from the root to the top. More defined and wavy than body wave. This texture can be styled to determine the intensity of the waves.")}</p>            </div>
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
            <p>{getTranslation("curly_description_nappy", "Curly: Nappy hair that is extremely thick and resistant. The structure resembles Afro-American hair.")}</p>            </div>
          </CSSTransition>
        )}
      </div>
    </section>
  );
};

export default HairType;