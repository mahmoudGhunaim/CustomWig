import React, { useState } from "react";
import "./HairColor.css";
import alert from "./assets/alert.svg";
import hairColorBasic from "./assets/hairColorBasic.jpg";
import hairColorBasic2 from "./assets/image_fx_ (1) 1 1.png";
import { brown } from "@mui/material/colors";
import getTranslation from "./utils/translations";

import plus from "./assets/plus.svg";
import check_circle from "./assets/check-circle.svg";
import hairG from "./assets/hairG.png";
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
  },
  {
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
const HairColor = ({
  setSelectedColors,
  selectedColors,
  colorGradient,
  setcolorGradient,
  setSelectedPrice,
  selectedPrice,
  setSelectedNameColors,
  selectedNameColors,
}) => {
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
        {
          id: "#01",
          name: getTranslation("jet_black", "Jet black"),
          color: "#000000",
          price: 0,
        },
        {
          id: "#1B",
          name: getTranslation("off_black", "Off black"),
          color: "#3B3B3B",
          price: 0,
        },
      ],
      brown: [
        {
          id: "#02",
          name: getTranslation("darkest_brown", "Darkest brown"),
          color: "#3B3B3B",
          price: 0,
        },
        {
          id: "#03",
          name: getTranslation("medium_dark_brown", "Medium dark brown"),
          color: "#482D1F",
          price: 0,
        },
        {
          id: "#06",
          name: getTranslation("chestnut_brown", "Chestnut brown"),
          color: "#7B5C4D",
          price: 0,
        },
        {
          id: "#08",
          name: getTranslation("medium_ash_brown", "Medium ash brown"),
          color: "#A56A43",
          price: 20,
        },
        {
          id: "#04",
          name: getTranslation("medium_reddish_brown", "Medium reddish brown"),
          color: "#C35831",
          price: 20,
        },
        {
          id: "#10",
          name: getTranslation("medium_golden_brown", "Medium golden brown"),
          color: "#A86A4D",
          price: 20,
        },
        {
          id: "#12",
          name: getTranslation("light_golden_brown", "Light golden brown"),
          color: "#D9B88A",
          price: 20,
        },
        {
          id: "#14",
          name: getTranslation("light_ash_brown", "Light ash brown"),
          color: "#B08B64",
          price: 20,
        },
      ],
      blonde: [
        {
          id: "#16",
          name: getTranslation("dark_honey_blonde", "Dark honey blonde"),
          color: "#D6C16D",
          price: 20,
        },
        {
          id: "#27",
          name: getTranslation("honey_blonde", "Honey blonde"),
          color: "#F0B23D",
          price: 20,
        },
        {
          id: "#18",
          name: getTranslation("nerz_blonde", "Nerz blonde"),
          color: "#C69C5C",
          price: 20,
        },
        {
          id: "#144",
          name: getTranslation(
            "bright_pumpkin_gold_blonde",
            "Bright pumpkin gold blonde"
          ),
          color: "#DFAF3F",
          price: 20,
        },
        {
          id: "#22",
          name: getTranslation("light_ash_blonde", "Light ash blonde"),
          color: "#B5A89D",
          price: 20,
        },
        {
          id: "#60",
          name: getTranslation("white_blonde", "White blonde"),
          color: "#FFFFFF",
          price: 20,
        },
        {
          id: "#613",
          name: getTranslation("platinum_blonde", "Platinum blonde"),
          color: "#E5E4E2",
          price: 20,
        },
      ],
      red: [
        {
          id: "#99J",
          name: getTranslation("mahagoni_red", "Mahagoni red"),
          color: "#4A0D0D",
          price: 20,
        },
        {
          id: "#350",
          name: getTranslation("ginger_red", "Ginger red"),
          color: "#D76E38",
          price: 20,
        },
        {
          id: "#30",
          name: getTranslation("auburn_red", "Auburn red"),
          color: "#A52A2A",
          price: 20,
        },
        {
          id: "#135",
          name: getTranslation("fiery_red", "Fiery red"),
          color: "#FF4500",
          price: 20,
        },
        {
          id: "#F",
          name: getTranslation("fucsia_red", "Fucsia red"),
          color: "#D5006D",
          price: 20,
        },
        {
          id: "#P",
          name: getTranslation("pink_red", "Pink red"),
          color: "#FF1493",
          price: 20,
        },
        {
          id: "#33",
          name: getTranslation("cooper_red", "Cooper red"),
          color: "#a05436",
          price: 20,
        },
        {
          id: "#B",
          name: getTranslation("burgundy_red", "Burgundy red"),
          color: "#800020",
          price: 20,
        },
      ],
      more: [
        {
          id: "#N",
          name: getTranslation("natural", "Natural"),
          color: "#000000",
          price: 0,
        },
        {
          id: "#PU",
          name: getTranslation("purple", "Purple"),
          color: "#800080",
          price: 20,
        },
        {
          id: "#O",
          name: getTranslation("orange", "Orange"),
          color: "#FFA500",
          price: 20,
        },
        {
          id: "#S",
          name: getTranslation("silver", "Silver"),
          color: "#C0C0C0",
          price: 20,
        },
        {
          id: "#BL",
          name: getTranslation("blue", "Blue"),
          color: "#0000FF",
          price: 20,
        },
        {
          id: "#G",
          name: getTranslation("green", "Green"),
          color: "#008000",
          price: 20,
        },
      ],
    },
    colorGradient: {
      black: [
        {
          id: "#01",
          name: getTranslation("jet_black", "Jet black"),
          color: "#000000",
          price: 80,
        },
        {
          id: "#1B",
          name: getTranslation("off_black", "Off black"),
          color: "#3B3B3B",
          price: 80,
        },
      ],
      brown: [
        {
          id: "#02",
          name: getTranslation("darkest_brown", "Darkest brown"),
          color: "#3B3B3B",
          price: 80,
        },
        {
          id: "#03",
          name: getTranslation("medium_dark_brown", "Medium dark brown"),
          color: "#482D1F",
          price: 80,
        },
        {
          id: "#06",
          name: getTranslation("chestnut_brown", "Chestnut brown"),
          color: "#7B5C4D",
          price: 80,
        },
        {
          id: "#08",
          name: getTranslation("medium_ash_brown", "Medium ash brown"),
          color: "#A56A43",
          price: 80,
        },
        {
          id: "#04",
          name: getTranslation("medium_reddish_brown", "Medium reddish brown"),
          color: "#C35831",
          price: 80,
        },
        {
          id: "#10",
          name: getTranslation("medium_golden_brown", "Medium golden brown"),
          color: "#A86A4D",
          price: 80,
        },
        {
          id: "#12",
          name: getTranslation("light_golden_brown", "Light golden brown"),
          color: "#D9B88A",
          price: 80,
        },
        {
          id: "#14",
          name: getTranslation("light_ash_brown", "Light ash brown"),
          color: "#B08B64",
          price: 80,
        },
      ],
      blonde: [
        {
          id: "#16",
          name: getTranslation("dark_honey_blonde", "Dark honey blonde"),
          color: "#D6C16D",
          price: 80,
        },
        {
          id: "#27",
          name: getTranslation("honey_blonde", "Honey blonde"),
          color: "#F0B23D",
          price: 80,
        },
        {
          id: "#18",
          name: getTranslation("nerz_blonde", "Nerz blonde"),
          color: "#C69C5C",
          price: 80,
        },
        {
          id: "#144",
          name: getTranslation(
            "bright_pumpkin_gold_blonde",
            "Bright pumpkin gold blonde"
          ),
          color: "#DFAF3F",
          price: 80,
        },
        {
          id: "#22",
          name: getTranslation("light_ash_blonde", "Light ash blonde"),
          color: "#B5A89D",
          price: 80,
        },
        {
          id: "#60",
          name: getTranslation("white_blonde", "White blonde"),
          color: "#FFFFFF",
          price: 80,
        },
        {
          id: "#613",
          name: getTranslation("platinum_blonde", "Platinum blonde"),
          color: "#E5E4E2",
          price: 80,
        },
      ],
      red: [
        {
          id: "#99J",
          name: getTranslation("mahagoni_red", "Mahagoni red"),
          color: "#4A0D0D",
          price: 80,
        },
        {
          id: "#350",
          name: getTranslation("ginger_red", "Ginger red"),
          color: "#D76E38",
          price: 80,
        },
        {
          id: "#30",
          name: getTranslation("auburn_red", "Auburn red"),
          color: "#A52A2A",
          price: 80,
        },
        {
          id: "#135",
          name: getTranslation("fiery_red", "Fiery red"),
          color: "#FF4500",
          price: 80,
        },
        {
          id: "#F",
          name: getTranslation("fucsia_red", "Fucsia red"),
          color: "#D5006D",
          price: 80,
        },
        {
          id: "#P",
          name: getTranslation("pink_red", "Pink red"),
          color: "#FF1493",
          price: 80,
        },
        {
          id: "#33",
          name: getTranslation("cooper_red", "Cooper red"),
          color: "#a05436",
          price: 80,
        },
        {
          id: "#B",
          name: getTranslation("burgundy_red", "Burgundy red"),
          color: "#800020",
          price: 80,
        },
      ],
      more: [
        {
          id: "#N",
          name: getTranslation("natural", "Natural"),
          color: "#000000",
          price: 80,
        },
        {
          id: "#PU",
          name: getTranslation("purple", "Purple"),
          color: "#800080",
          price: 80,
        },
        {
          id: "#O",
          name: getTranslation("orange", "Orange"),
          color: "#FFA500",
          price: 80,
        },
        {
          id: "#S",
          name: getTranslation("silver", "Silver"),
          color: "#C0C0C0",
          price: 80,
        },
        {
          id: "#BL",
          name: getTranslation("blue", "Blue"),
          color: "#0000FF",
          price: 80,
        },
        {
          id: "#G",
          name: getTranslation("green", "Green"),
          color: "#008000",
          price: 80,
        },
      ],
    },
    highlight: {
      black: [
        {
          id: "#01",
          name: getTranslation("jet_black", "Jet black"),
          color: "#000000",
          price: 80,
        },
        {
          id: "#1B",
          name: getTranslation("off_black", "Off black"),
          color: "#3B3B3B",
          price: 80,
        },
      ],
      brown: [
        {
          id: "#02",
          name: getTranslation("darkest_brown", "Darkest brown"),
          color: "#3B3B3B",
          price: 80,
        },
        {
          id: "#03",
          name: getTranslation("medium_dark_brown", "Medium dark brown"),
          color: "#482D1F",
          price: 80,
        },
        {
          id: "#06",
          name: getTranslation("chestnut_brown", "Chestnut brown"),
          color: "#7B5C4D",
          price: 80,
        },
        {
          id: "#08",
          name: getTranslation("medium_ash_brown", "Medium ash brown"),
          color: "#A56A43",
          price: 80,
        },
        {
          id: "#04",
          name: getTranslation("medium_reddish_brown", "Medium reddish brown"),
          color: "#C35831",
          price: 80,
        },
        {
          id: "#10",
          name: getTranslation("medium_golden_brown", "Medium golden brown"),
          color: "#A86A4D",
          price: 80,
        },
        {
          id: "#12",
          name: getTranslation("light_golden_brown", "Light golden brown"),
          color: "#D9B88A",
          price: 80,
        },
        {
          id: "#14",
          name: getTranslation("light_ash_brown", "Light ash brown"),
          color: "#B08B64",
          price: 80,
        },
      ],
      blonde: [
        {
          id: "#16",
          name: getTranslation("dark_honey_blonde", "Dark honey blonde"),
          color: "#D6C16D",
          price: 80,
        },
        {
          id: "#27",
          name: getTranslation("honey_blonde", "Honey blonde"),
          color: "#F0B23D",
          price: 80,
        },
        {
          id: "#18",
          name: getTranslation("nerz_blonde", "Nerz blonde"),
          color: "#C69C5C",
          price: 80,
        },
        {
          id: "#144",
          name: getTranslation(
            "bright_pumpkin_gold_blonde",
            "Bright pumpkin gold blonde"
          ),
          color: "#DFAF3F",
          price: 80,
        },
        {
          id: "#22",
          name: getTranslation("light_ash_blonde", "Light ash blonde"),
          color: "#B5A89D",
          price: 80,
        },
        {
          id: "#60",
          name: getTranslation("white_blonde", "White blonde"),
          color: "#FFFFFF",
          price: 80,
        },
        {
          id: "#613",
          name: getTranslation("platinum_blonde", "Platinum blonde"),
          color: "#E5E4E2",
          price: 80,
        },
      ],
      red: [
        {
          id: "#99J",
          name: getTranslation("mahagoni_red", "Mahagoni red"),
          color: "#4A0D0D",
          price: 80,
        },
        {
          id: "#350",
          name: getTranslation("ginger_red", "Ginger red"),
          color: "#D76E38",
          price: 80,
        },
        {
          id: "#30",
          name: getTranslation("auburn_red", "Auburn red"),
          color: "#A52A2A",
          price: 80,
        },
        {
          id: "#135",
          name: getTranslation("fiery_red", "Fiery red"),
          color: "#FF4500",
          price: 80,
        },
        {
          id: "#F",
          name: getTranslation("fucsia_red", "Fucsia red"),
          color: "#D5006D",
          price: 80,
        },
        {
          id: "#P",
          name: getTranslation("pink_red", "Pink red"),
          color: "#FF1493",
          price: 80,
        },
        {
          id: "#33",
          name: getTranslation("cooper_red", "Cooper red"),
          color: "#a05436",
          price: 80,
        },
        {
          id: "#B",
          name: getTranslation("burgundy_red", "Burgundy red"),
          color: "#800020",
          price: 80,
        },
      ],
      more: [
        {
          id: "#N",
          name: getTranslation("natural", "Natural"),
          color: "#000000",
          price: 80,
        },
        {
          id: "#PU",
          name: getTranslation("purple", "Purple"),
          color: "#800080",
          price: 80,
        },
        {
          id: "#O",
          name: getTranslation("orange", "Orange"),
          color: "#FFA500",
          price: 80,
        },
        {
          id: "#S",
          name: getTranslation("silver", "Silver"),
          color: "#C0C0C0",
          price: 80,
        },
        {
          id: "#BL",
          name: getTranslation("blue", "Blue"),
          color: "#0000FF",
          price: 80,
        },
        {
          id: "#G",
          name: getTranslation("green", "Green"),
          color: "#008000",
          price: 80,
        },
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
          <h2>{getTranslation("hair_color", "Hair Color")}</h2>
        </div>
        <div className="HairColor-alert">
          <img src={alert} alt={getTranslation("alert_icon", "Alert icon")} />
          <p>
            {getTranslation(
              "color_notice",
              "Please note that the colors shown can be displayed differently depending on the output device used and only serve as orientation. Our pattern color ring provides an accurate representation of the hair colors."
            )}
          </p>
        </div>
        <div className="HairColor-image">
          <img src={hairColorBasic2} style={{height:"570px" , width:"385px"}} />
          {/* <svg className="haircolor" width="459" height="732" viewBox="0 0 459 732" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g style={{ mixBlendMode: "overlay" }} opacity="0.8">
              <rect width="459" height="732" fill="url(#paint0_linear_1156_2440)"/>
              </g>
              <defs>
              <linearGradient id="paint0_linear_1156_2440" x1="229.5" y1="0" x2="229.5" y2="732" gradientUnits="userSpaceOnUse">
              <stop offset="0.5" stop-color={selectedColors.hairColor}/>
              <stop offset="0.5" stop-color={selectedColors.colorGradient} stop-opacity="0"/>
              </linearGradient>
              </defs>
              </svg> */}
              <div className="haircolor" 
                  style={{ 
                      background: selectedColors.colorGradient != null ? 
                          `linear-gradient(to top, ${selectedColors.colorGradient} ${colorGradient}%, ${selectedColors.hairColor} 0%)` : 
                          selectedColors.hairColor 
                  }}></div>
              <div className="hairhighlight1" style={{background:selectedColors.highlight}}></div>
              <div className="hairhighlight2" style={{background:selectedColors.highlight}}></div>
              <div className="hairhighlight3" style={{background:selectedColors.highlight}}></div>
              <div className="hairhighlight4" style={{background:selectedColors.highlight}}></div>
              <div className="hairhighlight5" style={{background:selectedColors.highlight}}></div>
            
              {/* <svg width="383" height="648" viewBox="0 0 383 648" className="haircolor" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g style={{ mixBlendMode: "overlay" }} opacity="0.4">
                <rect width="383" height="648" fill="url(#paint0_linear_1156_2408)"/>
                </g>
                <defs>
                <linearGradient id="paint0_linear_1156_2408" x1="191.5" y1="0" x2="191.5" y2="648" gradientUnits="userSpaceOnUse">
                <stop offset="0.43056" stop-color={selectedColors.highlight} stop-opacity="0"/>
                <stop offset="0.43056" stop-color={selectedColors.highlight}/>
                </linearGradient>
                </defs>
                </svg> */}

          {/* <svg
            className="haircolor"
            width="500"
            height="690"
            viewBox="0 0 500 690"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g style={{ mixBlendMode: "soft-light" }} opacity="0.8">
              <path
                d="M471.5 430.5C475.1 428.9 492 399.5 500 385C492.833 359.667 478 303.4 476 281C473.5 253 334 33.5 325 20.5C317.8 10.1 241.333 2.5 204 0L105.5 40L32.5 294.5L7.5 332.5L0.5 384L30 395L47 382L52 378.5L47 391.5C45.1667 391.333 40.8 391.1 38 391.5C35.2 391.9 40.1667 394 43 395C44.5 394.833 48.1 394.4 50.5 394C52.9 393.6 55.1667 396.5 56 398C56.6667 403.667 58 415.2 58 416C58 416.8 49.6667 424.333 45.5 428C42.1667 432.333 34.9 441.8 32.5 445C30.1 448.2 35.1667 457.333 38 461.5L45.5 467C49.1667 466.833 57.2 467 60 469C62.8 471 63.8333 475.5 64 477.5L72 497L73 504.5C75.8333 506.5 81.6 511.2 82 514C82.5 517.5 93.5 533.5 97.5 537C100.7 539.8 111.167 542.5 116 543.5L119.5 544.5L122 549C122.5 554 123.5 564.6 123.5 567C123.5 569.4 118.5 574.333 116 576.5C112.5 577.333 105.3 579 104.5 579C103.5 579 101 580 101 582C101 583.6 104 584.667 105.5 585L123.5 578L133 583C135.5 585.167 141.1 589.7 143.5 590.5C146.5 591.5 150 598.5 148 600C146 601.5 144.5 613.5 144.5 616C144.5 618 158.5 641.167 165.5 652.5L170.5 649L175 640C175.833 639.333 177.8 638.4 179 640C180.5 642 188 648 189 650.5C190 653 189 655.5 188 656.5C187.2 657.3 188.333 662.5 189 665H196.5L201 668.5L204 670.5L201 662.5L204 663.5L210 666L219.5 665L218 658C216.667 656.167 213.8 652.1 213 650.5C212.2 648.9 209.667 649.833 208.5 650.5L205.5 645.5C205.833 644.167 206.6 641.2 207 640C207.4 638.8 209.167 641.167 210 642.5C212.667 642.333 218.3 642.1 219.5 642.5C221 643 231 652.5 230.398 654C229.797 655.5 233 665 231 667C229.4 668.6 230.333 676.333 231 680C234 681.167 240.1 683.1 240.5 681.5C240.9 679.9 243 677.167 244 676C244.333 676.833 245.2 679.1 246 681.5C246.8 683.9 256.667 686.167 261.5 687L272 685.5V690C273.667 689.833 277 689.2 277 688V680L280.5 676C282.333 674.5 286.2 671.3 287 670.5C287.8 669.7 293.333 672.167 296 673.5L298.5 678.5C302.5 677.667 310.8 676 312 676C313.5 676 319 676 319 673.5C319 671.5 317.333 668.333 316.5 667L325 670.5C327.667 670.167 333.2 669.5 334 669.5C335 669.5 335 665.5 334 665C333 664.5 326.5 662.5 325 661C323.5 659.5 330 657.5 332 654C333.6 651.2 336.333 649.5 337.5 649L348 652.5L358.5 655.5C358.833 652.5 359.5 645.9 359.5 643.5C359.5 641.1 364.167 636.5 366.5 634.5C369.333 628.5 375.1 615.9 375.5 613.5C375.9 611.1 378.667 606.167 380 604C382.833 607 389.1 613.3 391.5 614.5C393.9 615.7 392.5 609.333 391.5 606C390.5 603.167 387.8 596.4 385 592C381.5 586.5 388.5 588.5 388.5 581.5C388.5 574.5 395.5 577 397 579C398.5 581 402.5 587.5 402.5 592C402.5 595.6 408.167 597.167 411 597.5C412.667 593.167 417.2 583.9 422 581.5C426.8 579.1 424 568.833 422 564C420.5 561.833 417.2 556.1 416 550.5C414.5 543.5 419.5 548.5 422 542C424 536.8 422.833 529.5 422 526.5L443.5 537C438.333 531 427.7 518.1 426.5 514.5C425.3 510.9 437.333 505.667 443.5 503.5C449.167 497.333 460.5 483.9 460.5 479.5C460.5 474 451 468 451.5 464C452 460 457.5 448.5 460.5 442.5C463.5 436.5 467 432.5 471.5 430.5Z"
                fill={selectedColors.hairColor}
              />
            </g>
          </svg> */}

          {/* <svg
            width="500"
            height="690"
            viewBox="0 0 547 738"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hairlinearGradient"
          >
            <g
              style={{ mixBlendMode: "soft-light" }}
              opacity="0.8"
              filter="url(#filter0_f_0_3)"
            >
              <path
                d="M494.5 454.5C498.1 452.9 515 423.5 523 409C515.833 383.667 501 327.4 499 305C496.5 277 357 57.5 348 44.5C340.8 34.1 264.333 26.5 227 24L128.5 64L55.5 318.5L30.5 356.5L23.5 408L53 419L70 406L75 402.5L70 415.5C68.1667 415.333 63.8 415.1 61 415.5C58.2 415.9 63.1667 418 66 419C67.5 418.833 71.1 418.4 73.5 418C75.9 417.6 78.1667 420.5 79 422C79.6667 427.667 81 439.2 81 440C81 440.8 72.6667 448.333 68.5 452C65.1667 456.333 57.9 465.8 55.5 469C53.1 472.2 58.1667 481.333 61 485.5L68.5 491C72.1667 490.833 80.2 491 83 493C85.8 495 86.8333 499.5 87 501.5L95 521L96 528.5C98.8333 530.5 104.6 535.2 105 538C105.5 541.5 116.5 557.5 120.5 561C123.7 563.8 134.167 566.5 139 567.5L142.5 568.5L145 573C145.5 578 146.5 588.6 146.5 591C146.5 593.4 141.5 598.333 139 600.5C135.5 601.333 128.3 603 127.5 603C126.5 603 124 604 124 606C124 607.6 127 608.667 128.5 609L146.5 602L156 607C158.5 609.167 164.1 613.7 166.5 614.5C169.5 615.5 173 622.5 171 624C169 625.5 167.5 637.5 167.5 640C167.5 642 181.5 665.167 188.5 676.5L193.5 673L198 664C198.833 663.333 200.8 662.4 202 664C203.5 666 211 672 212 674.5C213 677 212 679.5 211 680.5C210.2 681.3 211.333 686.5 212 689H219.5L224 692.5L227 694.5L224 686.5L227 687.5L233 690L242.5 689L241 682C239.667 680.167 236.8 676.1 236 674.5C235.2 672.9 232.667 673.833 231.5 674.5L228.5 669.5C228.833 668.167 229.6 665.2 230 664C230.4 662.8 232.167 665.167 233 666.5C235.667 666.333 241.3 666.1 242.5 666.5C244 667 254 676.5 253.398 678C252.797 679.5 256 689 254 691C252.4 692.6 253.333 700.333 254 704C257 705.167 263.1 707.1 263.5 705.5C263.9 703.9 266 701.167 267 700C267.333 700.833 268.2 703.1 269 705.5C269.8 707.9 279.667 710.167 284.5 711L295 709.5V714C296.667 713.833 300 713.2 300 712V704L303.5 700C305.333 698.5 309.2 695.3 310 694.5C310.8 693.7 316.333 696.167 319 697.5L321.5 702.5C325.5 701.667 333.8 700 335 700C336.5 700 342 700 342 697.5C342 695.5 340.333 692.333 339.5 691L348 694.5C350.667 694.167 356.2 693.5 357 693.5C358 693.5 358 689.5 357 689C356 688.5 349.5 686.5 348 685C346.5 683.5 353 681.5 355 678C356.6 675.2 359.333 673.5 360.5 673L371 676.5L381.5 679.5C381.833 676.5 382.5 669.9 382.5 667.5C382.5 665.1 387.167 660.5 389.5 658.5C392.333 652.5 398.1 639.9 398.5 637.5C398.9 635.1 401.667 630.167 403 628C405.833 631 412.1 637.3 414.5 638.5C416.9 639.7 415.5 633.333 414.5 630C413.5 627.167 410.8 620.4 408 616C404.5 610.5 411.5 612.5 411.5 605.5C411.5 598.5 418.5 601 420 603C421.5 605 425.5 611.5 425.5 616C425.5 619.6 431.167 621.167 434 621.5C435.667 617.167 440.2 607.9 445 605.5C449.8 603.1 447 592.833 445 588C443.5 585.833 440.2 580.1 439 574.5C437.5 567.5 442.5 572.5 445 566C447 560.8 445.833 553.5 445 550.5L466.5 561C461.333 555 450.7 542.1 449.5 538.5C448.3 534.9 460.333 529.667 466.5 527.5C472.167 521.333 483.5 507.9 483.5 503.5C483.5 498 474 492 474.5 488C475 484 480.5 472.5 483.5 466.5C486.5 460.5 490 456.5 494.5 454.5Z"
                fill="url(#paint0_linear_0_3)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_0_3"
                x="0.1"
                y="0.6"
                width="546.3"
                height="736.8"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="11.7"
                  result="effect1_foregroundBlur_0_3"
                />
              </filter>
              <linearGradient
                id="paint0_linear_0_3"
                x1="273.25"
                y1="24"
                x2="273.25"
                y2="714"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color={selectedColors.highlight} />
                <stop offset="1" stop-color={selectedColors.highlight} />
              </linearGradient>
            </defs>
          </svg> */}

          {/* <svg
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
          </svg> */}
          {/* <svg
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
          </svg> */}
        </div>
        {/* Tabs for Categories */}
        <div className="HairColor-tabs">
          <button
            onClick={() => handleTabClick("hairColor")}
            className={`tab-button ${
              activeTab === "hairColor" ? "active" : ""
            }`}
          >
            {selectedColors.hairColor ? (
              <div
                className="tab-button-color"
                style={{ background: selectedColors.hairColor }}
              ></div>
            ) : (
              <img
                src={pluscircle}
                alt={getTranslation("add_color_alt", "Add color")}
              />
            )}
            {getTranslation("hair_color", "Hair color")}
            {selectedPrice.hairColor ? (
              <h6>
                +{selectedPrice.hairColor}{" "}
                {getTranslation("currency_sar", "SAR")}
              </h6>
            ) : (
              ""
            )}
          </button>
          <button
            onClick={() => handleTabClick("colorGradient")}
            className={`tab-button ${
              activeTab === "colorGradient" ? "active" : ""
            }`}
          >
            {selectedColors.colorGradient ? (
              <div
                className="tab-button-color"
                style={{ background: selectedColors.colorGradient }}
              ></div>
            ) : (
              <img
                src={pluscircle}
                alt={getTranslation("add_color_alt", "Add color")}
              />
            )}
            {getTranslation("color_gradient", "Color gradient")}
            {selectedPrice.colorGradient ? (
              <h6>
                +{selectedPrice.colorGradient}{" "}
                {getTranslation("currency_sar", "SAR")}
              </h6>
            ) : (
              ""
            )}
          </button>
          <button
            onClick={() => handleTabClick("highlight")}
            className={`tab-button ${
              activeTab === "highlight" ? "active" : ""
            }`}
          >
            {selectedColors.highlight ? (
              <div
                className="tab-button-color"
                style={{ background: selectedColors.highlight }}
              ></div>
            ) : (
              <img
                src={pluscircle}
                alt={getTranslation("add_color_alt", "Add color")}
              />
            )}
            {getTranslation("highlight", "Highlight")}
            {selectedPrice.highlight ? (
              <h6>
                +{selectedPrice.highlight}{" "}
                {getTranslation("currency_sar", "SAR")}
              </h6>
            ) : (
              ""
            )}
          </button>
        </div>
        {activeTab === "colorGradient" ? (
          <div className="colorGradient-container">
            <div className="colorGradient-container-des">
              <h2>
                <img
                  src={colorGradient ? check_circle : plus}
                  alt={getTranslation("icon_alt", "icon")}
                />
                {getTranslation("ombre_gradient", "Ombre colour gradient")}{" "}
                {colorGradient ? `- ${colorGradient}%` : ""}
              </h2>
              <p>
                {getTranslation(
                  "ombre_gradient_description",
                  "Here you can optionally choose a Ombre gradient. The main color (hairline) blends into the hair gradient color (hair tips). Use the percentage slider to determine the position of the color transition."
                )}
              </p>
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
              <img src={hairG} />

              <svg
                width="259"
                height="288"
                viewBox="0 0 259 288"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="colorGradient-hair-Gradient"
              >
                <path
                  d="M124.533 1.21836e-05H141.956C142.49 0.748459 143.311 0.512107 144.02 0.551499C152.144 1.03546 159.784 3.05007 167.138 6.70789C190.746 18.4298 209.491 35.1264 221.303 58.9866C224.873 66.201 228.106 73.5729 228.269 81.9015C228.438 90.2413 228.949 98.5699 229.084 106.91C229.135 109.982 230.006 112.34 232.07 114.698C238.901 122.492 244.838 130.911 247.666 141.079C250.342 150.697 249.633 159.661 241.875 166.999C241.47 167.382 241.155 167.866 240.857 168.339C238.777 171.58 239.238 174.529 242.218 176.932C243.904 178.294 245.439 179.79 246.699 181.563C250.083 186.346 249.875 190.95 246.097 195.429C245.625 195.992 245.057 196.583 244.86 197.252C241.796 207.894 243.01 219.818 253.794 227.725C257.252 230.257 258.59 233.296 258.893 237.111C259.973 250.949 253.237 261.917 245.743 273.042C243.213 269.925 240.857 267.156 238.664 264.264C237.63 262.896 236.483 262.44 234.824 262.66C229.742 263.341 226.104 266.002 224.108 270.662C221.73 276.222 221.196 282.046 222.321 288H221.196C220.786 287.797 220.392 287.544 219.959 287.404C213.719 285.35 209.463 281.382 207.956 274.832C207.084 271.033 207.332 267.207 207.894 263.374C208.22 261.163 210.205 258.304 209.001 257.06C207.736 255.749 204.616 256.261 202.317 255.924C190.083 254.123 179.187 249.593 171.085 239.869C160.903 227.652 158.137 213.178 158.733 197.742C158.778 196.509 159.503 195.924 160.324 195.294C164.681 191.963 168.381 187.995 171.411 183.437C182.425 166.87 185.939 148.159 186.912 128.727C186.985 127.303 186.17 127.033 185.118 126.758C179.395 125.272 175.172 121.676 171.788 117.011C166.75 110.072 163.821 102.205 162.039 93.8878C161.64 92.0308 161.038 91.1473 158.862 90.9447C151.508 90.2525 144.587 88.0185 138.262 84.1187C129.666 78.8176 123.245 71.5358 118.613 62.605C118.107 61.6259 117.938 60.0108 116.094 60.99C113.075 62.5938 109.1 70.9167 109.763 74.2876C110.359 77.3264 110.741 80.4046 110.764 83.4996C110.837 93.5783 107.869 102.155 98.6705 107.568C97.7597 108.103 96.8658 108.947 95.6233 108.339C101.752 99.656 102.224 87.9115 96.6634 82.9875C93.0539 91.4399 87.4092 98.5755 81.8375 105.75C80.8199 107.062 80.2802 108.395 80.089 110.061C79.3244 116.853 78.2955 123.623 77.5815 130.421C76.9743 136.184 75.4675 141.884 75.9679 147.725C76.7775 157.123 81.3034 164.979 86.6895 172.407C93.0483 181.18 100.621 188.822 108.881 195.806C109.651 196.459 110.466 196.982 110.539 198.231C111.231 210.128 110.101 221.709 103.927 232.204C97.0569 243.875 87.1 251.776 73.5054 253.498C56.4643 255.659 40.0418 259.638 24.4738 266.959C23.7091 267.319 22.9895 268.107 21.8931 267.668C22.1743 265.772 22.2249 263.932 21.91 262.058C20.6844 254.815 16.9456 248.794 12.7682 242.981C12.3409 242.39 11.745 241.478 11.2334 241.489C10.3169 241.501 10.1202 242.604 9.86154 243.391C8.42787 247.764 8.79331 252.283 8.82705 256.773C8.83267 257.713 9.22622 258.732 8.42224 259.891C5.85288 256.205 3.79514 252.536 2.547 248.512C-0.730771 237.967 -1.99578 227.708 6.13399 218.355C9.34991 214.652 9.72098 210.347 7.08415 205.603C1.38319 195.339 4.55976 182.21 13.932 175.153C22.8433 168.44 26.4191 159.267 25.795 148.361C25.4801 142.846 23.31 137.613 23.0738 132.042C22.5903 120.551 24.946 109.988 34.4757 102.633C40.469 98.0071 44.2416 92.2953 45.7933 85.1372C47.0808 79.2059 47.6318 73.1171 48.6775 67.1239C54.1142 35.9198 75.788 14.4794 106.733 9.62852C107.542 9.49909 108.386 9.63978 108.819 8.59871C110.59 4.33875 114.357 2.79121 118.399 1.55318C120.429 0.934164 122.638 1.06359 124.55 -0.00561523L124.533 1.21836e-05Z"
                  fill="url(#paint0_linear_777_715)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_777_715"
                    x1="129.512"
                    y1="-0.00561523"
                    x2="129.512"
                    y2="288"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset={colorGradient / 100}
                      stop-color={selectedColors.colorGradient}
                      stop-opacity="0"
                    />
                    <stop
                      offset={colorGradient / 100 - 0.1}
                      stop-color={selectedColors.colorGradient}
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        ) : (
          <p style={{ display: "none" }}></p>
        )}
        <div className="HairColor-filters">
          <button
            onClick={() => handleFilterChange("black")}
            className={activeFilter === "black" ? "filter-active" : ""}
          >
            {getTranslation("black", "Black")}
          </button>
          <button
            onClick={() => handleFilterChange("brown")}
            className={activeFilter === "brown" ? "filter-active" : ""}
          >
            {getTranslation("brown", "Brown")}
          </button>
          <button
            onClick={() => handleFilterChange("blonde")}
            className={activeFilter === "blonde" ? "filter-active" : ""}
          >
            {getTranslation("blonde", "Blonde")}
          </button>
          <button
            onClick={() => handleFilterChange("red")}
            className={activeFilter === "red" ? "filter-active" : ""}
          >
            {getTranslation("red", "Red")}
          </button>
          <button
            onClick={() => handleFilterChange("more")}
            className={activeFilter === "more" ? "filter-active" : ""}
          >
            {getTranslation("more", "More")}
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
                  <h5
                    className={`${
                      selectedColors.hairColor === color.color
                        ? "colorr-active"
                        : ""
                    }`}
                    style={{ backgroundColor: color.color }}
                  >
                    {color.id}
                  </h5>
                  <h6>{color.name}</h6>
                </div>
              ))
          )}
        </div>
      </div>
    </section>
  );
};

export default HairColor;
