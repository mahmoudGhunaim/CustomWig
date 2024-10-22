import React, { useState } from 'react';
import plus from "./assets/plus.svg";
import check_circle from "./assets/check-circle.svg";
import "./SilkTop.css"

const SilkTop = ({setSelectedOptionsSilkTop,selectedOptionsSilkTop,getPriceSilkTop}) => {

    const handleSelect = (option) => {
        if (option === 'Without') {
          setSelectedOptionsSilkTop([]);
        } else if (selectedOptionsSilkTop.includes(option)) {
          setSelectedOptionsSilkTop(selectedOptionsSilkTop.filter(o => o !== option));
        } else {
          const newSelections = [...selectedOptionsSilkTop, option];
          setSelectedOptionsSilkTop(newSelections);
        }
      };
      
      
  return (
<section className='SilkTop-sec' id='ST'>
      <div className='SilkTop-container'>
        <div className='SilkTop-content'>
        <h2>
            <img src={plus} alt="Plus icon" />
            Silk-Top 
            {selectedOptionsSilkTop.length === 0 && <span>*optional</span>}
            {selectedOptionsSilkTop.length > 0 && <h6>{getPriceSilkTop()}</h6>}
          </h2>
                    <p>Optionally, choose a silk top for the top head area. The breathable fine mesh quality of the silk-tops creates a very natural look even when looking at it closely. Also
                    enjoy the advantage of being able to determine the hair parting itself, which is often difficult for standard mesh variants due to the material used.</p>
        </div>
        <div className='SilkTop-select'>
          <button 
            className={selectedOptionsSilkTop.length === 0 ? "SilkTop-button-selected" : ""} 
            onClick={() => handleSelect('Without')}
          >
            Without
          </button>
          <button 
            className={selectedOptionsSilkTop.includes('Silk-Top') ? "SilkTop-button-selected" : ""}
            onClick={() => handleSelect('Silk-Top')}
          >
            Silk-Top
          </button>
         
        </div>
      </div>
    </section>
  )
}

export default SilkTop
