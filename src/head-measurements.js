import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Headmeasurements from "./assets/Headmeasurements.png";
import Fronttonape from "./assets/Fronttonape.png";
import Circumference from "./assets/Circumference.png";
import Neckwidth from "./assets/Neckwidth.png";
import Sitetosite from "./assets/Sitetosite.png";
import Head from "./assets/Head.png";
import Forehead from "./assets/Forehead.png";
import Blackalert from "./assets/Blackalert.png";
import reload from "./assets/reload.png";
import Small from "./assets/Small.png";
import Medium from "./assets/Medium.png";
import Large from "./assets/Large.png";
import HeadMs from "./assets/headms.png";
import "./HeadMeasurements.css";
import Bluecircle from "./assets/blue-circle.png";
import getTranslation from "./utils/translations"; // Import your translation utility
import info from "./assets/info.png";
const HeadMeasurements = ({ measurements, setMeasurements }) => {
  const [unit, setUnit] = useState("inch");
  const [size, setSize] = useState("small");

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
  };

  const handleSizeChange = (newSize) => {
    setSize(newSize);
    let newMeasurements;

    if (newSize === "small") {
      newMeasurements = {
        circumference: 19.0,
        frontToNape: 10.5,
        forehead: 11.5,
        head: 12.5,
        siteToSite: 10.0,
        neckWidth: 5.0,
      };
    } else if (newSize === "medium") {
      newMeasurements = {
        circumference: 21.0,
        frontToNape: 11.5,
        forehead: 12.5,
        head: 13.5,
        siteToSite: 11.0,
        neckWidth: 5.5,
      };
    } else if (newSize === "large") {
      newMeasurements = {
        circumference: 23.0,
        frontToNape: 12.5,
        forehead: 13.5,
        head: 14.5,
        siteToSite: 12.0,
        neckWidth: 6.0,
      };
    } else if (newSize === "Custom") {
      newMeasurements = {
        circumference: 23.0,
        frontToNape: 12.5,
        forehead: 13.5,
        head: 14.5,
        siteToSite: 12.0,
        neckWidth: 6.0,
      };
    }
    setMeasurements(newMeasurements);
  };

  const convertToCm = (inches) => {
    return (inches * 2.54).toFixed(1);
  };

  const convertToInch = (cm) => {
    return (cm / 2.54).toFixed(1);
  };

  const handleMeasurementChange = (event, measurement) => {
    const value = parseFloat(event.target.value);
    setMeasurements((prevMeasurements) => ({
      ...prevMeasurements,
      [measurement]: value,
    }));
  };

  const generateOptions = (start, count, step = 0.1) => {
    return [...Array(count)].map((_, i) => {
      const value = (start + i * step).toFixed(1);
      const displayValue =
        unit === "inch" ? value : convertToCm(parseFloat(value));
      return (
        <option key={i} value={value}>
          {displayValue}
        </option>
      );
    });
  };

  useEffect(() => {
    // Force re-render of options when unit changes
    setMeasurements({ ...measurements });
  }, [unit]);

  return (
    <section className="HeadMeasurements-sec">
      <div className="HeadMeasurements-container" id="Measurements">
        <div className="HeadMeasurements-banner">
          <img
            src="https://hairs.softylus.com/wp-content/uploads/2025/02/headms.png"
            alt="Head measurements"
            style={{ display: size === "Custom" ? "none" : "" }}
            className="HeadMs-image"
          />
          <div
            className="HeadMeasurements-container-size-cards"
            style={{ display: size === "Custom" ? "grid" : "none" }}
          >
            <div className="HeadMeasurements-size-cards">
              <div className="HeadMeasurements-size-cards-info">
                <div className="HeadMeasurements-size-cards-info-content">
                  <div
                    data-tooltip={getTranslation(
                      "circumference_instruction",
                      "Place the tape measure on the head behind an ear and measure in circles across the forehead along the hairline up to the hairline in the neck and back to the support point behind the ear."
                    )}
                  ></div>
                </div>
                <img src={info} />
              </div>
              <img
                src={Circumference}
                alt={getTranslation("circumference", "Circumference")}
              />
              <h5>{getTranslation("circumference", "Circumference")}</h5>
              <div className="HeadMeasurements-select">
                <select
                  value={(measurements.circumference || 0).toFixed(1)}
                  onChange={(e) => handleMeasurementChange(e, "circumference")}
                >
                  {generateOptions(18, 51)}
                </select>
                <h4>{unit}</h4>
              </div>
              {/* <p>
                
              </p> */}
            </div>
            <div className="HeadMeasurements-size-cards">
              <div className="HeadMeasurements-size-cards-info">
                <div className="HeadMeasurements-size-cards-info-content">
                  <div
                    data-tooltip={getTranslation(
                      "front_to_nape_instruction",
                      "Measure over the center of your head along the hairline of the forehead to the hairline at the neck."
                    )}
                  ></div>
                </div>
                <img src={info} />
              </div>

              <img
                src={Fronttonape}
                alt={getTranslation("front_to_nape", "Front to nape")}
              />
              <h5>{getTranslation("front_to_nape", "Front to nape")}</h5>
              <div className="HeadMeasurements-select">
                <select
                  value={(measurements.frontToNape || 0).toFixed(1)}
                  onChange={(e) => handleMeasurementChange(e, "frontToNape")}
                >
                  {generateOptions(9, 36)}
                </select>
                <h4>{unit}</h4>
              </div>
            </div>
            <div className="HeadMeasurements-size-cards">
              <div className="HeadMeasurements-size-cards-info">
                <div className="HeadMeasurements-size-cards-info-content">
                  <div
                    data-tooltip={getTranslation(
                      "forehead_instruction",
                      "Measure at the hairline of the forehead from ear to ear."
                    )}
                  ></div>
                </div>
                <img src={info} />
              </div>
              <img
                src={Forehead}
                alt={getTranslation("forehead", "Forehead")}
              />
              <h5>
                {getTranslation("forehead", "Forehead")} (
                {getTranslation("ear_to_ear", "ear to ear")})
              </h5>
              <div className="HeadMeasurements-select">
                <select
                  value={(measurements.forehead || 0).toFixed(1)}
                  onChange={(e) => handleMeasurementChange(e, "forehead")}
                >
                  {generateOptions(8, 56)}
                </select>
                <h4>{unit}</h4>
              </div>
            </div>
            <div className="HeadMeasurements-size-cards">
              <div className="HeadMeasurements-size-cards-info">
                <div className="HeadMeasurements-size-cards-info-content">
                  <div
                    data-tooltip={getTranslation(
                      "head_instruction",
                      "Measure the hairline from ear to ear over the top head."
                    )}
                  ></div>
                </div>
                <img src={info} />
              </div>
              <img src={Head} alt={getTranslation("head", "Head")} />
              <h5>
                {getTranslation("head", "Head")} (
                {getTranslation("ear_to_ear", "ear to ear")})
              </h5>
              <div className="HeadMeasurements-select">
                <select
                  value={(measurements.head || 0).toFixed(1)}
                  onChange={(e) => handleMeasurementChange(e, "head")}
                >
                  {generateOptions(9, 56)}
                </select>
                <h4>{unit}</h4>
              </div>
            </div>
            <div className="HeadMeasurements-size-cards">
              <div className="HeadMeasurements-size-cards-info">
                <div className="HeadMeasurements-size-cards-info-content">
                  <div
                    data-tooltip={getTranslation(
                      "site_to_site_instruction",
                      "Measure from the hairline at the temples up to the back of the head."
                    )}
                  ></div>
                </div>
                <img src={info} />
              </div>
              <img
                src={Sitetosite}
                alt={getTranslation("site_to_site", "Site to site")}
              />
              <h5>{getTranslation("site_to_site", "Site to site")}</h5>
              <div className="HeadMeasurements-select">
                <select
                  value={(measurements.siteToSite || 0).toFixed(1)}
                  onChange={(e) => handleMeasurementChange(e, "siteToSite")}
                >
                  {generateOptions(9, 31)}
                </select>
                <h4>{unit}</h4>
              </div>
            </div>
            <div className="HeadMeasurements-size-cards">
              <div className="HeadMeasurements-size-cards-info">
                <div className="HeadMeasurements-size-cards-info-content">
                  <div
                    data-tooltip={getTranslation(
                      "neck_width_instruction",
                      "Measure the width of the hairline in the neck."
                    )}
                  ></div>
                </div>
                <img src={info} />
              </div>
              <img
                src={Neckwidth}
                alt={getTranslation("neck_width", "Neck width")}
              />
              <h5>{getTranslation("neck_width", "Neck width")}</h5>
              <div className="HeadMeasurements-select">
                <select
                  value={(measurements.neckWidth || 0).toFixed(1)}
                  onChange={(e) => handleMeasurementChange(e, "neckWidth")}
                >
                  {generateOptions(3, 31)}
                </select>
                <h4>{unit}</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="HeadMeasurements-size">
          <h2>{getTranslation("head_measurements", "Head Measurements")}</h2>
          <div className="HeadMeasurements-options">
            <button
              onClick={() => handleSizeChange("small")}
              className={size === "small" ? "active" : ""}
            >
              {getTranslation("small", "Small")}
            </button>
            <button
              onClick={() => handleSizeChange("medium")}
              className={size === "medium" ? "active" : ""}
            >
              {getTranslation("medium", "Medium")}
            </button>
            <button
              onClick={() => handleSizeChange("large")}
              className={size === "large" ? "active" : ""}
            >
              {getTranslation("large", "Large")}
            </button>
            <button
              onClick={() => handleSizeChange("Custom")}
              className={size === "Custom" ? "active" : ""}
            >
              {getTranslation("Custom", "Custom")}
            </button>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="head measurements table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    {getTranslation("circumference", "Circumference")}
                  </TableCell>
                  <TableCell>
                    {getTranslation("front_to_nape", "Front to nape")}
                  </TableCell>
                  <TableCell>
                    {getTranslation("forehead", "Forehead")}
                  </TableCell>
                  <TableCell>{getTranslation("head", "Head")}</TableCell>
                  <TableCell>
                    {getTranslation("site_to_site", "Site to site")}
                  </TableCell>
                  <TableCell>
                    {getTranslation("neck_width", "Neck width")}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    {(measurements.circumference || 0).toFixed(1)} inch
                  </TableCell>
                  <TableCell>
                    {(measurements.frontToNape || 0).toFixed(1)} inch
                  </TableCell>
                  <TableCell>
                    {(measurements.forehead || 0).toFixed(1)} inch
                  </TableCell>
                  <TableCell>
                    {(measurements.head || 0).toFixed(1)} inch
                  </TableCell>
                  <TableCell>
                    {(measurements.siteToSite || 0).toFixed(1)} inch
                  </TableCell>
                  <TableCell>
                    {(measurements.neckWidth || 0).toFixed(1)} inch
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    {convertToCm(measurements.circumference || 0)} cm
                  </TableCell>
                  <TableCell>
                    {convertToCm(measurements.frontToNape || 0)} cm
                  </TableCell>
                  <TableCell>
                    {convertToCm(measurements.forehead || 0)} cm
                  </TableCell>
                  <TableCell>
                    {convertToCm(measurements.head || 0)} cm
                  </TableCell>
                  <TableCell>
                    {convertToCm(measurements.siteToSite || 0)} cm
                  </TableCell>
                  <TableCell>
                    {convertToCm(measurements.neckWidth || 0)} cm
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <h6 className="blue-size-alert">
            <img
              src={Bluecircle}
              alt={getTranslation("alert_icon", "Alert Icon")}
            />
            {getTranslation(
              "size_alert",
              "These are the brand's standard sizes. You can easily adjust them to perfectly suit your unique fit and style. We’re here to help make sure your wig feels like it was made just for you!"
            )}
          </h6>{" "}
          <div style={{ display: size === "" ? "none" : "" }}>
            <div className="HeadMeasurements-container-size">
              <div className="HeadMeasurements-alert-container">
                <div className="HeadMeasurements-alert">
                  <h6>
                    <img
                      src={Blackalert}
                      alt={getTranslation("alert_icon", "Alert Icon")}
                    />
                    {getTranslation(
                      "measurement_alert",
                      "You can specify the measurements in inches as well as in CM. Please note that for technical reasons, information in CM is always converted into inches."
                    )}
                  </h6>
                  <p>
                    <img
                      src={reload}
                      alt={getTranslation("reload_icon", "Reload Icon")}
                    />
                    {getTranslation(
                      "default_values_changed",
                      "The default values for 'Small' have been changed. Do you want to restore the previous values?"
                    )}
                  </p>
                </div>
                <div style={{ minWidth: "120px" }}>
                  <button
                    className={unit === "inch" ? "active" : ""}
                    onClick={() => handleUnitChange("inch")}
                  >
                    {getTranslation("inch", "inch")}
                  </button>
                  <button
                    className={unit === "cm" ? "active" : ""}
                    onClick={() => handleUnitChange("cm")}
                  >
                    {getTranslation("cm", "cm")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadMeasurements;
