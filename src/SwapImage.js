import React, { useState, useEffect } from 'react';

const SwapImage = ({ src, alt }) => {
  const [key, setKey] = useState(0);
  
  useEffect(() => {
    setKey(prev => prev + 1);
  }, [src]);

  return (
    <div className="swap-image-container">
      <img 
        key={key}
        src={src}
        alt={alt}
        className="swap-image"
      />
      <style jsx="true">{`
        .swap-image-container {
          width: 100%;
          height: 100%;
          position: relative;
        }
        
        .swap-image {
          animation: fadeIn 0.9s ease-in-out;
           opacity: 1;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default SwapImage;