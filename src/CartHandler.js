import React, { useState } from 'react';
import Cart from "./assets/cart-plus.svg";
import Alert from "./assets/alert-3.svg"
const CartHandler = ({
  selectedColors,
  selectedNameColors,
  length,
  isCm,
  Density,
  lastSelected,
  selectedCard,
  lastSelectedTab,
  selectedColor,
  selectedOptions,
  selectedOptionsSilkTop,
  selectedOptionsBK,
  measurements,
  basePrice,
  totalPrice
}) => {
  const [error, setError] = useState(null);

  const hairTypes = {
    Straight: ["Silk Straight", "Kinky Straight", "Yaki Straight"],
    Wavy: ["Deep Wave", "Body Wave", "Water Wave"],
    Curly: ["Curly", "Jerry/Kinky Curl"],
  };
  
  const labels = {
    Front: ["With Stretch Back", "Mono Top", "With Weft Back"],
    Full: ["With Adhesive", "Without Adhesive", "Mono Top", "Medical with Silk Top"],
    Silk: ["Silk Top with Adhesive", "Silk Top No Adhesive", "Medical Silk Top"],
  };

  const validateFields = () => {
    // Check required measurements
    if (!measurements.circumference || 
        !measurements.frontToNape || 
        !measurements.forehead || 
        !measurements.siteToSite || 
        !measurements.neckWidth || 
        !measurements.head) {
      setError("All measurements are required");
      return false;
    }

    // Check length
    if (!length) {
      setError("Length is required");
      return false;
    }

    // Check Density
    if (!Density) {
      setError("Density is required");
      return false;
    }

    // Check hair color
    if (!selectedNameColors?.hairColor) {
      setError("Hair color is required");
      return false;
    }

    // Check hair type selection
    if (!lastSelected?.type || !hairTypes[lastSelected.type]) {
      setError("Hair type is required");
      return false;
    }

    // Check tab selection
    if (!Object.values(lastSelectedTab).some(value => value !== 0)) {
      setError("Please select a style option");
      return false;
    }

    // Check lace tone
    if (!selectedColor?.name) {
      setError("Lace tone is required");
      return false;
    }

    setError(null);
    return true;
  };

  const handleAddToCart = async () => {
    if (!validateFields()) {
      return;
    }

    const currentNetType = Object.entries(lastSelectedTab)
      .reverse()
      .find(([_, value]) => value !== 0)?.[0] || selectedCard || "Front";
    const currentOption = labels[currentNetType][lastSelectedTab[currentNetType]];

    const addons = [
      {
        name: "Hair colour",
        value: selectedNameColors.hairColor,
        price: "",
        field_type: "multiple_choice"
      },
      {
        name: "Hair Type",
        value: lastSelected.type ? 
          `${hairTypes[lastSelected.type][lastSelected.index]}` : "",
        price: "",
        field_type: "custom_text"
      },
      {
        name: "Length Type",
        value: `${length}${isCm ? ' cm' : ''}`,
        price: "",
        field_type: "multiple_choice"
      },
      {
        name: "Hair density",
        value: `${Density}`,
        price: "",
        field_type: "multiple_choice"
      },
      {
        name: "Hair Lace",
        value: currentOption || "",
        price: "",
        field_type: "custom_text"
      },
      {
        name: "Lace tone",
        value: selectedColor?.name,
        price: "",
        field_type: "custom_text"
      }
    ];

    if (selectedOptionsSilkTop.length > 0) {
      addons.push({
        name: "Silk-Top",
        value: selectedOptionsSilkTop[0],
        price: "60",
        field_type: "multiple_choice"
      });
    }

    if (selectedOptions.length > 0) {
      selectedOptions.forEach(option => {
        addons.push({
          name: "PU edge",
          value: option,
          price: "30",
          field_type: "checkbox"
        });
      });
    }

    if (selectedOptionsBK.length > 0) {
      addons.push({
        name: "Bleached knots",
        value: selectedOptionsBK[0],
        price: "30",
        field_type: "checkbox"
      });
    }

    if (measurements.circumference) {
      addons.push(
        {
          name: "Head measurements - Circumference",
          value: measurements.circumference.toString(),
          field_type: "custom_text"
        },
        {
          name: "Head measurements - Front to nape",
          value: measurements.frontToNape.toString(),
          field_type: "custom_text"
        },
        {
          name: "Head measurements - Forehead (ear to ear)",
          value: measurements.forehead.toString(),
          field_type: "custom_text"
        },
        {
          name: "Head measurements - Site to site",
          value: measurements.siteToSite.toString(),
          field_type: "custom_text"
        },
        {
          name: "Head measurements - Neck width",
          value: measurements.neckWidth.toString(),
          field_type: "custom_text"
        },
        {
          name: "Head (ear to ear)",
          value: measurements.head.toString(),
          field_type: "custom_text"
        }
      );
    }

    try {
      const response = await fetch('/wp-json/wc/v3/cart/add-item-with-addons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: 801,
          quantity: 1,
          addons: addons
        })
      });
      const data = await response.json();
      if (data.success) {
        window.location.reload();
      }
    } catch (error) {
      setError('Failed to add item to cart. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="">
      
      <button 
        onClick={handleAddToCart}
        className="w-full h-16 flex items-center justify-center gap-2.5 font-outfit text-lg bg-transparent border border-gray-900 cursor-pointer hover:bg-gray-100 transition-colors"
      >
        <img src={Cart} alt="Add to Cart Icon" />
        <p>Add to Cart</p>
      </button>
      {error && (
        <div className="text-red-500 text-sm mb-2 text-center error-alert">
          <img src={Alert}/>  {error}
        </div>
      )}
    </div>
  );
};

export default CartHandler;