import React, { useState } from 'react';
import plus from "./assets/plus.svg";
import check_circle from "./assets/check-circle.svg";
import "./PUedge.css";

const PUedge = ({setSelectedOptions , selectedOptions,getPricePUedge}) => {
  
  const handleSelect = (option) => {
    if (option === 'Without') {
      setSelectedOptions([]);
    } else if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(o => o !== option));
    } else {
      const newSelections = [...selectedOptions, option];
      setSelectedOptions(newSelections);
    }
  };
  
 

  return (
    <section className='PUedge-sec' id='PU'>
      <div className='PUedge-container'>
        <div className='PUedge-content'>
        <h2>
            <img src={plus} alt="Plus icon" />
            PU edge 
            {selectedOptions.length === 0 && <span>*optional</span>}
            {selectedOptions.length > 0 && <h6>{getPricePUedge()}</h6>}
          </h2>
                    <p>Optionally select a PU edge for the hair line. A PU edge makes it easier to apply your lace wig with adhesive or adhesive strips and ensures a high strength.</p>
        </div>
        <div className='PUedge-select'>
          <button 
            className={selectedOptions.length === 0 ? "PUedge-button-selected" : ""} 
            onClick={() => handleSelect('Without')}
          >
            Without
          </button>
          <button 
            className={selectedOptions.includes('Front') ? "PUedge-button-selected" : ""}
            onClick={() => handleSelect('Front')}
          >
            Front
          </button>
          <button 
            className={selectedOptions.includes('Back') ? "PUedge-button-selected" : ""}
            onClick={() => handleSelect('Back')}
          >
            Back
          </button>
        </div>
      </div>
    </section>
  );
}

export default PUedge;
