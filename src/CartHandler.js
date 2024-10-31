import React from 'react';
import Cart from "./assets/cart-plus.svg"

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
  measurements
}) => {
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
  const handleAddToCart = async () => {
    const currentNetType = Object.entries(lastSelectedTab)
      .reverse()
      .find(([_, value]) => value !== 0)?.[0] || selectedCard || "Front";
    const currentOption = labels[currentNetType][lastSelectedTab[currentNetType]];
    // Prepare addons data
    const addons = [
      // Hair Color
      {
        name: "Hair colour",
        value: selectedNameColors.hairColor || "",
        price: "",
        field_type: "multiple_choice"
      },
      // Hair Type
      {
        name: "Hair Type",
        value: lastSelected.type ? 
          `${hairTypes[lastSelected.type][lastSelected.index]}` : "",
        price: "",
        field_type: "custom_text"
      },
      // Length Type
      {
        name: "Length Type",
        value: `${length}${isCm ? ' cm' : ''}`,
        price: "",
        field_type: "multiple_choice"
      },
      // Hair Density
      {
        name: "Hair density",
        value: `${Density}`,
        price: "",
        field_type: "multiple_choice"
      },
      // Hair Lace
      {
        name: "Hair Lace",
        value: currentOption || "",
        price: "",
        field_type: "custom_text"
      },
      // Lace Tone
      {
        name: "Lace tone",
        value: selectedColor?.name || "",
        price: "",
        field_type: "custom_text"
      }
    ];
    // Add Silk-Top if selected
    if (selectedOptionsSilkTop.length > 0) {
      addons.push({
        name: "Silk-Top",
        value: selectedOptionsSilkTop[0],
        price: "60",
        field_type: "multiple_choice"
      });
    }
    // Add PU edge if selected
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
    // Add Bleached knots if selected
    if (selectedOptionsBK.length > 0) {
      addons.push({
        name: "Bleached knots",
        value: selectedOptionsBK[0],
        price: "30",
        field_type: "checkbox"
      });
    }
    // Add measurements if provided
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
    // fetch('/wp-json/wc/v3/cart/add-item-with-addons'
    try {
      const response = await fetch('/wp-json/wc/v3/cart/add-item-with-addons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: 801, // Your product ID
          quantity: 1,
          addons: addons
        })
      });
      const data = await response.json();
      if (data.success) {
        alert('Product added to cart successfully!');
        // Optionally trigger cart update or redirect
      } else {
        alert('Error adding product to cart. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding product to cart. Please try again.');
    }
  };
  return (
    <button 
      onClick={handleAddToCart}
      className="w-full h-16 flex items-center justify-center gap-2.5 font-outfit text-lg bg-transparent border border-gray-900 cursor-pointer"
    >
     <img src={Cart} alt="Add to Cart Icon" />
     <p>Add to Cart</p>
    </button>
  );
};
export default CartHandler;