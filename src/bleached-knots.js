import React, { useState } from 'react';
import plus from "./assets/plus.svg";
import check_circle from "./assets/check-circle.svg";
import "./bleached-knots.css"
const BleachedKnots = ({setSelectedOptionsBK,selectedOptionsBK,getPriceBleachedKnots}) => {

    const handleSelect = (option) => {
        if (option === 'Without') {
          setSelectedOptionsBK([]);
        } else if (selectedOptionsBK.includes(option)) {
          setSelectedOptionsBK(selectedOptionsBK.filter(o => o !== option));
        } else {
          const newSelections = [...selectedOptionsBK, option];
          setSelectedOptionsBK(newSelections);
        }
      };
      
      
  return (
<section className='BleachedKnots-sec' id='BK'>
      <div className='BleachedKnots-container'>
        <div className='BleachedKnots-content'>
        <h2>
            <img src={plus} alt="Plus icon" />
            Bleached knots 
            {selectedOptionsBK.length === 0 && <span>*optional</span>}
            {selectedOptionsBK.length > 0 && <h6>{getPriceBleachedKnots()}</h6>}
          </h2>
                    <p>Optionally, choose bleached knots for an even more natural look. To ensure optimum strength of the knots, we only bleach the visible hair line.</p>
        </div>
        <div className='BleachedKnots-select'>
          <button 
            className={selectedOptionsBK.length === 0 ? "BleachedKnots-button-selected" : ""} 
            onClick={() => handleSelect('Without')}
          >
            Without
          </button>
          <button 
            className={selectedOptionsBK.includes('Bleached') ? "BleachedKnots-button-selected" : ""}
            onClick={() => handleSelect('Bleached')}
          >
            Bleached
          </button>
         
        </div>
      </div>
    </section>
  )
}

export default BleachedKnots
