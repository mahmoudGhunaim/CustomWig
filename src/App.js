import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"; // Ensure to import useState
import Header from './header';
import Label from './Label';
import Customize from './customize';
import HairType from './hair-type';
import HairLength from './hair-length';
import HairDensity from './hair-density';
import HairLace from './hair-lace';
import LaceTone from './lace-tone';
import PUedge from './pu-edge';
import SilkTop from './Silk-Top';
import BleachedKnots from './bleached-knots';
import HairColor from './Hair-Color';
import AlmostDone from './almost-done';
import HeadMeasurements from './head-measurements'
function App() {
  const [Density, setDensity] = useState(60); // State to track selected length
  const [colorGradient, setcolorGradient] = useState(null); // State to track selected length

  const [selectedColor, setSelectedColor] = useState(null);
  const [length, setLength] = useState(12); // Initial length state in inches
  const [isCm, setIsCm] = useState(false);  // State to track whether to use inches or centimeters
  const [measurements, setMeasurements] = useState({
    circumference: null,
    frontToNape: null,
    forehead: null,
    head: null,
    siteToSite: null,
    neckWidth: null,
  });
  const [lastSelected, setLastSelected] = useState(
    window.innerWidth <= 1024 ? {
      type: "Straight",
      index: 0,
    } : {
      type: "",
      index: 0,
    }
  );

  const [selectedCard, setSelectedCard] = React.useState(window.innerWidth <= 1024 ? "Front" : null);
  const [lastSelectedTab, setLastSelectedTab] = React.useState({
    Front: 0,
    Full: 0,
    Silk: 0,
  });

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
  const [selectedOptionsSilkTop, setSelectedOptionsSilkTop] = useState([]);
  const [selectedOptionsBK, setSelectedOptionsBK] = useState([]);


  const getPriceLength = () => {
    const priceMap = {
        16: '+50 SAR',
        18: '+100 SAR',
        20: '+150 SAR',
        22: '+200 SAR',
        24: '+250 SAR',
        26: '+300 SAR',
        28: '+350 SAR',
        40: '+50 SAR',
        45: '+100 SAR',
        50: '+150 SAR',
        55: '+200 SAR',
        60: '+250 SAR',
        66: '+300 SAR',
        71: '+350 SAR',
        
    };
    return priceMap[length] || '0 SAR'; 
};
const getPriceDensity = () => {
  if (Density === 90) {
    return '+50 SAR';
  } else if (Density === 100) {
    return '+100 SAR';
  } else if (Density === 120) {
    return '+150 SAR';
  } else if (Density === 150) {
    return '+200 SAR';
  }
  return '0 SAR'; // For 60% and 80%
};
const getPricePUedge = () => {
  if (selectedOptions.includes('Front') && selectedOptions.includes('Back')) {
    return '+60 SAR';
  } else if (selectedOptions.includes('Front') || selectedOptions.includes('Back')) {
    return '+30 SAR';
  } 
  return '0 SAR';
};
const getPriceSilkTop = () => {
  if (selectedOptionsSilkTop.includes('Silk-Top')) {
    return '+60 SAR';
  }
  return '0 SAR';
};
const getPriceBleachedKnots = () => {
  if (selectedOptionsBK.includes('Bleached')) {
    return '+30 SAR';
  }
  return '0 SAR';
};
  return (
    <React.Fragment>
      <Header/>
      <Label selectedNameColors={selectedNameColors} selectedPrice={selectedPrice} getPriceBleachedKnots={getPriceBleachedKnots} getPriceSilkTop={getPriceSilkTop} getPricePUedge={getPricePUedge} getPriceDensity={getPriceDensity} getPriceLength={getPriceLength} selectedOptions={selectedOptions} Density={Density} selectedOptionsSilkTop={selectedOptionsSilkTop} selectedOptionsBK={selectedOptionsBK}  selectedColor={selectedColor} length={length} isCm={isCm} measurements={measurements} lastSelected={lastSelected} selectedCard={selectedCard} lastSelectedTab={lastSelectedTab} selectedColors={selectedColors} />
      <Customize />
      <HairColor selectedNameColors={selectedNameColors} setSelectedNameColors={setSelectedNameColors} setSelectedPrice={setSelectedPrice} selectedPrice={selectedPrice} selectedColors={selectedColors} setSelectedColors={setSelectedColors} colorGradient={colorGradient} setcolorGradient={setcolorGradient}/>
      <HairType  lastSelected={lastSelected} setLastSelected={setLastSelected}/> 
      <HairLength length={length} setLength={setLength} isCm={isCm} setIsCm={setIsCm} lastSelected={lastSelected} getPriceLength={getPriceLength}/>
      <HairDensity getPriceDensity={getPriceDensity} Density={Density} setDensity={setDensity}/>
      <HairLace selectedCard={selectedCard} setSelectedCard={setSelectedCard} lastSelectedTab={lastSelectedTab} setLastSelectedTab={setLastSelectedTab}/>
      <LaceTone selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
      <PUedge getPricePUedge={getPricePUedge} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions}/>
      <SilkTop getPriceSilkTop={getPriceSilkTop} selectedOptionsSilkTop={selectedOptionsSilkTop} setSelectedOptionsSilkTop={setSelectedOptionsSilkTop}/>
      <BleachedKnots getPriceBleachedKnots={getPriceBleachedKnots} selectedOptionsBK={selectedOptionsBK} setSelectedOptionsBK={setSelectedOptionsBK}/>
      <HeadMeasurements measurements={measurements} setMeasurements={setMeasurements}/>
      <AlmostDone selectedPrice={selectedPrice} getPriceBleachedKnots={getPriceBleachedKnots} getPriceSilkTop={getPriceSilkTop} getPricePUedge={getPricePUedge} getPriceDensity={getPriceDensity} getPriceLength={getPriceLength}  selectedOptions={selectedOptions} Density={Density} selectedOptionsSilkTop={selectedOptionsSilkTop} selectedOptionsBK={selectedOptionsBK}  selectedColor={selectedColor} length={length} isCm={isCm} measurements={measurements} lastSelected={lastSelected} selectedCard={selectedCard} lastSelectedTab={lastSelectedTab} selectedColors={selectedColors} />
    </React.Fragment>
  );
}

export default App;
