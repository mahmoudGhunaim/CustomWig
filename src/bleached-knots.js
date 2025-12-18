import React, { useState } from 'react';
import plus from "./assets/plus.svg";
import check_circle from "./assets/check-circle.svg";
import "./bleached-knots.css"
import getTranslation from "./utils/translations";

const BleachedKnots = ({ setSelectedOptionsBK, selectedOptionsBK, getPriceBleachedKnots, selectedCard }) => {

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
    <section className='BleachedKnots-sec' id='BK' style={{ display: selectedCard === 'Front' || selectedCard === 'Full' ? 'flex' : 'none' }}>

      <div className='BleachedKnots-container'>
        <div className='BleachedKnots-content'>
          <h2>
            <img src="https://hairs.softylus.com/wp-content/uploads/2025/12/plus.svg" alt={getTranslation('plus_icon_alt', 'Plus icon')} />
            {getTranslation('bleached_knots', 'Bleached knots')}
            {selectedOptionsBK.length === 0 && (
              <span>*{getTranslation('optional', 'optional')}</span>
            )}
            {selectedOptionsBK.length > 0 && (
              <h6>
                {getPriceBleachedKnots().replace(' SAR', '')} {getTranslation('currency_sar', 'SAR')}
              </h6>
            )}
          </h2>
          <p>
            {getTranslation(
              'bleached_knots_description',
              'Optionally, choose bleached knots for an even more natural look. To ensure optimum strength of the knots, we only bleach the visible hair line.'
            )}
          </p>
        </div>
        <div className='BleachedKnots-select'>
          <button
            className={selectedOptionsBK.length === 0 ? "BleachedKnots-button-selected" : ""}
            onClick={() => handleSelect('Without')}
          >
            {getTranslation('without', 'Without')}
          </button>
          <button
            className={selectedOptionsBK.includes('Bleached') ? "BleachedKnots-button-selected" : ""}
            onClick={() => handleSelect('Bleached')}
          >
            {getTranslation('bleached', 'Bleached')}
          </button>

        </div>
      </div>
    </section>
  )
}

export default BleachedKnots
