import React, { useState } from 'react';
import Cart from "./assets/cart-plus.svg";
import Alert from "./assets/alert-3.svg";
import getTranslation from './utils/translations';

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
  selectedOptionsBK,
  measurements,
  silkTopOption,
  hairLace
}) => {
  const [error, setError] = useState(null);


  // const labels = {
  //   Front: [getTranslation("premium_front_lace_wig", "Premium Front Lace Wig"), ""],
  //   Full: [getTranslation("premium_full_lace_wig", "Premium Full Lace Wig"), ""],
  //   Silk: [getTranslation("front_lace_silk_top", "Front lace silk top"), getTranslation("folded_seamless_hairline", "Folded seamless hairline")],
  // };
  console.log(hairLace, "hairLace")
  const validateFields = () => {
    if (!measurements.circumference ||
      !measurements.frontToNape ||
      !measurements.forehead ||
      !measurements.siteToSite ||
      !measurements.neckWidth ||
      !measurements.head) {
      setError(getTranslation("measurements_required", "All measurements are required"));
      return false;
    }

    if (!length) {
      setError(getTranslation("length_required", "Length is required"));
      return false;
    }

    if (!Density) {
      setError(getTranslation("density_required", "Density is required"));
      return false;
    }

    if (!selectedNameColors?.hairColor) {
      setError(getTranslation("hair_color_required", "Hair color is required"));
      return false;
    }

    if (!lastSelected) {
      setError(getTranslation("hair_type_required", "Hair type is required"));
      return false;
    }

    if (!selectedColor?.name) {
      setError(getTranslation("lace_tone_required", "Lace tone is required"));
      return false;
    }

    setError(null);
    return true;
  };

  const handleAddToCart = async () => {
    if (!validateFields()) {
      return;
    }

    // const currentNetType = Object.entries(lastSelectedTab)
    //   .reverse()
    //   .find(([_, value]) => value !== 0)?.[0] || selectedCard || "Front";
    // const currentOption = labels[currentNetType][lastSelectedTab[currentNetType]];

    const addons = [
      {
        name: getTranslation("hair_color", "Hair colour"),
        value: selectedNameColors.hairColor,
        price: "",
        field_type: "multiple_choice"
      },
      {
        name: getTranslation("hair_type", "Hair Type"),
        value: lastSelected ?
          `${lastSelected}` : "",
        price: "",
        field_type: "custom_text"
      },
      {
        name: getTranslation("length_type", "Length Type"),
        value: `${length}${isCm ? getTranslation("cm", "cm") : ''}`,
        price: "",
        field_type: "multiple_choice"
      },
      {
        name: getTranslation("hair_density", "Hair density"),
        value: `${Density}`,
        price: "",
        field_type: "multiple_choice"
      },
      {
        name: getTranslation("hair_lace", "Hair Lace"),
        value: hairLace || "",
        price: "",
        field_type: "custom_text"
      },
      {
        name: getTranslation("lace_tone", "Lace tone"),
        value: selectedColor?.name,
        price: "",
        field_type: "custom_text"
      }
    ];

    if (selectedOptions.length > 0) {
      selectedOptions.forEach(option => {
        addons.push({
          name: getTranslation("pu_edge", "PU edge"),
          value: option,
          price: "30",
          field_type: "checkbox"
        });
      });
    }

    if (selectedOptionsBK.length > 0) {
      addons.push({
        name: getTranslation("bleached_knots", "Bleached knots"),
        value: selectedOptionsBK[0],
        price: "30",
        field_type: "checkbox"
      });
    }

    if (silkTopOption) {
      addons.push({
        name: getTranslation("silk_top_option", "Silk Top Option"),
        value: silkTopOption,
        price: "",
        field_type: "custom_text"
      });
    }

    if (measurements.circumference) {
      addons.push(
        {
          name: getTranslation("head_measurement_circumference", "Head measurements - Circumference"),
          value: measurements.circumference.toString(),
          field_type: "custom_text"
        },
        {
          name: getTranslation("head_measurement_front_nape", "Head measurements - Front to nape"),
          value: measurements.frontToNape.toString(),
          field_type: "custom_text"
        },
        {
          name: getTranslation("head_measurement_forehead", "Head measurements - Forehead (ear to ear)"),
          value: measurements.forehead.toString(),
          field_type: "custom_text"
        },
        {
          name: getTranslation("head_measurement_site", "Head measurements - Site to site"),
          value: measurements.siteToSite.toString(),
          field_type: "custom_text"
        },
        {
          name: getTranslation("head_measurement_neck", "Head measurements - Neck width"),
          value: measurements.neckWidth.toString(),
          field_type: "custom_text"
        },
        {
          name: getTranslation("head_measurement_ear", "Head (ear to ear)"),
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
      setError(getTranslation("cart_error", "Failed to add item to cart. Please try again."));
      console.error('Error:', error);
    }
  };

  return (
    <div className="">
      <button
        onClick={handleAddToCart}
        className="w-full h-16 flex items-center justify-center gap-2.5 font-outfit text-lg bg-transparent border border-gray-900 cursor-pointer hover:bg-gray-100 transition-colors"
      >
        <img src="https://hairs.softylus.com/wp-content/uploads/2025/12/cart-plus.svg" alt={getTranslation("cart_icon", "Add to Cart Icon")} />
        <p>{getTranslation("add_to_cart", "Add to Cart")}</p>
      </button>
      {error && (
        <div className="text-red-500 text-sm mb-2 text-center error-alert">
          <img src={Alert} alt={getTranslation("alert_icon", "Alert Icon")} /> {error}
        </div>
      )}
    </div>
  );
};

export default CartHandler;