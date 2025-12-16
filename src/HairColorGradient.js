import React, { useState, useEffect } from "react";
import "./HairColor.css";
import getTranslation from "./utils/translations";

const HairColorGradient = ({
  setSelectedColors,
  selectedColors,
  setSelectedPrice,
  selectedPrice,
  setSelectedNameColors,
  selectedNameColors,
  lastSelected,
  setMoreItemsVisible,
}) => {
  const [hairImage, setHairImage] = useState("");
  const [svgHairBase, setSvgHairBase] = useState("");
  const [svgHairGradient, setSvgHairGradient] = useState("");
  const [activeFilter, setActiveFilter] = useState("black");

  setMoreItemsVisible(activeFilter);

  const handleColorSelect = (color) => {
    setSelectedColors((prev) => ({
      ...prev,
      colorGradient: color,
    }));
  };

  const handlePriceSelect = (price) => {
    setSelectedPrice((prev) => ({
      ...prev,
      colorGradient: price,
    }));
  };

  const handleColorNameSelect = (name) => {
    setSelectedNameColors((prev) => ({
      ...prev,
      colorGradient: name,
    }));
  };

  const handleResetColor = () => {
    setSelectedColors((prevColors) => ({
      ...prevColors,
      colorGradient: null,
    }));
    setSelectedPrice((prevPrices) => ({
      ...prevPrices,
      colorGradient: 0,
    }));
    setSelectedNameColors((prev) => ({
      ...prev,
      colorGradient: null,
    }));
  };

  const colorOptions = {
    black: [
      { id: "#01", name: getTranslation("jet_black", "Jet black"), color: "#000000d4", price: 80 },
      { id: "#1B", name: getTranslation("off_black", "Off black"), color: "#3B3B3B", price: 80 },
    ],
    brown: [
      { id: "#02", name: getTranslation("darkest_brown", "Darkest brown"), color: "#3B3B3B", price: 80 },
      { id: "#03", name: getTranslation("medium_dark_brown", "Medium dark brown"), color: "#482D1F", price: 80 },
      { id: "#06", name: getTranslation("chestnut_brown", "Chestnut brown"), color: "#7B5C4D", price: 80 },
      { id: "#08", name: getTranslation("medium_ash_brown", "Medium ash brown"), color: "#A56A43", price: 80 },
      { id: "#04", name: getTranslation("medium_reddish_brown", "Medium reddish brown"), color: "#C35831", price: 80 },
      { id: "#10", name: getTranslation("medium_golden_brown", "Medium golden brown"), color: "#A86A4D", price: 80 },
      { id: "#12", name: getTranslation("light_golden_brown", "Light golden brown"), color: "#D9B88A", price: 80 },
      { id: "#14", name: getTranslation("light_ash_brown", "Light ash brown"), color: "#B08B64", price: 80 },
    ],
    blonde: [
      { id: "#16", name: getTranslation("dark_honey_blonde", "Dark honey blonde"), color: "#D6C16D", price: 80 },
      { id: "#27", name: getTranslation("honey_blonde", "Honey blonde"), color: "#F0B23D", price: 80 },
      { id: "#18", name: getTranslation("nerz_blonde", "Nerz blonde"), color: "#C69C5C", price: 80 },
      { id: "#144", name: getTranslation("bright_pumpkin_gold_blonde", "Bright pumpkin gold blonde"), color: "#DFAF3F", price: 80 },
      { id: "#22", name: getTranslation("light_ash_blonde", "Light ash blonde"), color: "#B5A89D", price: 80 },
      { id: "#60", name: getTranslation("white_blonde", "White blonde"), color: "#FFFFFF", price: 80 },
      { id: "#613", name: getTranslation("platinum_blonde", "Platinum blonde"), color: "#E5E4E2", price: 80 },
    ],
    red: [
      { id: "#99J", name: getTranslation("mahagoni_red", "Mahagoni red"), color: "#4A0D0D", price: 80 },
      { id: "#350", name: getTranslation("ginger_red", "Ginger red"), color: "#D76E38", price: 80 },
      { id: "#30", name: getTranslation("auburn_red", "Auburn red"), color: "#A52A2A", price: 80 },
      { id: "#135", name: getTranslation("fiery_red", "Fiery red"), color: "#FF4500", price: 80 },
      { id: "#F", name: getTranslation("fucsia_red", "Fucsia red"), color: "#D5006D", price: 80 },
      { id: "#P", name: getTranslation("pink_red", "Pink red"), color: "#FF1493", price: 80 },
      { id: "#33", name: getTranslation("cooper_red", "Cooper red"), color: "#a05436", price: 80 },
      { id: "#B", name: getTranslation("burgundy_red", "Burgundy red"), color: "#800020", price: 80 },
    ],
    more: [
      { id: "#N", name: getTranslation("natural", "Natural"), color: "#000000d4", price: 80 },
      { id: "#PU", name: getTranslation("purple", "Purple"), color: "#800080", price: 80 },
      { id: "#O", name: getTranslation("orange", "Orange"), color: "#FFA500", price: 80 },
      { id: "#S", name: getTranslation("silver", "Silver"), color: "#C0C0C0", price: 80 },
      { id: "#BL", name: getTranslation("blue", "Blue"), color: "#0000FF", price: 80 },
      { id: "#G", name: getTranslation("green", "Green"), color: "#008000", price: 80 },
    ],
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  useEffect(() => {
    if (lastSelected === "Wavy") {
      setHairImage("https://hairs.softylus.com/wp-content/uploads/2025/02/WavyImage.png");
      setSvgHairGradient(
        <svg width="444" height="642" viewBox="0 0 444 642" fill="none" xmlns="http://www.w3.org/2000/svg" className="hairGradient-svg">
          <path d="M164.026 15.6229C172.826 10.8229 200.026 3.62286 212.526 0.622859C222.526 -1.91201 238.692 3.9 245.526 7.12286H257.526L274.526 9.62286C283.359 13.7895 301.726 22.6229 304.526 24.6229C308.026 27.1229 339.526 61.6229 343.526 65.1229C347.526 68.6229 368.526 125.123 371.526 135.123C373.926 143.123 385.859 206.79 391.526 237.623C394.026 243.456 399.726 256.223 402.526 260.623C406.026 266.123 411.526 288.623 411.526 293.623C411.526 297.623 414.859 319.29 416.526 329.623L391.526 388.123L438.026 421.623L443.526 441.623L441.026 463.123C437.859 474.623 431.926 498.923 433.526 504.123C435.126 509.323 419.526 532.29 411.526 543.123L386.526 560.123L396.026 535.623L359.026 580.123L334.526 597.123L329.526 590.623L322.026 597.123L334.526 606.623C338.526 605.29 345.526 605.323 341.526 616.123C337.526 626.923 306.193 636.956 291.026 640.623L284.026 632.123C279.859 634.956 270.226 640.623 265.026 640.623C258.526 640.623 195.526 641.623 190.026 640.623C185.626 639.823 147.859 620.956 129.526 611.623L76.0259 560.123C57.8592 538.623 21.5257 495.023 21.5257 492.623C21.5257 489.623 20.0259 481.123 15.0259 476.123C10.0259 471.123 4.02571 461.623 4.02571 458.123C4.02571 455.323 9.02582 451.956 11.5259 450.623L31.0257 440.123L20.0259 444.123C16.1925 445.29 7.62571 447.423 4.02571 446.623C0.425707 445.823 -0.14096 439.29 0.025707 436.123L4.02571 428.623L31.0257 415.123L21.5257 412.623C33.5257 404.956 59.1257 387.423 65.5257 378.623C71.9257 369.823 70.1924 357.29 68.5257 352.123C63.859 339.623 54.5257 312.823 54.5257 305.623V267.623L68.5257 195.123C72.6924 178.456 81.0257 144.123 81.0257 140.123C81.0257 136.123 96.6924 101.123 104.526 84.1229C110.359 75.1229 122.126 56.2229 122.526 52.6229C123.026 48.1229 153.026 21.6229 164.026 15.6229Z" fill="url(#paint0_linear_gradient)" />
          <defs>
            <linearGradient id="paint0_linear_gradient" x1="221.763" y1="0" x2="221.763" y2="641.067" gradientUnits="userSpaceOnUse">
              <stop offset="0.6" stopColor={selectedColors.hairColor || "#cccccc"} />
              <stop offset="0.4" stopColor={selectedColors.colorGradient || "#cccccc"} />
            </linearGradient>
          </defs>
        </svg>
      );
    } else if (lastSelected === "Curly") {
      setHairImage("https://hairs.softylus.com/wp-content/uploads/2025/02/CurlyImage.png");
      setSvgHairGradient(
        <svg width="462" height="668" viewBox="0 0 462 668" fill="none" xmlns="http://www.w3.org/2000/svg" className="hairGradient-svg">
          <path d="M167.862 15.6544C170.262 13.6544 186.862 7.48769 194.862 4.65436C207.262 -0.945621 226.695 -0.34565 234.862 0.654333L244.362 1.65433C246.862 2.15433 252.162 3.25433 253.362 3.65433C254.562 4.05433 256.195 5.821 256.862 6.65433L259.362 11.6543L261.862 8.15433C262.862 7.82101 265.662 6.75436 268.862 5.15436C272.862 3.15436 279.862 4.65436 281.862 5.15436C283.862 5.65436 304.362 14.1544 306.862 15.6544C309.362 17.1544 336.862 40.6544 339.362 43.1544C341.862 45.6544 365.362 80.6544 366.362 84.6544C367.362 88.6544 394.862 142.654 396.362 145.654C397.562 148.054 403.862 177.654 406.862 192.154V199.154C406.862 201.154 412.862 210.654 414.862 214.154C416.862 217.654 418.362 234.654 418.362 236.154C418.362 237.354 410.695 256.321 406.862 265.654L404.362 273.154V283.154C404.362 283.954 411.362 293.154 414.862 297.654L424.862 305.654C427.862 308.654 434.762 315.054 438.362 316.654C441.962 318.254 449.195 328.988 452.362 334.154L449.362 343.154L450.362 348.154L447.862 361.154C448.695 363.821 449.862 370.054 447.862 373.654C445.862 377.254 440.695 390.154 438.362 396.154C439.362 398.488 441.562 403.654 442.362 405.654C443.362 408.154 441.362 421.154 441.362 424.154C441.362 426.554 432.695 440.488 428.362 447.154C428.695 448.654 429.662 452.054 430.862 453.654C432.362 455.654 436.362 463.654 438.362 465.654C439.962 467.254 447.028 470.654 450.362 472.154L455.362 474.654L461.362 477.654V480.154C460.862 481.321 459.562 483.654 458.362 483.654C456.862 483.654 455.362 484.154 452.362 485.654C449.362 487.154 447.862 486.654 447.862 487.654C447.862 488.654 450.362 490.654 450.362 491.654C450.362 492.654 452.362 494.654 452.362 496.154C452.362 497.354 451.028 500.654 450.362 502.154C449.195 503.154 446.662 505.254 445.862 505.654C445.062 506.054 444.195 508.488 443.862 509.654C443.528 510.821 442.762 513.354 442.362 514.154C441.862 515.154 438.362 523.154 438.362 525.154C438.362 526.754 428.362 543.821 423.362 552.154L412.862 561.654C411.528 563.321 408.862 566.854 408.862 567.654C408.862 568.654 408.362 574.154 408.862 577.654C409.362 581.154 410.362 583.154 411.362 585.654C412.362 588.154 414.362 589.654 415.362 591.654C416.362 593.654 419.362 596.154 421.362 597.154C422.962 597.954 422.028 600.488 421.362 601.654L426.862 607.154L424.862 610.654C422.862 609.488 418.662 607.154 417.862 607.154C416.862 607.154 413.362 604.654 412.862 603.654C412.362 602.654 408.862 598.154 405.862 594.654C403.462 591.854 402.528 587.488 402.362 585.654C401.528 582.488 399.962 575.754 400.362 574.154C400.762 572.554 398.862 572.821 397.862 573.154C397.362 573.654 395.962 574.954 394.362 576.154C392.362 577.654 392.362 584.654 391.862 586.654C391.362 588.654 388.362 593.154 387.862 596.154C387.462 598.554 386.362 606.821 385.862 610.654C387.528 612.488 391.362 616.354 393.362 617.154C395.362 617.954 398.528 622.821 399.862 625.154C397.695 625.154 392.862 624.854 390.862 623.654C388.362 622.154 373.362 611.154 369.862 607.154C367.062 603.954 366.362 591.488 366.362 585.654C365.362 586.654 362.662 589.554 359.862 593.154C356.362 597.654 353.362 617.154 353.362 618.654C353.362 620.154 353.362 623.154 354.862 625.154C356.362 627.154 358.362 627.154 359.862 628.154C361.362 629.154 366.362 630.154 368.862 630.154C370.862 630.154 369.695 631.488 368.862 632.154L366.362 635.154L359.862 638.154L351.862 632.154L344.862 630.154L343.362 635.154L353.362 636.654V638.154V642.154L351.862 646.154L347.862 647.154C346.599 646.96 344.634 646.653 343.294 646.43C344.586 647.082 344.203 648.732 344.862 649.654L343.362 652.154C342.695 653.988 341.062 658.254 339.862 660.654C338.362 663.654 336.862 662.154 335.862 660.654C334.862 659.154 331.862 660.654 330.362 660.654H324.862C324.028 659.654 322.262 657.654 321.862 657.654C321.362 657.654 319.362 656.154 317.862 656.154C316.362 656.154 315.862 657.654 314.862 657.654C313.862 657.654 313.362 659.654 312.362 660.654C311.362 661.654 310.862 664.154 308.362 666.154C305.862 668.154 303.862 666.154 299.862 666.154C295.862 666.154 288.862 664.154 286.862 666.154C285.262 667.754 282.195 666.821 280.862 666.154L277.862 662.154C276.362 660.154 272.362 666.154 270.862 666.154C269.662 666.154 273.362 661.821 275.362 659.654C272.862 658.988 267.362 658.054 265.362 659.654C262.862 661.654 254.862 666.154 252.862 666.154H244.362C242.362 663.321 238.062 657.354 236.862 656.154C235.362 654.654 224.862 646.154 223.362 646.154H217.862C217.062 646.154 210.528 650.821 207.362 653.154C205.695 653.488 202.162 654.554 201.362 656.154C200.562 657.754 196.028 659.821 193.862 660.654C192.695 661.821 189.862 664.554 187.862 666.154C185.362 668.154 186.862 664.154 185.862 664.154C184.862 664.154 183.862 664.654 181.862 664.154C179.862 663.654 179.362 659.654 177.862 660.654C176.362 661.654 172.862 664.154 170.362 666.154C167.862 668.154 163.862 668.654 161.862 666.154C160.262 664.154 158.862 662.654 158.362 662.154L151.362 659.654C149.862 659.154 146.762 658.054 146.362 657.654C145.862 657.154 136.362 660.154 133.862 659.654C131.362 659.154 130.862 658.654 129.862 656.154C129.062 654.154 125.528 655.321 123.862 656.154C122.695 655.821 120.062 654.954 118.862 654.154C117.662 653.354 120.695 650.821 122.362 649.654L115.362 647.654C114.362 645.988 112.362 642.454 112.362 641.654V638.654C112.695 637.988 113.762 636.454 115.362 635.654C117.362 634.654 119.862 636.154 122.362 635.654C124.862 635.154 123.862 632.154 123.862 631.154C123.862 630.154 123.362 624.654 122.362 622.154C121.362 619.654 119.862 616.654 117.862 614.154C115.862 611.654 112.362 606.154 112.362 603.654C112.362 601.154 106.362 594.654 104.362 591.654C102.362 588.654 100.862 583.654 100.362 580.654C99.9618 578.254 96.1952 574.654 94.3618 573.154L87.3618 583.654C85.3618 586.654 84.8618 589.654 83.3618 593.154C81.8618 596.654 80.8618 597.654 74.8618 600.154C68.8618 602.654 67.8618 604.154 63.8618 605.654C59.8618 607.154 52.3618 607.654 48.8618 608.154C45.3618 608.654 42.8618 607.154 41.3618 606.154C39.8617 605.154 35.8618 599.654 33.8618 596.154C31.8617 592.654 36.3618 594.654 37.8618 593.154C39.3618 591.654 42.8618 591.154 47.8618 589.654C52.8618 588.154 52.3618 587.654 53.8618 586.654C55.3618 585.654 57.3618 583.154 58.8618 580.654C60.3618 578.154 60.3618 573.654 62.8618 569.654C65.3618 565.654 63.3618 563.654 62.8618 560.654C62.4618 558.254 61.0285 555.321 60.3618 554.154C58.1951 557.654 53.5618 565.254 52.3618 567.654C51.1618 570.054 48.8618 571.654 47.8618 572.154L41.3618 575.154C38.8618 576.154 33.1618 578.654 30.3618 580.654C27.5618 582.654 24.1951 581.488 22.8618 580.654L17.8618 578.154C17.0618 577.754 20.8618 575.988 22.8618 575.154C20.1952 575.488 14.4618 575.954 12.8618 575.154C11.2618 574.354 6.19515 571.154 3.86182 569.654C5.86182 570.321 10.8618 571.754 14.8618 572.154C19.8618 572.654 26.3618 569.154 30.3618 567.654C34.3617 566.154 37.8618 560.154 39.3618 558.154C40.5618 556.554 41.1951 546.821 41.3618 542.154L37.8618 526.654C36.5285 525.154 33.8618 521.754 33.8618 520.154C33.8618 518.154 31.8618 513.654 30.3618 512.154C28.8617 510.654 25.3618 504.154 22.8618 501.654C20.3618 499.154 14.3618 491.154 12.8618 489.154C11.3618 487.154 10.3618 483.654 9.86182 482.654C9.36182 481.654 9.36182 475.654 9.36182 475.154C9.36182 474.654 1.86178 465.654 0.861776 463.154C-0.138224 460.654 1.36178 457.654 1.86178 455.154C2.26178 453.154 2.69511 451.654 2.86178 451.154L33.8618 441.654C28.5284 441.321 17.5618 440.654 16.3618 440.654H12.3618C10.8618 440.654 9.36178 439.154 8.36178 438.654C7.36178 438.154 5.36178 436.154 4.36178 436.154C3.36178 436.154 3.86178 434.654 3.86178 434.154C3.86178 433.654 7.36178 430.654 8.36178 430.654C9.16178 430.654 12.3618 431.321 13.8618 431.654C16.6951 431.988 22.6618 432.654 23.8618 432.654C25.3618 432.654 32.3618 429.654 30.3618 430.154C28.3618 430.654 21.3618 427.654 20.3618 427.154C19.5618 426.754 18.3618 424.654 17.8618 423.654C18.6951 424.321 21.0618 425.854 23.8618 426.654C27.3618 427.654 34.3618 426.154 41.3618 423.654C48.3618 421.154 51.3618 410.154 52.8618 409.654C54.3618 409.154 54.8618 399.654 54.8618 393.654C54.8618 388.854 48.5284 377.321 45.3618 372.154C42.5284 366.321 34.9618 352.154 27.3618 342.154C19.7618 332.154 19.5284 323.321 20.3618 320.154C21.1951 317.821 23.0618 312.954 23.8618 312.154C24.8618 311.154 25.3618 303.154 25.8618 301.154C26.2618 299.554 31.6951 293.821 34.3618 291.154C46.1951 279.488 70.1618 255.754 71.3618 254.154C72.5618 252.554 70.8618 244.154 69.8618 240.154C68.3618 233.154 65.0619 217.454 63.8619 210.654C62.3619 202.154 63.8619 181.154 63.8619 177.654C63.8619 174.854 65.8619 169.821 66.8619 167.654L86.8619 119.654C90.6953 112.654 98.4619 97.8544 98.8619 94.6544C99.3619 90.6544 109.362 77.1544 115.362 66.1544C121.362 55.1544 139.362 38.1544 142.362 35.1544C145.362 32.1544 164.862 18.1544 167.862 15.6544Z" fill="url(#paint0_linear_curly_gradient)" />
          <defs>
            <linearGradient id="paint0_linear_curly_gradient" x1="230.944" y1="0" x2="230.944" y2="667.847" gradientUnits="userSpaceOnUse">
              <stop offset="0.6" stopColor={selectedColors.hairColor || "#cccccc"} />
              <stop offset="0.4" stopColor={selectedColors.colorGradient || "#cccccc"} />
            </linearGradient>
          </defs>
        </svg>
      );
    } else {
      setHairImage("https://hairs.softylus.com/wp-content/uploads/2025/02/StraightImage.png");
      setSvgHairGradient(
        <svg width="298" height="631" viewBox="0 0 298 631" fill="none" xmlns="http://www.w3.org/2000/svg" className="hairGradient-svg">
          <path d="M104.611 3.86766C108.611 2.66766 124.944 1.03433 132.611 0.367662C141.383 0.775651 154.319 -0.634898 164.111 0.367676C178.32 1.82245 188.671 5.88764 193.111 7.36766C200.611 9.86766 225.111 29.8677 229.111 32.8677C233.111 35.8677 252.111 63.3677 254.111 65.8677C255.711 67.8677 263.444 85.701 267.111 94.3677C271.278 108.701 279.611 137.768 279.611 139.368C279.611 140.968 282.611 164.701 284.111 176.368L288.111 215.368L289.611 254.868L291.111 293.868L294.111 329.368L296.611 380.868L297.611 412.868V457.868C296.944 467.368 295.511 486.668 295.111 487.868C294.711 489.068 289.944 510.701 287.611 521.368C282.444 531.868 272.011 553.568 271.611 556.368C271.111 559.868 258.611 572.868 257.611 575.368C256.811 577.368 244.611 589.534 238.611 595.368C234.944 598.701 227.511 605.668 227.111 606.868C226.611 608.368 227.611 613.868 229.611 616.368C231.611 618.868 224.111 619.868 222.111 619.368C220.111 618.868 206.611 619.368 205.611 619.368C204.611 619.368 191.111 625.368 189.611 626.368C188.111 627.368 173.611 630.368 171.611 630.368C169.611 630.368 163.611 626.868 160.111 626.868C156.611 626.868 129.611 622.368 127.611 621.868C125.611 621.368 100.111 599.868 96.6111 596.368C93.1111 592.868 77.1111 570.368 71.1111 563.868C66.3111 558.668 50.1111 525.368 42.6111 509.368C38.6111 503.868 29.0111 461.868 28.6111 461.368C24.6111 456.368 9.61108 349.368 8.61108 345.368C7.61108 341.368 0.111111 238.368 0.111111 232.368C0.111111 226.368 -0.888889 174.368 3.11111 149.368C7.11111 124.368 13.1111 108.368 17.6111 95.3677C22.1111 82.3677 30.1111 69.8677 38.6111 54.8677C47.1111 39.8677 74.1111 19.3677 75.6111 17.8677C77.1111 16.3677 99.6111 5.36766 104.611 3.86766Z" fill="url(#paint0_linear_straight_gradient)" />
          <defs>
            <linearGradient id="paint0_linear_straight_gradient" x1="148.806" y1="0" x2="148.806" y2="630.368" gradientUnits="userSpaceOnUse">
              <stop offset="0.6" stopColor={selectedColors.hairColor || "#cccccc"} />
              <stop offset="0.4" stopColor={selectedColors.colorGradient || "#cccccc"} />
            </linearGradient>
          </defs>
        </svg>
      );
    }
  }, [lastSelected, selectedColors.hairColor, selectedColors.colorGradient]);

  return (
    <section className="HairColor-sec">
      <div className="HairColor-container" id="Haircolor">
        <div className="HairColor-image">
          <img src={hairImage} alt="Hair" />
          {svgHairGradient}
        </div>
        <div className="HairColor-detail">
          <div className="HairColor-head">
            <h2>{getTranslation("gradient_color", "Gradient Color")}</h2>
            <p className="HairColor-subtitle">{getTranslation("select_gradient_color", "Select a gradient color (optional)")}</p>
          </div>

          {selectedColors.hairColor && (
            <div className="HairColor-base-preview">
              <span>{getTranslation("base_color", "Base Color")}:</span>
              <div className="base-color-chip" style={{ background: selectedColors.hairColor }}></div>
              <span>{selectedNameColors.hairColor}</span>
            </div>
          )}

          {selectedColors.colorGradient && (
            <div className="HairColor-selected-info">
              <div className="selected-color-preview" style={{ background: selectedColors.colorGradient }}></div>
              <span>{selectedNameColors.colorGradient}</span>
              {selectedPrice.colorGradient > 0 && (
                <span className="selected-price">+{selectedPrice.colorGradient} {getTranslation("currency_sar", "SAR")}</span>
              )}
              <button className="reset-color-button" onClick={handleResetColor}>
                {getTranslation("reset_color", "Reset")}
              </button>
            </div>
          )}

          <div className="HairColor-filters">
            <button onClick={() => handleFilterChange("black")} className={activeFilter === "black" ? "filter-active" : ""}>
              {getTranslation("black", "Black")}
            </button>
            <button onClick={() => handleFilterChange("brown")} className={activeFilter === "brown" ? "filter-active" : ""}>
              {getTranslation("brown", "Brown")}
            </button>
            <button onClick={() => handleFilterChange("blonde")} className={activeFilter === "blonde" ? "filter-active" : ""}>
              {getTranslation("blonde", "Blonde")}
            </button>
            <button onClick={() => handleFilterChange("red")} className={activeFilter === "red" ? "filter-active" : ""}>
              {getTranslation("red", "Red")}
            </button>
            <button onClick={() => handleFilterChange("more")} className={activeFilter === "more" ? "filter-active" : ""}>
              {getTranslation("more", "More")}
            </button>
          </div>

          <div className="HairColor-colors">
            {colorOptions[activeFilter]?.map((color) => (
              <div
                key={color.id}
                className={`color-option ${selectedColors.colorGradient === color.color ? "active" : ""}`}
                onClick={() => {
                  handleColorSelect(color.color);
                  handlePriceSelect(color.price);
                  handleColorNameSelect(color.name);
                }}
              >
                <h5
                  className={selectedColors.colorGradient === color.color ? "colorr-active" : ""}
                  style={{ backgroundColor: color.color }}
                >
                  {color.id}
                </h5>
                <h6>{color.name}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HairColorGradient;
