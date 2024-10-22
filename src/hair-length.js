import React, { useState } from 'react';
import plus from "./assets/plus.svg";
import Straight from "./assets/HairLength.png"; 
import Wavy from "./assets/WavyLingth.png"
import Curly from "./assets/CurlyLingth.png"
import "./HairLength.css";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const inchMarks = [
    { value: 12, label: '12' },
    { value: 14, label: '14' },
    { value: 16, label: '16' },
    { value: 18, label: '18' },
    { value: 20, label: '20' },
    { value: 22, label: '22' },
    { value: 24, label: '24' },
    { value: 26, label: '26' },
    { value: 28, label: '28' },
];

const cmMarks = [
    { value: 25, label: '25' },
    { value: 30, label: '30' },
    { value: 35, label: '35' },
    { value: 40, label: '40' },
    { value: 45, label: '45' },
    { value: 55, label: '55' },
    { value: 60, label: '60' },
    { value: 66, label: '66' },
    { value: 71, label: '71' },
];

const valuetext = (value, isCm) => {
    return (
        <>
            {isCm ? value.toFixed(1) : Math.round(value)}<br />
            <span>{isCm ? 'cm' : 'inches'}</span>
        </>
    );
};

const HairLength = ({setLength,length,setIsCm,isCm,lastSelected,getPriceLength}) => {
    const marks = isCm ? cmMarks : inchMarks; // Get marks based on the selected unit
    const handleSliderChange = (event, newValue) => {
        setLength(newValue);
    };

    const toggleUnit = () => {
        setIsCm(prev => !prev); // Toggle between inches and centimeters
        // If converting to cm, convert current length in inches to cm.
        if (!isCm) {
            setLength(Math.round(length * 2.54)); // Convert to cm
        } else {
            setLength(Math.round(length / 2.54)); // Convert to inches
        }
    };
    const getLengthIndicatorPosition = (currentLength) => {
        const maxSliderValue = isCm ? 75 : 30; // Maximum length based on selected unit
        const imageWidth = 400; // Image width in pixels
        const percentage = currentLength / maxSliderValue; // Calculate percentage of the length
        return `${percentage * imageWidth}px`; // Return pixel value for positioning
    };
    let hairImage;
    if (lastSelected.type === 'Straight') {
        hairImage = Straight;
    } else if (lastSelected.type === 'Wavy') {
        hairImage = Wavy;
    } else if (lastSelected.type === 'Curly') {
        hairImage = Curly;
    } else {
        // Default image if type is not recognized
        hairImage = Straight; // or any default image
    }
   
    return (
        <section className='HairLength-sec'>
            <div className='HairLength-container' id='Length'>
                <div className='HairLength-content'>
                    <h6>
                        <img src={plus} alt="Plus icon" /> Hair length - {valuetext(length, isCm)} <h6 className={`${getPriceLength() !== '0 SAR' ? getPriceLength() : 'zero-price'}`}>{getPriceLength() !== '0 SAR' ? getPriceLength() : null}</h6>
                    </h6>
                    <h5>Determine the desired hair length with the help of the regulator.</h5>
                    <p>
                        Please note that the hair length is measured in the straight state, regardless of the selected<br />
                        hair structure.
                    </p>

                    <div className='HairLength-buttons'>
                        <button className={`${isCm ? 'unactivebutton' : 'activebutton'}`} onClick={toggleUnit}>
                            Inch
                        </button>
                        <button className={`${isCm ? 'activebutton' : 'unactivebutton'}`} onClick={toggleUnit}>
                            Cm
                        </button>
                    </div>

                    <Box className="HairLength-Slider">
                        <Slider
                            aria-label="Hair Length Slider"
                            value={isCm ? length : length} // Keep length value, convert it later for display
                            onChange={handleSliderChange}
                            min={isCm ? 30 : 12} // Adjust min for cm
                            max={isCm ? 71 : 28} // Adjust max for cm
                            step={null}           // No intermediate steps; user can select only marked values
                            valueLabelDisplay="auto"
                            marks={marks}
                            valueLabelFormat={value => valuetext(value, isCm)} // Format display based on unit
                            sx={{
                                color: '#131313', // Slider rail and track color
                                '& .MuiSlider-thumb': {
                                    backgroundColor: '#131313', // Customize thumb color
                                    width: '55px',
                                    height: '55px',
                                    position: "relative",
                                    '&:hover': {
                                        boxShadow: "none" // No shadow on hover
                                    },
                                    '&::after': {
                                        content: '"+"',
                                        position: "absolute",
                                        top: '-8px',
                                        left: '32.5px',
                                        transform: 'translateX(-50%)',
                                        fontSize: '45px',
                                        color: 'white', // Or any suitable color to stand out
                                    }
                                },
                                '& .MuiSlider-track': {
                                    backgroundColor: '#131313',
                                },
                                '& .MuiSlider-rail': {
                                    backgroundColor: '#bbb', // Customize rail color
                                },
                                '& .MuiSlider-markLabel': {
                                    top: '65px', // Set the top position for mark labels
                                },
                            }}
                        />
                    </Box>
                </div>
                <div className='HairLength-image'>
                    <img src={hairImage} alt="Hair Length" />
                    <div className='HairLength-Length' style={{ top: getLengthIndicatorPosition(length) }}>
                        <div className='HairLength-Length-divider'></div>
                        <p>{valuetext(length, isCm)}</p> {/* Display formatted length */}
                        <h6 className={`${getPriceLength() !== '0 SAR' ? getPriceLength() : 'zero-price'}`}>{getPriceLength() !== '0 SAR' ? getPriceLength() : null}</h6>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HairLength;
