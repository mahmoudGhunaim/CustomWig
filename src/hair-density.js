import React ,{useState}from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import plus from "./assets/plus.svg";
import HairDensitya from "./assets/HairDensity.png"
import "./HairDensity.css"
const marks = [
  {
    value: 60,
    label: "60%",
  },
  {
    value: 80,
    label: "80%",
  },
  {
    value: 90,
    label: "90%",
  },
  {
    value: 100,
    label: "100%",
  },
  {
    value: 120,
    label: "120%",
  },
  {
    value: 150,
    label: "150%",
  },
];

const valuetext = (value) => {
  return `${value} %`;
};

const HairDensity = ({ Density, setDensity,getPriceDensity }) => {

  const handleSliderChange = (event, newValue) => {
    setDensity(newValue);
  };
  
  return (
    <section className="HairDensity-sec">
      <div className="HairDensity-container" id="Hairdensity">
        <div className="HairDensity-content">
          <h6>
            <img src={plus} alt="Plus icon" /> Hair density <h6 className={`${getPriceDensity() !== '0 SAR' ? getPriceDensity() : 'zero-price'}`}>{getPriceDensity() !== '0 SAR' ? getPriceDensity() : null}</h6>

          </h6>
          <p>
            The human hair is evenly distributed and knotted into the lace by
            hand. Determine the desired hair density (knot density) using the
            regulator. As a standard we use a hair density of 80%.
          </p>
          <Box className="HairDensity-Slider">
            <Slider
              aria-label="Hair Density Slider"
              value={Density}
              getAriaValueText={valuetext}
              onChange={handleSliderChange} // Handle changes
              step={null} // No steps
              valueLabelDisplay="auto"
              marks={marks}
              min={60}
              max={150}
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
        <div className="HairDensity-image">
          <img src={HairDensitya} />
        </div>
      </div>
    </section>
  );
};

export default HairDensity;
