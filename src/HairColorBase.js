import React, { useState, useEffect } from "react";
import "./HairColor.css";
import getTranslation from "./utils/translations";

const HairColorBase = ({
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
  const [svgHairColor, setSvgHairColor] = useState("");
  const [activeFilter, setActiveFilter] = useState("black");

  setMoreItemsVisible(activeFilter);

  const handleColorSelect = (color) => {
    setSelectedColors((prev) => ({
      ...prev,
      hairColor: color,
    }));
  };

  const handlePriceSelect = (price) => {
    setSelectedPrice((prev) => ({
      ...prev,
      hairColor: price,
    }));
  };

  const handleColorNameSelect = (name) => {
    setSelectedNameColors((prev) => ({
      ...prev,
      hairColor: name,
    }));
  };

  const handleResetColor = () => {
    setSelectedColors((prevColors) => ({
      ...prevColors,
      hairColor: null,
    }));
    setSelectedPrice((prevPrices) => ({
      ...prevPrices,
      hairColor: 0,
    }));
    setSelectedNameColors((prev) => ({
      ...prev,
      hairColor: null,
    }));
  };

  const colorOptions = {
    black: [
      { id: "#01", name: getTranslation("jet_black", "Jet black"), color: "#000000d4", price: 0 },
      { id: "#1B", name: getTranslation("off_black", "Off black"), color: "#3B3B3B", price: 0 },
    ],
    brown: [
      { id: "#02", name: getTranslation("darkest_brown", "Darkest brown"), color: "#3B3B3B", price: 0 },
      { id: "#03", name: getTranslation("medium_dark_brown", "Medium dark brown"), color: "#482D1F", price: 0 },
      { id: "#06", name: getTranslation("chestnut_brown", "Chestnut brown"), color: "#7B5C4D", price: 0 },
      { id: "#08", name: getTranslation("medium_ash_brown", "Medium ash brown"), color: "#A56A43", price: 20 },
      { id: "#04", name: getTranslation("medium_reddish_brown", "Medium reddish brown"), color: "#C35831", price: 20 },
      { id: "#10", name: getTranslation("medium_golden_brown", "Medium golden brown"), color: "#A86A4D", price: 20 },
      { id: "#12", name: getTranslation("light_golden_brown", "Light golden brown"), color: "#D9B88A", price: 20 },
      { id: "#14", name: getTranslation("light_ash_brown", "Light ash brown"), color: "#B08B64", price: 20 },
    ],
    blonde: [
      { id: "#16", name: getTranslation("dark_honey_blonde", "Dark honey blonde"), color: "#D6C16D", price: 20 },
      { id: "#27", name: getTranslation("honey_blonde", "Honey blonde"), color: "#F0B23D", price: 20 },
      { id: "#18", name: getTranslation("nerz_blonde", "Nerz blonde"), color: "#C69C5C", price: 20 },
      { id: "#144", name: getTranslation("bright_pumpkin_gold_blonde", "Bright pumpkin gold blonde"), color: "#DFAF3F", price: 20 },
      { id: "#22", name: getTranslation("light_ash_blonde", "Light ash blonde"), color: "#B5A89D", price: 20 },
      { id: "#60", name: getTranslation("white_blonde", "White blonde"), color: "#FFFFFF", price: 20 },
      { id: "#613", name: getTranslation("platinum_blonde", "Platinum blonde"), color: "#E5E4E2", price: 20 },
    ],
    red: [
      { id: "#99J", name: getTranslation("mahagoni_red", "Mahagoni red"), color: "#4A0D0D", price: 20 },
      { id: "#350", name: getTranslation("ginger_red", "Ginger red"), color: "#D76E38", price: 20 },
      { id: "#30", name: getTranslation("auburn_red", "Auburn red"), color: "#A52A2A", price: 20 },
      { id: "#135", name: getTranslation("fiery_red", "Fiery red"), color: "#FF4500", price: 20 },
      { id: "#F", name: getTranslation("fucsia_red", "Fucsia red"), color: "#D5006D", price: 20 },
      { id: "#P", name: getTranslation("pink_red", "Pink red"), color: "#FF1493", price: 20 },
      { id: "#33", name: getTranslation("cooper_red", "Cooper red"), color: "#a05436", price: 20 },
      { id: "#B", name: getTranslation("burgundy_red", "Burgundy red"), color: "#800020", price: 20 },
    ],
    more: [
      { id: "#N", name: getTranslation("natural", "Natural"), color: "#000000d4", price: 0 },
      { id: "#PU", name: getTranslation("purple", "Purple"), color: "#800080", price: 20 },
      { id: "#O", name: getTranslation("orange", "Orange"), color: "#FFA500", price: 20 },
      { id: "#S", name: getTranslation("silver", "Silver"), color: "#C0C0C0", price: 20 },
      { id: "#BL", name: getTranslation("blue", "Blue"), color: "#0000FF", price: 20 },
      { id: "#G", name: getTranslation("green", "Green"), color: "#008000", price: 20 },
    ],
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  useEffect(() => {
    if (lastSelected === "Wavy") {
      setHairImage("https://hairs.softylus.com/wp-content/uploads/2025/02/WavyImage.png");
      setSvgHairColor(
        <svg width="445" height="642" viewBox="0 0 445 642" fill="none" xmlns="http://www.w3.org/2000/svg" className="haircolor-svg">
          <path d="M165 16.0001C173.8 11.2001 201 4.00006 213.5 1.00006C223.5 -1.53482 239.667 4.27719 246.5 7.50006H258.5L275.5 10.0001C284.333 14.1667 302.7 23.0001 305.5 25.0001C309 27.5001 340.5 62.0001 344.5 65.5001C348.5 69.0001 369.5 125.5 372.5 135.5C374.9 143.5 386.833 207.167 392.5 238C395 243.833 400.7 256.6 403.5 261C407 266.5 412.5 289 412.5 294C412.5 298 415.833 319.667 417.5 330L392.5 388.5L439 422L444.5 442L442 463.5C438.833 475 432.9 499.3 434.5 504.5C436.1 509.7 420.5 532.667 412.5 543.5L387.5 560.5L397 536L360 580.5L335.5 597.5L330.5 591L323 597.5L335.5 607C339.5 605.667 346.5 605.7 342.5 616.5C338.5 627.3 307.167 637.333 292 641L285 632.5C280.833 635.333 271.2 641 266 641C259.5 641 196.5 642 191 641C186.6 640.2 148.833 621.333 130.5 612L77 560.5C58.8333 539 22.4998 495.4 22.4998 493C22.4998 490 21 481.5 16 476.5C11 471.5 4.99983 462 4.99983 458.5C4.99983 455.7 9.99994 452.333 12.5 451L31.9998 440.5L21 444.5C17.1666 445.667 8.59983 447.8 4.99983 447C1.39983 446.2 0.833161 439.667 0.999828 436.5L4.99983 429L31.9998 415.5L22.4998 413C34.4998 405.333 60.0998 387.8 66.4998 379C72.8998 370.2 71.1665 357.667 69.4998 352.5C64.8332 340 55.4998 313.2 55.4998 306V268L69.4998 195.5C73.6665 178.833 81.9998 144.5 81.9998 140.5C81.9998 136.5 97.6665 101.5 105.5 84.5001C111.333 75.5001 123.1 56.6001 123.5 53.0001C124 48.5001 154 22.0001 165 16.0001Z" fill={selectedColors.hairColor || "#cccccc"} />
        </svg>
      );
    } else if (lastSelected === "Curly") {
      setHairImage("https://hairs.softylus.com/wp-content/uploads/2025/02/CurlyImage.png");
      setSvgHairColor(
        <svg width="462" height="669" viewBox="0 0 462 669" fill="none" xmlns="http://www.w3.org/2000/svg" className="haircolor-svg">
          <path d="M168 16.0001C170.4 14.0001 187 7.8334 195 5.00006C207.4 -0.599918 226.833 5.32866e-05 235 1.00004L244.5 2.00004C247 2.50004 252.3 3.60004 253.5 4.00004C254.7 4.40004 256.333 6.1667 257 7.00004L259.5 12L262 8.50004C263 8.16671 265.8 7.10006 269 5.50006C273 3.50006 280 5.00006 282 5.50006C284 6.00006 304.5 14.5001 307 16.0001C309.5 17.5001 337 41.0001 339.5 43.5001C342 46.0001 365.5 81.0001 366.5 85.0001C367.5 89.0001 395 143 396.5 146C397.7 148.4 404 178 407 192.5V199.5C407 201.5 413 211 415 214.5C417 218 418.5 235 418.5 236.5C418.5 237.7 410.833 256.667 407 266L404.5 273.5V283.5C404.5 284.3 411.5 293.5 415 298L425 306C428 309 434.9 315.4 438.5 317C442.1 318.6 449.333 329.333 452.5 334.5L449.5 343.5L450.5 348.5L448 361.5C448.833 364.167 450 370.4 448 374C446 377.6 440.833 390.5 438.5 396.5C439.5 398.833 441.7 404 442.5 406C443.5 408.5 441.5 421.5 441.5 424.5C441.5 426.9 432.833 440.833 428.5 447.5C428.833 449 429.8 452.4 431 454C432.5 456 436.5 464 438.5 466C440.1 467.6 447.167 471 450.5 472.5L455.5 475L461.5 478V480.5C461 481.667 459.7 484 458.5 484C457 484 455.5 484.5 452.5 486C449.5 487.5 448 487 448 488C448 489 450.5 491 450.5 492C450.5 493 452.5 495 452.5 496.5C452.5 497.7 451.167 501 450.5 502.5C449.333 503.5 446.8 505.6 446 506C445.2 506.4 444.333 508.833 444 510C443.667 511.167 442.9 513.7 442.5 514.5C442 515.5 438.5 523.5 438.5 525.5C438.5 527.1 428.5 544.167 423.5 552.5L413 562C411.667 563.667 409 567.2 409 568C409 569 408.5 574.5 409 578C409.5 581.5 410.5 583.5 411.5 586C412.5 588.5 414.5 590 415.5 592C416.5 594 419.5 596.5 421.5 597.5C423.1 598.3 422.167 600.833 421.5 602L427 607.5L425 611C423 609.833 418.8 607.5 418 607.5C417 607.5 413.5 605 413 604C412.5 603 409 598.5 406 595C403.6 592.2 402.667 587.833 402.5 586C401.667 582.833 400.1 576.1 400.5 574.5C400.9 572.9 399 573.167 398 573.5C397.5 574 396.1 575.3 394.5 576.5C392.5 578 392.5 585 392 587C391.5 589 388.5 593.5 388 596.5C387.6 598.9 386.5 607.167 386 611C387.667 612.833 391.5 616.7 393.5 617.5C395.5 618.3 398.667 623.167 400 625.5C397.833 625.5 393 625.2 391 624C388.5 622.5 373.5 611.5 370 607.5C367.2 604.3 366.5 591.833 366.5 586C365.5 587 362.8 589.9 360 593.5C356.5 598 353.5 617.5 353.5 619C353.5 620.5 353.5 623.5 355 625.5C356.5 627.5 358.5 627.5 360 628.5C361.5 629.5 366.5 630.5 369 630.5C371 630.5 369.833 631.833 369 632.5L366.5 635.5L360 638.5L352 632.5L345 630.5L343.5 635.5L353.5 637V638.5V642.5L352 646.5L348 647.5C346.737 647.306 344.773 646.998 343.432 646.776C344.724 647.427 344.341 649.078 345 650L343.5 652.5C342.833 654.333 341.2 658.6 340 661C338.5 664 337 662.5 336 661C335 659.5 332 661 330.5 661H325C324.167 660 322.4 658 322 658C321.5 658 319.5 656.5 318 656.5C316.5 656.5 316 658 315 658C314 658 313.5 660 312.5 661C311.5 662 311 664.5 308.5 666.5C306 668.5 304 666.5 300 666.5C296 666.5 289 664.5 287 666.5C285.4 668.1 282.333 667.167 281 666.5L278 662.5C276.5 660.5 272.5 666.5 271 666.5C269.8 666.5 273.5 662.167 275.5 660C273 659.333 267.5 658.4 265.5 660C263 662 255 666.5 253 666.5H244.5C242.5 663.667 238.2 657.7 237 656.5C235.5 655 225 646.5 223.5 646.5H218C217.2 646.5 210.667 651.167 207.5 653.5C205.833 653.833 202.3 654.9 201.5 656.5C200.7 658.1 196.167 660.167 194 661C192.833 662.167 190 664.9 188 666.5C185.5 668.5 187 664.5 186 664.5C185 664.5 184 665 182 664.5C180 664 179.5 660 178 661C176.5 662 173 664.5 170.5 666.5C168 668.5 164 669 162 666.5C160.4 664.5 159 663 158.5 662.5L151.5 660C150 659.5 146.9 658.4 146.5 658C146 657.5 136.5 660.5 134 660C131.5 659.5 131 659 130 656.5C129.2 654.5 125.667 655.667 124 656.5C122.833 656.167 120.2 655.3 119 654.5C117.8 653.7 120.833 651.167 122.5 650L115.5 648C114.5 646.333 112.5 642.8 112.5 642V639C112.833 638.333 113.9 636.8 115.5 636C117.5 635 120 636.5 122.5 636C125 635.5 124 632.5 124 631.5C124 630.5 123.5 625 122.5 622.5C121.5 620 120 617 118 614.5C116 612 112.5 606.5 112.5 604C112.5 601.5 106.5 595 104.5 592C102.5 589 101 584 100.5 581C100.1 578.6 96.3333 575 94.5 573.5L87.5 584C85.5 587 85 590 83.5 593.5C82 597 81 598 75 600.5C69 603 68 604.5 64 606C60 607.5 52.5 608 49 608.5C45.5 609 43 607.5 41.5 606.5C39.9999 605.5 36 600 34 596.5C31.9999 593 36.5 595 38 593.5C39.5 592 43 591.5 48 590C53 588.5 52.5 588 54 587C55.5 586 57.5 583.5 59 581C60.5 578.5 60.5 574 63 570C65.5 566 63.5 564 63 561C62.6 558.6 61.1667 555.667 60.5 554.5C58.3333 558 53.7 565.6 52.5 568C51.3 570.4 49 572 48 572.5L41.5 575.5C39 576.5 33.3 579 30.5 581C27.7 583 24.3333 581.833 23 581L18 578.5C17.2 578.1 21 576.333 23 575.5C20.3333 575.833 14.6 576.3 13 575.5C11.4 574.7 6.33333 571.5 4 570C6 570.667 11 572.1 15 572.5C20 573 26.5 569.5 30.5 568C34.4999 566.5 38 560.5 39.5 558.5C40.7 556.9 41.3333 547.167 41.5 542.5L38 527C36.6667 525.5 34 522.1 34 520.5C34 518.5 32 514 30.5 512.5C28.9999 511 25.5 504.5 23 502C20.5 499.5 14.5 491.5 13 489.5C11.5 487.5 10.5 484 10 483C9.5 482 9.5 476 9.5 475.5C9.5 475 1.99996 466 0.999959 463.5C-4.06504e-05 461 1.49996 458 1.99996 455.5C2.39996 453.5 2.83329 452 2.99996 451.5L34 442C28.6666 441.667 17.7 441 16.5 441H12.5C11 441 9.49996 439.5 8.49996 439C7.49996 438.5 5.49996 436.5 4.49996 436.5C3.49996 436.5 3.99996 435 3.99996 434.5C3.99996 434 7.49996 431 8.49996 431C9.29996 431 12.5 431.667 14 432C16.8333 432.333 22.8 433 24 433C25.4999 433 32.5 430 30.5 430.5C28.5 431 21.5 428 20.5 427.5C19.7 427.1 18.5 425 18 424C18.8333 424.667 21.2 426.2 24 427C27.5 428 34.5 426.5 41.5 424C48.5 421.5 51.5 410.5 53 410C54.5 409.5 55 400 55 394C55 389.2 48.6666 377.667 45.5 372.5C42.6666 366.667 35.1 352.5 27.5 342.5C19.9 332.5 19.6666 323.667 20.5 320.5C21.3333 318.167 23.2 313.3 24 312.5C25 311.5 25.5 303.5 26 301.5C26.4 299.9 31.8333 294.167 34.5 291.5C46.3333 279.833 70.3 256.1 71.5 254.5C72.7 252.9 71 244.5 70 240.5C68.5 233.5 65.2001 217.8 64.0001 211C62.5001 202.5 64.0001 181.5 64.0001 178C64.0001 175.2 66.0001 170.167 67.0001 168L87.0001 120C90.8335 113 98.6001 98.2001 99.0001 95.0001C99.5001 91.0001 109.5 77.5001 115.5 66.5001C121.5 55.5001 139.5 38.5001 142.5 35.5001C145.5 32.5001 165 18.5001 168 16.0001Z" fill={selectedColors.hairColor || "#cccccc"} />
        </svg>
      );
    } else {
      setHairImage("https://hairs.softylus.com/wp-content/uploads/2025/02/StraightImage.png");
      setSvgHairColor(
        <svg width="299" height="631" viewBox="0 0 299 631" fill="none" xmlns="http://www.w3.org/2000/svg" className="haircolor-svg">
          <path d="M105.5 4.49999C109.5 3.29999 125.833 1.66665 133.5 0.999986C142.272 1.40798 155.208 -0.00257409 165 1C179.208 2.45478 189.56 6.51996 194 7.99999C201.5 10.5 226 30.5 230 33.5C234 36.5 253 64 255 66.5C256.6 68.5 264.333 86.3333 268 95C272.167 109.333 280.5 138.4 280.5 140C280.5 141.6 283.5 165.333 285 177L289 216L290.5 255.5L292 294.5L295 330L297.5 381.5L298.5 413.5V458.5C297.833 468 296.4 487.3 296 488.5C295.6 489.7 290.833 511.333 288.5 522C283.333 532.5 272.9 554.2 272.5 557C272 560.5 259.5 573.5 258.5 576C257.7 578 245.5 590.167 239.5 596C235.833 599.333 228.4 606.3 228 607.5C227.5 609 228.5 614.5 230.5 617C232.5 619.5 225 620.5 223 620C221 619.5 207.5 620 206.5 620C205.5 620 192 626 190.5 627C189 628 174.5 631 172.5 631C170.5 631 164.5 627.5 161 627.5C157.5 627.5 130.5 623 128.5 622.5C126.5 622 101 600.5 97.5 597C94 593.5 78 571 72 564.5C67.2 559.3 51 526 43.5 510C39.5 504.5 29.9 462.5 29.5 462C25.5 457 10.5 350 9.5 346C8.5 342 1.00003 239 1.00003 233C1.00003 227 2.71797e-05 175 4.00003 150C8.00003 125 14 109 18.5 96C23 83 31 70.5 39.5 55.5C48 40.5 75 20 76.5 18.5C78 17 100.5 5.99999 105.5 4.49999Z" fill={selectedColors.hairColor || "#cccccc"} />
        </svg>
      );
    }
  }, [lastSelected, selectedColors.hairColor]);

  return (
    <section className="HairColor-sec">
      <div className="HairColor-container" id="Haircolor">
        <div className="HairColor-image">
          <img key={lastSelected} src={hairImage} alt="Hair" />
          {svgHairColor}
        </div>
        <div className="HairColor-detail">
          <div className="HairColor-head">
            <h2>{getTranslation("base_hair_color", "Base Hair Color")}</h2>
            <p className="HairColor-subtitle">{getTranslation("select_base_color", "Select your base hair color")}</p>
          </div>

          {selectedColors.hairColor && (
            <div className="HairColor-selected-info">
              <div className="selected-color-preview" style={{ background: selectedColors.hairColor }}></div>
              <span>{selectedNameColors.hairColor}</span>
              {selectedPrice.hairColor > 0 && (
                <span className="selected-price">+{selectedPrice.hairColor} {getTranslation("currency_sar", "SAR")}</span>
              )}
              <button className="reset-color-button" onClick={handleResetColor}>
                {getTranslation("reset_color", "Reset")}
              </button>
            </div>
          )}

          <div className="HairColor-filters HairColor-filters-animate" key={`filters-${lastSelected}`}>
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

          <div className="HairColor-colors HairColor-colors-animate" key={`colors-${activeFilter}`}>
            {colorOptions[activeFilter]?.map((color) => (
              <div
                key={color.id}
                className={`color-option ${selectedColors.hairColor === color.color ? "active" : ""}`}
                onClick={() => {
                  handleColorSelect(color.color);
                  handlePriceSelect(color.price);
                  handleColorNameSelect(color.name);
                }}
              >
                <h5
                  className={selectedColors.hairColor === color.color ? "colorr-active" : ""}
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

export default HairColorBase;
