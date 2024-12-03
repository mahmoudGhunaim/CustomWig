import React, { useState } from "react";
import "./HairColor.css";
import alert from "./assets/alert.svg";
import hairColorBasic from "./assets/hairColorBasic.jpg";
import { brown } from "@mui/material/colors";

import plus from "./assets/plus.svg";
import check_circle from "./assets/check-circle.svg";
import hairG from "./assets/hairG.png"
import pluscircle from "./assets/plus-circle.png";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
const marks = [
  {
    value: 10,
    label: "10%",
  },
  
  {
    value: 20,
    label: "20%",
  },
  {
    value: 30,
    label: "30%",
  },
  {
    value: 40,
    label: "40%",
  },
  {
    value: 50,
    label: "50%",
  },{
    value: 60,
    label: "60%",
  },
  {
    value: 70,
    label: "70%",
  },
  {
    value: 80,
    label: "80%",
  },
  {
    value: 90,
    label: "90%",
  },

];
const valuetext = (value) => {
  return `${value} %`;
};
const HairColor = ({ setSelectedColors, selectedColors,colorGradient,setcolorGradient,setSelectedPrice,selectedPrice,setSelectedNameColors,selectedNameColors }) => {
  const [activeTab, setActiveTab] = useState("hairColor");

  const [activeFilter, setActiveFilter] = useState("black");
  const handleSliderChange = (event, newValue) => {
    setcolorGradient(newValue);
  };
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setActiveFilter("black"); // Reset filter when changing tab
  };
  const handleColorSelect = (tab, color) => {
    setSelectedColors((prev) => ({
      ...prev,
      [tab]: color,
      
    }));
  };
    const handlePriceSelect = (tab, price) => {
      setSelectedPrice((prev) => ({
        ...prev,
        [tab]: price,
        
      }));
  };
  const handleColorNameSelect = (tab, name) => {
    setSelectedNameColors((prev) => ({
      ...prev,
      [tab]: name,
      
    }));
  };

  const colorOptions = {
    hairColor: {
      black: [
        { id: "#01", name: "Jet black", color: "#000000" ,price:0},
        { id: "#1B", name: "Off black", color: "#3B3B3B" ,price:0},
      ],
      brown: [
        { id: "#02", name: "Darkest brown", color: "#3B3B3B" ,price:0},
        { id: "#03", name: "Medium dark brown", color: "#482D1F" ,price:0},
        { id: "#06", name: "Chestnut brown", color: "#7B5C4D" ,price:0 },
        { id: "#08", name: "Medium ash brown", color: "#A56A43" ,price:20 },
        { id: "#04", name: "Medium reddish brown", color: "#C35831",price:20 },
        { id: "#10", name: "Medium golden brown", color: "#A86A4D" ,price:20},
        { id: "#12", name: "Light golden brown", color: "#D9B88A" ,price:20},
        { id: "#14", name: "Light ash brown", color: "#B08B64" ,price:20},
      ],
      blonde: [
        { id: "#16", name: "Dark honey blonde", color: "#D6C16D" ,price:20},
        { id: "#27", name: "Honey blonde", color: "#F0B23D" ,price:20},
        { id: "#18", name: "Nerz blonde", color: "#C69C5C" ,price:20},
        { id: "#144", name: "Bright pumpkin gold blonde", color: "#DFAF3F" ,price:20},
        { id: "#22", name: "Light ash blonde", color: "#B5A89D" ,price:20},
        { id: "#60", name: "White blonde", color: "#FFFFFF" ,price:20},
        { id: "#613", name: "Platinum blonde", color: "#E5E4E2" ,price:20},
      ],
      red: [
        { id: "#99J", name: "Mahagoni red", color: "#4A0D0D",price:20 },
        { id: "#350", name: "Ginger red", color: "#D76E38" ,price:20},
        { id: "#30", name: "Auburn red", color: "#A52A2A" ,price:20},
        { id: "#135", name: "Fiery red", color: "#FF4500" ,price:20},
        { id: "#F", name: "Fucsia red", color: "#D5006D" ,price:20},
        { id: "#P", name: "Pink red", color: "#FF1493" ,price:20},
        { id: "#33", name: "Cooper red", color: "#a05436" ,price:20},
        { id: "#B", name: "Burgundy red", color: "#800020" ,price:20},
      ],
      more: [
        { id: "#N", name: "Natural", color: "#000000" },
        { id: "#PU", name: "Purple", color: "#800080" ,price:20},
        { id: "#O", name: "Orange", color: "#FFA500" ,price:20},
        { id: "#S", name: "Silver", color: "#C0C0C0" ,price:20},
        { id: "#BL", name: "Blue", color: "#0000FF" ,price:20},
        { id: "#G", name: "Green", color: "#008000" ,price:20},
      ],
    },
    colorGradient: {
      black: [
        { id: "#01", name: "Jet black", color: "#000000" ,price:80},
        { id: "#1B", name: "Off black", color: "#3B3B3B" ,price:80},
      ],
      brown: [
        { id: "#02", name: "Darkest brown", color: "#3B3B3B" ,price:80},
        { id: "#03", name: "Medium dark brown", color: "#482D1F" ,price:80},
        { id: "#06", name: "Chestnut brown", color: "#7B5C4D" ,price:80},
        { id: "#08", name: "Medium ash brown", color: "#A56A43" ,price:80},
        { id: "#04", name: "Medium reddish brown", color: "#C35831" ,price:80},
        { id: "#10", name: "Medium golden brown", color: "#A86A4D" ,price:80},
        { id: "#12", name: "Light golden brown", color: "#D9B88A" ,price:80},
        { id: "#14", name: "Light ash brown", color: "#B08B64" ,price:80},
      ],
      blonde: [
        { id: "#16", name: "Dark honey blonde", color: "#D6C16D" ,price:80},
        { id: "#27", name: "Honey blonde", color: "#F0B23D" ,price:80},
        { id: "#18", name: "Nerz blonde", color: "#C69C5C" ,price:80},
        { id: "#144", name: "Bright pumpkin gold blonde", color: "#DFAF3F" ,price:80},
        { id: "#22", name: "Light ash blonde", color: "#B5A89D" ,price:80},
        { id: "#60", name: "White blonde", color: "#FFFFFF" ,price:80},
        { id: "#613", name: "Platinum blonde", color: "#E5E4E2" ,price:80},
      ],
      red: [
        { id: "#99J", name: "Mahagoni red", color: "#4A0D0D" ,price:80},
        { id: "#350", name: "Ginger red", color: "#D76E38" ,price:80},
        { id: "#30", name: "Auburn red", color: "#A52A2A" ,price:80},
        { id: "#135", name: "Fiery red", color: "#FF4500" ,price:80},
        { id: "#F", name: "Fucsia red", color: "#D5006D" ,price:80},
        { id: "#P", name: "Pink red", color: "#FF1493" ,price:80},
        { id: "#33", name: "Cooper red", color: "#a05436" ,price:80},
        { id: "#B", name: "Burgundy red", color: "#800020" ,price:80},
      ],
      more: [
        { id: "#N", name: "Natural", color: "#000000" ,price:80},
        { id: "#PU", name: "Purple", color: "#800080" ,price:80},
        { id: "#O", name: "Orange", color: "#FFA500" ,price:80},
        { id: "#S", name: "Silver", color: "#C0C0C0" ,price:80},
        { id: "#BL", name: "Blue", color: "#0000FF" ,price:80},
        { id: "#G", name: "Green", color: "#008000" ,price:80},
      ],
    },
    highlight: {
      black: [
        { id: "#01", name: "Jet black", color: "#000000" ,price:80},
        { id: "#1B", name: "Off black", color: "#3B3B3B" ,price:80},
      ],
      brown: [
        { id: "#02", name: "Darkest brown", color: "#3B3B3B" ,price:80},
        { id: "#03", name: "Medium dark brown", color: "#482D1F" ,price:80},
        { id: "#06", name: "Chestnut brown", color: "#7B5C4D" ,price:80},
        { id: "#08", name: "Medium ash brown", color: "#A56A43" ,price:80},
        { id: "#04", name: "Medium reddish brown", color: "#C35831" ,price:80},
        { id: "#10", name: "Medium golden brown", color: "#A86A4D" ,price:80},
        { id: "#12", name: "Light golden brown", color: "#D9B88A" ,price:80},
        { id: "#14", name: "Light ash brown", color: "#B08B64" ,price:80},
      ],
      blonde: [
        { id: "#16", name: "Dark honey blonde", color: "#D6C16D" ,price:80},
        { id: "#27", name: "Honey blonde", color: "#F0B23D" ,price:80},
        { id: "#18", name: "Nerz blonde", color: "#C69C5C" ,price:80},
        { id: "#144", name: "Bright pumpkin gold blonde", color: "#DFAF3F" ,price:80},
        { id: "#22", name: "Light ash blonde", color: "#B5A89D" ,price:80},
        { id: "#60", name: "White blonde", color: "#FFFFFF" ,price:80},
        { id: "#613", name: "Platinum blonde", color: "#E5E4E2" ,price:80},
      ],
      red: [
        { id: "#99J", name: "Mahagoni red", color: "#4A0D0D" ,price:80},
        { id: "#350", name: "Ginger red", color: "#D76E38" ,price:80},
        { id: "#30", name: "Auburn red", color: "#A52A2A" ,price:80},
        { id: "#135", name: "Fiery red", color: "#FF4500" ,price:80},
        { id: "#F", name: "Fucsia red", color: "#D5006D" ,price:80},
        { id: "#P", name: "Pink red", color: "#FF1493" ,price:80},
        { id: "#33", name: "Cooper red", color: "#a05436" ,price:80},
        { id: "#B", name: "Burgundy red", color: "#800020" ,price:80},
      ],
      more: [
        { id: "#N", name: "Natural", color: "#000000" ,price:80},
        { id: "#PU", name: "Purple", color: "#800080" ,price:80},
        { id: "#O", name: "Orange", color: "#FFA500" ,price:80},
        { id: "#S", name: "Silver", color: "#C0C0C0" ,price:80},
        { id: "#BL", name: "Blue", color: "#0000FF" ,price:80},
        { id: "#G", name: "Green", color: "#008000" ,price:80},
      ],
    },
  };
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };
  return (
    <section className="HairColor-sec">
      <div className="HairColor-container" id="Haircolor">
        <div className="HairColor-head">
          <h2>Hair Color</h2>
        </div>
        <div className="HairColor-alert">
          <img src={alert} />
          <p>
            Please note that the colors shown can be displayed differently
            depending on the output device used and only serve as orientation.
            Our pattern color ring provides an accurate representation of the
            hair colors.
          </p>
        </div>
        <div className="HairColor-image">
          <img src={hairColorBasic} />
          <svg
            width="1290"
            height="467"
            viewBox="0 0 1290 467"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="haircolor"
          >
            <path
              d="M1060 54C1070.4 42 1074.67 13.3333 1075.5 0.5H0V467H870L854 453C850.667 429.833 849.2 379.7 870 364.5C896 345.5 886.5 335.5 877.5 329C870.3 323.8 874.5 314.833 877.5 311L886.5 293L910.5 287.5L893 273V257L897 243C901.5 241 911.8 236.7 917 235.5C923.5 234 932.5 216 932.5 204C932.5 192 917 186 910.5 179C904 172 903.5 135 917 127C930.5 119 1047 69 1060 54Z"
              fill="url(#paint0_linear_2_6)"
            />
            <path
              d="M1099 46.5C1089.5 44 1062.5 18 1061 14.5L1052.5 0H1290V204.5C1283 197.667 1256.1 180 1250.5 178C1243.5 175.5 1232 130 1222 120C1214 112 1198.67 110.667 1192 111C1178.5 98.6667 1150.4 71.5 1146 61.5C1140.5 49 1134 46.5 1129 43.5C1124 40.5 1108.5 49 1099 46.5Z"
              fill="url(#paint1_linear_2_6)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2_6"
                x1="4.16738e-08"
                y1="216.412"
                x2="1075.47"
                y2="207.468"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.794454" stop-color={selectedColors.hairColor} />
                <stop offset="1" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_2_6"
                x1="1052.5"
                y1="93.0297"
                x2="1278.51"
                y2="92.113"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.794454" stop-color={selectedColors.hairColor} />
              </linearGradient>
            </defs>
          </svg>

          <svg
            className="hairlinearGradient"
            width="692"
            height="539"
            viewBox="0 0 692 539"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M429.475 262.5C370.675 280.1 142.899 321.167 19.0653 329.501C15.7319 326.001 149.2 286.501 238 268.501C332.5 249.345 422.5 225 560.565 233.001C549.898 237.001 488.275 244.9 429.475 262.5Z"
              fill={selectedColors.highlight}
            />
            <path
              d="M414.032 218.661C356.177 239.156 135.946 273.853 12.679 288.319C9.17617 284.988 132.242 252.343 220.039 229.96C313.473 206.14 448.112 182.087 560.385 168C549.929 172.524 471.886 198.166 414.032 218.661Z"
              fill={selectedColors.highlight}
            />
            <path
              d="M430.641 165.73C368.786 177.974 140.272 225.415 16.0415 229.207C12.9693 224.495 139.038 193.263 229 175C324.737 155.565 532.739 117.128 646 112.5C635.06 117.069 500 152.001 430.641 165.73Z"
              fill={selectedColors.highlight}
            />
            <path
              d="M436 113C383.5 121 148.333 137.167 24.4998 145.5C21.1664 142 161.7 105.5 250.5 87.5001C339.3 69.5001 562 54.9996 691.5 55C680.833 59 464.175 108.707 436 113Z"
              fill={selectedColors.highlight}
            />
            <path
              d="M411.558 49.7734C359.058 57.7734 123.892 73.94 0.0582317 82.2733C-3.2751 78.7733 137.258 42.2733 226.058 24.2733C314.858 6.27332 460.558 -7.72656 579.558 4.77333C568.891 8.77333 439.733 45.4801 411.558 49.7734Z"
              fill={selectedColors.highlight}
            />
            <path
              d="M410.475 309C351.675 326.6 123.899 367.666 0.0655035 376C-3.26783 372.5 164.2 327 253 309C347.5 289.844 426.435 248 561 255.5C550.333 259.5 469.275 291.4 410.475 309Z"
              fill={selectedColors.highlight}
            />
            <path
              d="M412.5 367.5C353.7 385.1 123.899 413.667 0.0655265 422C-3.26781 418.5 166.7 376.5 255.5 358.5C350 339.345 440.232 337.5 553.065 329C542.399 333 471.3 349.9 412.5 367.5Z"
              fill={selectedColors.highlight}
            />
            <path
              d="M417.475 402C358.675 419.6 130.899 460.667 7.06554 469C3.73221 465.5 128.266 439 217.066 421C311.566 401.845 433.667 373.5 546.5 365C535.833 369 476.275 384.4 417.475 402Z"
              fill={selectedColors.highlight}
            />
            <path
              d="M410.475 433C351.675 450.6 123.899 491.667 0.065539 500C-3.26779 496.5 121.266 470 210.066 452C304.566 432.845 440.232 415.5 553.066 407C542.399 411 469.275 415.4 410.475 433Z"
              fill={selectedColors.highlight}
            />
            <path
              d="M410.475 472C351.675 489.6 123.899 530.667 0.065539 539C-3.26779 535.5 121.266 509 210.066 491C304.566 471.845 440.232 454.5 553.066 446C542.399 450 469.275 454.4 410.475 472Z"
              fill={selectedColors.highlight}
            />
          </svg>
          <svg
            width="860"
            height="469"
            viewBox="0 0 860 469"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="lasthear"
          >
            <path
              d="M785.5 469H0V0H839.5C838.667 2.83333 834.6 11.2 825 22C813 35.5 819 98.5 825 166C831 233.5 847.5 191 858.5 266.5C867.3 326.9 813.5 426.667 785.5 469Z"
              fill="url(#paint0_linear_5_13)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_5_13"
                x1="212.5"
                y1="289.5"
                x2="1015.5"
                y2="235"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  stop-color={selectedColors.colorGradient}
                  stop-opacity="0.51"
                />
                <stop
                  offset="1"
                  stop-color={selectedColors.colorGradient}
                  stop-opacity="0"
                />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/* Tabs for Categories */}
        <div className="HairColor-tabs">
          <button
            onClick={() => handleTabClick("hairColor")}
            className={`tab-button ${
              activeTab === "hairColor" ? "active" : ""
            }`}
          >
             {selectedColors.hairColor ? <div className="tab-button-color" style={{background:selectedColors.hairColor}}></div> :  <img src={pluscircle}/>} Hair color {selectedPrice.hairColor ? <h6>+{selectedPrice.hairColor} SAR</h6> :  ``}
          </button>
          <button
            onClick={() => handleTabClick("colorGradient")}
            className={`tab-button ${
              activeTab === "colorGradient" ? "active" : ""
            }`}
          >
           {selectedColors.colorGradient ? <div className="tab-button-color" style={{background:selectedColors.colorGradient}}></div> :  <img src={pluscircle}/>}  Color gradient {selectedPrice.colorGradient ? <h6>+{selectedPrice.colorGradient} SAR</h6> :  ``}
          </button>
          <button
            onClick={() => handleTabClick("highlight")}
            className={`tab-button ${
              activeTab === "highlight" ? "active" : ""
            }`}
          >
           {selectedColors.highlight ? <div className="tab-button-color" style={{background:selectedColors.highlight}}></div> :  <img src={pluscircle}/>} Highlight {selectedPrice.highlight ? <h6>+{selectedPrice.highlight} SAR</h6> :  ``}
          </button>
        </div>
        <div className="white-bg">
        {activeTab === "colorGradient" ? (
            <div className="colorGradient-container">
              
                <div className="colorGradient-container-des">
                  <h2>
                    <img src={colorGradient ? check_circle : plus} alt="icon" />
                    Ombre colour gradient  {colorGradient ? `- ${colorGradient}%` : ""}
                  </h2>
                  <p>Here you can optionally choose a Ombre gradient. The main color (hairline) blends into the hair gradient color (hair tips). Use the percentage slider to determine the position of the color transition.</p>
                  <Box className="HairDensity-Slider">
            <Slider
              aria-label="colorGradientSlider"
              value={colorGradient}
              getAriaValueText={valuetext}
              onChange={handleSliderChange} // Handle changes
              step={null} // No steps
              valueLabelDisplay="auto"
              marks={marks}
              min={10}
              max={90}
              sx={{
                color: "#131313", // Slider rail and track color
                "& .MuiSlider-thumb": {
                  backgroundColor: "#131313", // Customize thumb color
                  width: "55px",
                  height: "55px",
                  position: "relative",
                  "&:hover": {
                    boxShadow: "none", // No shadow on hover
                  },
                  "&::after": {
                    content: '"+"',
                    position: "absolute",
                    top: "-8px",
                    left: "32.5px",
                    transform: "translateX(-50%)",
                    fontSize: "45px",
                    color: "white", // Or any suitable color to stand out
                  },
                },
                "& .MuiSlider-track": {
                  backgroundColor: "#131313",
                },
                "& .MuiSlider-rail": {
                  backgroundColor: "#bbb", // Customize rail color
                },
                "& .MuiSlider-markLabel": {
                  top: "65px", // Set the top position for mark labels
                },
              }}
            />
          </Box>
                </div>
                <div className="colorGradient-hair">
                <img src={hairG}/>

                  <svg width="259" height="288" viewBox="0 0 259 288" fill="none" xmlns="http://www.w3.org/2000/svg" className="colorGradient-hair-Gradient">
                    <path d="M124.533 1.21836e-05H141.956C142.49 0.748459 143.311 0.512107 144.02 0.551499C152.144 1.03546 159.784 3.05007 167.138 6.70789C190.746 18.4298 209.491 35.1264 221.303 58.9866C224.873 66.201 228.106 73.5729 228.269 81.9015C228.438 90.2413 228.949 98.5699 229.084 106.91C229.135 109.982 230.006 112.34 232.07 114.698C238.901 122.492 244.838 130.911 247.666 141.079C250.342 150.697 249.633 159.661 241.875 166.999C241.47 167.382 241.155 167.866 240.857 168.339C238.777 171.58 239.238 174.529 242.218 176.932C243.904 178.294 245.439 179.79 246.699 181.563C250.083 186.346 249.875 190.95 246.097 195.429C245.625 195.992 245.057 196.583 244.86 197.252C241.796 207.894 243.01 219.818 253.794 227.725C257.252 230.257 258.59 233.296 258.893 237.111C259.973 250.949 253.237 261.917 245.743 273.042C243.213 269.925 240.857 267.156 238.664 264.264C237.63 262.896 236.483 262.44 234.824 262.66C229.742 263.341 226.104 266.002 224.108 270.662C221.73 276.222 221.196 282.046 222.321 288H221.196C220.786 287.797 220.392 287.544 219.959 287.404C213.719 285.35 209.463 281.382 207.956 274.832C207.084 271.033 207.332 267.207 207.894 263.374C208.22 261.163 210.205 258.304 209.001 257.06C207.736 255.749 204.616 256.261 202.317 255.924C190.083 254.123 179.187 249.593 171.085 239.869C160.903 227.652 158.137 213.178 158.733 197.742C158.778 196.509 159.503 195.924 160.324 195.294C164.681 191.963 168.381 187.995 171.411 183.437C182.425 166.87 185.939 148.159 186.912 128.727C186.985 127.303 186.17 127.033 185.118 126.758C179.395 125.272 175.172 121.676 171.788 117.011C166.75 110.072 163.821 102.205 162.039 93.8878C161.64 92.0308 161.038 91.1473 158.862 90.9447C151.508 90.2525 144.587 88.0185 138.262 84.1187C129.666 78.8176 123.245 71.5358 118.613 62.605C118.107 61.6259 117.938 60.0108 116.094 60.99C113.075 62.5938 109.1 70.9167 109.763 74.2876C110.359 77.3264 110.741 80.4046 110.764 83.4996C110.837 93.5783 107.869 102.155 98.6705 107.568C97.7597 108.103 96.8658 108.947 95.6233 108.339C101.752 99.656 102.224 87.9115 96.6634 82.9875C93.0539 91.4399 87.4092 98.5755 81.8375 105.75C80.8199 107.062 80.2802 108.395 80.089 110.061C79.3244 116.853 78.2955 123.623 77.5815 130.421C76.9743 136.184 75.4675 141.884 75.9679 147.725C76.7775 157.123 81.3034 164.979 86.6895 172.407C93.0483 181.18 100.621 188.822 108.881 195.806C109.651 196.459 110.466 196.982 110.539 198.231C111.231 210.128 110.101 221.709 103.927 232.204C97.0569 243.875 87.1 251.776 73.5054 253.498C56.4643 255.659 40.0418 259.638 24.4738 266.959C23.7091 267.319 22.9895 268.107 21.8931 267.668C22.1743 265.772 22.2249 263.932 21.91 262.058C20.6844 254.815 16.9456 248.794 12.7682 242.981C12.3409 242.39 11.745 241.478 11.2334 241.489C10.3169 241.501 10.1202 242.604 9.86154 243.391C8.42787 247.764 8.79331 252.283 8.82705 256.773C8.83267 257.713 9.22622 258.732 8.42224 259.891C5.85288 256.205 3.79514 252.536 2.547 248.512C-0.730771 237.967 -1.99578 227.708 6.13399 218.355C9.34991 214.652 9.72098 210.347 7.08415 205.603C1.38319 195.339 4.55976 182.21 13.932 175.153C22.8433 168.44 26.4191 159.267 25.795 148.361C25.4801 142.846 23.31 137.613 23.0738 132.042C22.5903 120.551 24.946 109.988 34.4757 102.633C40.469 98.0071 44.2416 92.2953 45.7933 85.1372C47.0808 79.2059 47.6318 73.1171 48.6775 67.1239C54.1142 35.9198 75.788 14.4794 106.733 9.62852C107.542 9.49909 108.386 9.63978 108.819 8.59871C110.59 4.33875 114.357 2.79121 118.399 1.55318C120.429 0.934164 122.638 1.06359 124.55 -0.00561523L124.533 1.21836e-05Z" fill="url(#paint0_linear_777_715)"/>
                    <defs>
                    <linearGradient id="paint0_linear_777_715" x1="129.512" y1="-0.00561523" x2="129.512" y2="288" gradientUnits="userSpaceOnUse">
                    <stop offset={colorGradient / 100}  stop-color={selectedColors.colorGradient} stop-opacity="0"/>
                    <stop offset={(colorGradient / 100) - 0.1} stop-color={selectedColors.colorGradient}/>
                    </linearGradient>
                    </defs>
                    </svg>

                </div>
            </div>
          ) : (<p style={{display:'none'}}></p> )}
          <div className="HairColor-filters">
            <button
              onClick={() => handleFilterChange("black")}
              className={activeFilter === "black" ? "filter-active" : ""}
            >
              Black
            </button>
            <button
              onClick={() => handleFilterChange("brown")}
              className={activeFilter === "brown" ? "filter-active" : ""}
            >
              Brown
            </button>
            <button
              onClick={() => handleFilterChange("blonde")}
              className={activeFilter === "blonde" ? "filter-active" : ""}
            >
              Blonde
            </button>
            <button
              onClick={() => handleFilterChange("red")}
              className={activeFilter === "red" ? "filter-active" : ""}
            >
              Red
            </button>
            <button
              onClick={() => handleFilterChange("more")}
              className={activeFilter === "more" ? "filter-active" : ""}
            >
              More
            </button>
          </div>

          {/* Color Options */}
          <div className="HairColor-colors">
            {Object.keys(colorOptions[activeTab]).map(
              (category) =>
                (activeFilter === "all" || activeFilter === category) &&
                colorOptions[activeTab][category].map((color) => (
                  <div
                    key={color.id}
                    className={`color-option ${
                      selectedColors[activeTab] === color.id ? "active" : ""
                    }`} // Apply active class
                    onClick={() => {
                      handleColorSelect(activeTab, color.color);
                      handlePriceSelect(activeTab, color.price);
                      handleColorNameSelect(activeTab, color.name);
                    }}
                  >
                     <h5 className={`${selectedColors.hairColor === color.color ? "colorr-active" : ""}`} style={{ backgroundColor: color.color }}>{color.id}</h5>
                    <h6>{color.name}</h6>
                  </div>
                ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HairColor;
