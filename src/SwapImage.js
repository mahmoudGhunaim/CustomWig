import React, { useState, useEffect, useRef } from 'react';

const SwapImage = ({ src, alt }) => {
  const [key, setKey] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);
    setKey(prev => prev + 1);
  }, [src]);

  const handleImageLoad = (e) => {
    const img = e.target;
    setContainerHeight(img.offsetHeight);
    setIsLoading(false);
  };

  return (
    <div
      className="swap-image-container"
      style={{ minHeight: containerHeight > 0 ? `${containerHeight}px` : 'auto' }}
    >
      <img
        ref={imgRef}
        key={key}
        src={src}
        alt={alt}
        className={`swap-image ${isLoading ? 'loading' : ''}`}
        onLoad={handleImageLoad}
      />
      <style jsx="true">{`
        .swap-image-container {
          width: 100%;
          position: relative;
          transition: min-height 0.3s ease;
        }

        .swap-image {
          animation: fadeIn 0.9s ease-in-out;
          opacity: 1;
          width: 100%;
          display: block;
        }

        .swap-image.loading {
          opacity: 0;
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