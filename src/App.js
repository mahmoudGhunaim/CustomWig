import "./App.css";
import React, { useState, useEffect } from "react"; // Ensure to import useState
import Header from "./header";
import Label from "./Label";
import Customize from "./customize";
import HairType from "./hair-type";
import HairLength from "./hair-length";
import HairDensity from "./hair-density";
import HairLace from "./hair-lace";
import LaceTone from "./lace-tone";
import PUedge from "./pu-edge";
import SilkTop from "./Silk-Top";
import BleachedKnots from "./bleached-knots";
import HairColor from "./Hair-Color";
import AlmostDone from "./almost-done";
import HeadMeasurements from "./head-measurements";
import CartHandler from "./CartHandler.js";

import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

const SliderButtons = ({ children }) => {
  const swiper = useSwiper();
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center",background:"#F9F9F9",padding:"20px 0"}}>
    <div className="btn-sliider">
      <button onClick={() => swiper.slidePrev()}>
        PREV
        <svg
          width="60"
          height="12"
          viewBox="0 0 60 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="59.3627"
            y1="6.00003"
            x2="5.56047"
            y2="6.00003"
            stroke="#000000"
            stroke-width="1.74359"
          />
          <path
            d="M6.55676 0.769236L6.55676 11.2308L0.57874 6.00001L6.55676 0.769236Z"
            fill="#000000"
          />
        </svg>
      </button>
      {children}
      <button onClick={() => swiper.slideNext()} className="">
        NEXT
        <svg
          width="60"
          height="12"
          viewBox="0 0 60 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.970703"
            y1="6.00003"
            x2="54.7729"
            y2="6.00003"
            stroke="white"
            stroke-width="1.74359"
          />
          <path
            d="M53.7765 11.2308V0.769226L59.7545 6L53.7765 11.2308Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
    </div>
  );
};

function App() {
  const [Density, setDensity] = useState(100); // State to track selected length
  const [colorGradient, setcolorGradient] = useState(null); // State to track selected length

  const [selectedColor, setSelectedColor] = useState(null);
  const [length, setLength] = useState(12); // Initial length state in inches
  const [isCm, setIsCm] = useState(false); // State to track whether to use inches or centimeters

  const [basePrice, setBasePrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [measurements, setMeasurements] = useState(
    window.innerWidth <= 1024
      ? {
          circumference: 21.0,
          frontToNape: 11.5,
          forehead: 12.5,
          head: 13.5,
          siteToSite: 11.0,
          neckWidth: 5.5,
        }
      : {
        circumference: 19.0,
        frontToNape: 10.5,
        forehead: 11.5,
        head: 12.5,
        siteToSite: 10.0,
        neckWidth: 5.0,
        }
  );

  const [lastSelected, setLastSelected] = useState();

  const [selectedCard, setSelectedCard] = React.useState(
    window.innerWidth <= 1024 ? "Front Lace-Wig" : null
  );
  const [lastSelectedTab, setLastSelectedTab] = React.useState({
    Front: 0,
    Full: 0,
    Silk: 0,
  });
  const [hairLace , setHairLace] = useState("Front Lace-Wig")
  const [selectedColors, setSelectedColors] = useState({
    hairColor: null, // Default color for hair color
    colorGradient: null, // Default color for color gradient
    highlight: null, // Default color for highlights
  });
  const [selectedPrice, setSelectedPrice] = useState({
    hairColor: null, // Default color for hair color
    colorGradient: null, // Default color for color gradient
    highlight: null, // Default color for highlights
  });
  const [selectedNameColors, setSelectedNameColors] = useState({
    hairColor: null, // Default color for hair color
    colorGradient: null, // Default color for color gradient
    highlight: null, // Default color for highlights
  });
  const [selectedOptions, setSelectedOptions] = useState([]);
  // const [selectedOptionsSilkTop, setSelectedOptionsSilkTop] = useState([]);
  const [selectedOptionsBK, setSelectedOptionsBK] = useState([]);

  useEffect(() => {
    fetchProductData();
  }, []);

  useEffect(() => {
    calculateTotalPrice();
  }, [
    basePrice,
    selectedColors,
    length,
    Density,
    selectedOptions,
    // selectedOptionsSilkTop,
    selectedOptionsBK,
    selectedPrice,
  ]);

  const calculateTotalPrice = () => {
    let total = basePrice;
    // Add addon prices
    if (selectedPrice.hairColor) {
      total += parseFloat(selectedPrice.hairColor);
    }
    if (selectedPrice.colorGradient) {
      total += parseFloat(selectedPrice.colorGradient);
    }
    if (selectedPrice.highlight) {
      total += parseFloat(selectedPrice.highlight);
    }
    // Add length price
    const lengthPrice = getPriceLength();
    if (lengthPrice !== "0 SAR") {
      total += parseFloat(lengthPrice.replace(" SAR", ""));
    }
    // Add density price
    const densityPrice = getPriceDensity();
    if (densityPrice !== "0 SAR") {
      total += parseFloat(densityPrice.replace(" SAR", ""));
    }
    // Add PU edge price
    const puEdgePrice = getPricePUedge();
    if (puEdgePrice !== "0 SAR") {
      total += parseFloat(puEdgePrice.replace(" SAR", ""));
    }
    // Add Silk Top price
    // const silkTopPrice = getPriceSilkTop();
    // if (silkTopPrice !== "0 SAR") {
    //   total += parseFloat(silkTopPrice.replace(" SAR", ""));
    // }
    // Add Bleached Knots price
    const bleachedKnotsPrice = getPriceBleachedKnots();
    if (bleachedKnotsPrice !== "0 SAR") {
      total += parseFloat(bleachedKnotsPrice.replace(" SAR", ""));
    }
    setTotalPrice(total);
  };
  const fetchProductData = async () => {
    // try {
    const response = await fetch("/wp-json/wc/v3/product-info/801");
    const data = await response.json();
    if (data.price) {
      setBasePrice(parseFloat(data.price));
    }
    // } catch (error) {
    // console.error('Error fetching product data:', error);
    // }
  };
  const getPriceLength = () => {
    const priceMap = {
      16: "+50 SAR",
      18: "+100 SAR",
      20: "+150 SAR",
      22: "+200 SAR",
      24: "+250 SAR",
      26: "+300 SAR",
      28: "+350 SAR",
      40: "+50 SAR",
      45: "+100 SAR",
      50: "+150 SAR",
      55: "+200 SAR",
      60: "+250 SAR",
      66: "+300 SAR",
      71: "+350 SAR",
    };
    return priceMap[length] || "0 SAR";
  };
  const getPriceDensity = () => {
    if (Density === 150) {
      return "+50 SAR";
    } else if (Density === 180) {
      return "+100 SAR";
    } else if (Density === 200) {
      return "+150 SAR";
    } 
    return "0 SAR"; // For 60% and 80%
  };
  const getPricePUedge = () => {
    if (selectedOptions.includes("Front") && selectedOptions.includes("Back")) {
      return "+60 SAR";
    } else if (
      selectedOptions.includes("Front") ||
      selectedOptions.includes("Back")
    ) {
      return "+30 SAR";
    }
    return "0 SAR";
  };
  // const getPriceSilkTop = () => {
  //   if (selectedOptionsSilkTop.includes("Silk-Top")) {
  //     return "+60 SAR";
  //   }
  //   return "0 SAR";
  // };
  const getPriceBleachedKnots = () => {
    if (selectedOptionsBK.includes("Bleached")) {
      return "+30 SAR";
    }
    return "0 SAR";
  };
  const cartHandler = (
    <CartHandler
      selectedColors={selectedColors}
      selectedNameColors={selectedNameColors}
      length={length}
      isCm={isCm}
      Density={Density}
      lastSelected={lastSelected}
      selectedCard={selectedCard}
      lastSelectedTab={lastSelectedTab}
      selectedColor={selectedColor}
      selectedOptions={selectedOptions}
      // selectedOptionsSilkTop={selectedOptionsSilkTop}
      selectedOptionsBK={selectedOptionsBK}
      measurements={measurements}
      basePrice={basePrice}
      totalPrice={totalPrice}
    />
  );
  return (
    <div className="body-page">
      <Swiper
        className="Page-stipper"
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        initialSlide={0}
        allowTouchMove={false}
      >
        {/* <SwiperSlide>
          <div className="Page-stipper-SwiperSlide-container">
            <Header
              CartHandlerComponent={cartHandler}
              totalPrice={totalPrice}
            />

            <SliderButtons />
          </div>
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <div className="Page-stipper-SwiperSlide-container">
            <Label
              selectedNameColors={selectedNameColors}
              selectedPrice={selectedPrice}
              getPriceBleachedKnots={getPriceBleachedKnots}
              // getPriceSilkTop={getPriceSilkTop}
              getPricePUedge={getPricePUedge}
              getPriceDensity={getPriceDensity}
              getPriceLength={getPriceLength}
              selectedOptions={selectedOptions}
              Density={Density}
              // selectedOptionsSilkTop={selectedOptionsSilkTop}
              selectedOptionsBK={selectedOptionsBK}
              selectedColor={selectedColor}
              length={length}
              isCm={isCm}
              measurements={measurements}
              lastSelected={lastSelected}
              selectedCard={selectedCard}
              lastSelectedTab={lastSelectedTab}
              selectedColors={selectedColors}
            />
            <SliderButtons />
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className="Page-stipper-SwiperSlide-container">
            <HairType
              lastSelected={lastSelected}
              setLastSelected={setLastSelected}
            />
            <SliderButtons />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Page-stipper-SwiperSlide-container">
            <HairColor
              selectedNameColors={selectedNameColors}
              setSelectedNameColors={setSelectedNameColors}
              setSelectedPrice={setSelectedPrice}
              selectedPrice={selectedPrice}
              lastSelected={lastSelected}
              selectedColors={selectedColors}
              setSelectedColors={setSelectedColors}
              colorGradient={colorGradient}
              setcolorGradient={setcolorGradient}
            />
            <SliderButtons />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Page-stipper-SwiperSlide-container">
            <HairLength
              length={length}
              setLength={setLength}
              isCm={isCm}
              setIsCm={setIsCm}
              lastSelected={lastSelected}
              getPriceLength={getPriceLength}
            />{" "}
            <SliderButtons />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Page-stipper-SwiperSlide-container">
            <HairDensity
              getPriceDensity={getPriceDensity}
              Density={Density}
              setDensity={setDensity}
              lastSelected={lastSelected}

            />{" "}
            <SliderButtons />
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="Page-stipper-SwiperSlide-container">
            <Customize />
            <SliderButtons />
          </div>
        </SwiperSlide> */}
        
        
        <SwiperSlide>
          <div className="Page-stipper-SwiperSlide-container">
            <HairLace
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
              hairLace={hairLace}
              setHairLace={setHairLace}
              lastSelectedTab={lastSelectedTab}
              setLastSelectedTab={setLastSelectedTab}
            />
            <SliderButtons />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Page-stipper-SwiperSlide-container">
            <LaceTone
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />{" "}
            <PUedge
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            getPricePUedge={getPricePUedge}

            />
            
              {selectedOptionsBK.length > 0 && (
          
          <BleachedKnots
            selectedCard={selectedCard}
            getPriceBleachedKnots={getPriceBleachedKnots}
            selectedOptionsBK={selectedOptionsBK}
            setSelectedOptionsBK={setSelectedOptionsBK}
          />
        
    )}
            <SliderButtons />
          </div>
        </SwiperSlide>
      
        <SwiperSlide>
          <div className="Page-stipper-SwiperSlide-container">
            <HeadMeasurements
              measurements={measurements}
              setMeasurements={setMeasurements}
            />
            <SliderButtons />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Page-stipper-SwiperSlide-container">
            <AlmostDone
              selectedPrice={selectedPrice}
              getPriceBleachedKnots={getPriceBleachedKnots}
              // getPriceSilkTop={getPriceSilkTop}
              getPricePUedge={getPricePUedge}
              getPriceDensity={getPriceDensity}
              getPriceLength={getPriceLength}
              selectedOptions={selectedOptions}
              Density={Density}
              // selectedOptionsSilkTop={selectedOptionsSilkTop}
              selectedOptionsBK={selectedOptionsBK}
              selectedColor={selectedColor}
              length={length}
              isCm={isCm}
              measurements={measurements}
              lastSelected={lastSelected}
              selectedCard={selectedCard}
              lastSelectedTab={lastSelectedTab}
              selectedColors={selectedColors}
              selectedNameColors={selectedNameColors}
              CartHandlerComponent={cartHandler}
              totalPrice={totalPrice}
              hairLace={hairLace}
              setHairLace={setHairLace}
            />
            <SliderButtons />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <SilkTop
        getPriceSilkTop={getPriceSilkTop}
        selectedOptionsSilkTop={selectedOptionsSilkTop}
        setSelectedOptionsSilkTop={setSelectedOptionsSilkTop}
      /> */}
    </div>
  );
}

export default App;
