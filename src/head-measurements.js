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
import "./HeadMeasurements.css";

const HeadMeasurements = ({measurements,setMeasurements}) => {
  const [unit, setUnit] = useState("inch");
  const [size, setSize] = useState(window.innerWidth <= 1024 ? "mobile" : "");

 

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
        <div className="HeadMeasurements-head">
          <h2>Head measurements</h2>
        </div>
        <div className="HeadMeasurements-banner">
          <img src={Headmeasurements} alt="Head measurements" />
          <div className="HeadMeasurements-options">
            <button
              onClick={() => handleSizeChange("small")}
              className={size === "small" ? "active" : ""}
            >
              <img src={Small} alt="Small" />
              Small
            </button>
            <button
              onClick={() => handleSizeChange("medium")}
              className={size === "medium" ? "active" : ""}
            >
              <img src={Medium} alt="Medium" />
              Medium
            </button>
            <button
              onClick={() => handleSizeChange("large")}
              className={size === "large" ? "active" : ""}
            >
              <img src={Large} alt="Large" />
              Large
            </button>
          </div>
        </div>

        <div
          className="HeadMeasurements-size"
          style={{ display: size === "" ? "none" : "" }}
        >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="head measurements table">
              <TableHead>
                <TableRow>
                  <TableCell>Circumference</TableCell>
                  <TableCell>Front to nape</TableCell>
                  <TableCell>Forehead</TableCell>
                  <TableCell>Head</TableCell>
                  <TableCell>Site to site</TableCell>
                  <TableCell>Neck width</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{(measurements.circumference || 0).toFixed(1)} inch</TableCell>
                  <TableCell>{(measurements.frontToNape || 0).toFixed(1)} inch</TableCell>
                  <TableCell>{(measurements.forehead || 0).toFixed(1)} inch</TableCell>
                  <TableCell>{(measurements.head || 0).toFixed(1)} inch</TableCell>
                  <TableCell>{(measurements.siteToSite || 0).toFixed(1)} inch</TableCell>
                  <TableCell>{(measurements.neckWidth || 0).toFixed(1)} inch</TableCell>
                </TableRow>
                <TableRow>
                <TableCell>{convertToCm(measurements.circumference || 0)} cm</TableCell>
                  <TableCell>{convertToCm(measurements.frontToNape || 0)} cm</TableCell>
                  <TableCell>{convertToCm(measurements.forehead || 0)} cm</TableCell>
                  <TableCell>{convertToCm(measurements.head || 0)} cm</TableCell>
                  <TableCell>{convertToCm(measurements.siteToSite || 0)} cm</TableCell>
                  <TableCell>{convertToCm(measurements.neckWidth || 0)} cm</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <div className="HeadMeasurements-container-size">
            <div className="HeadMeasurements-alert-container">
              <div className="HeadMeasurements-alert">
                <h6>
                  <img src={Blackalert} alt="Alert" />
                  You can specify the measurements in inches as well as in CM.
                  Please note that for technical reasons, information in CM is
                  always converted into inches.
                </h6>
                <p>
                  <img src={reload} alt="Reload" />
                  The default values for "Small" have been changed. Do you want
                  to restore the previous values?
                </p>
              </div>
              <div>
                <button
                  className={unit === "inch" ? "active" : ""}
                  onClick={() => handleUnitChange("inch")}
                >
                  inch
                </button>
                <button
                  className={unit === "cm" ? "active" : ""}
                  onClick={() => handleUnitChange("cm")}
                >
                  cm
                </button>
              </div>
            </div>
            <div className="HeadMeasurements-container-size-cards">
              <div className="HeadMeasurements-size-cards">
                <img src={Circumference} alt="Circumference" />
                <h5>Circumference</h5>
                <div className="HeadMeasurements-select">
                  <select
                    value={(measurements.circumference || 0).toFixed(1)}
                    onChange={(e) =>
                      handleMeasurementChange(e, "circumference")
                    }
                  >
                    {generateOptions(18, 51)}
                  </select>
                  {unit === "inch" ? <h4>inch</h4> : <h4>cm</h4>}
                </div>
                <p>
                  Place the tape measure on the head behind an ear and measure
                  in circles across the forehead along the hairline up to the
                  hairline in the neck and back to the support point behind the
                  ear.
                </p>
              </div>
              <div className="HeadMeasurements-size-cards">
                <img src={Fronttonape} alt="Front to nape" />
                <h5>Front to nape</h5>
                <div className="HeadMeasurements-select">
                  <select
                    value={(measurements.frontToNape || 0).toFixed(1)}
                    onChange={(e) => handleMeasurementChange(e, "frontToNape")}
                  >
                    {generateOptions(9, 36)}
                  </select>
                  {unit === "inch" ? <h4>inch</h4> : <h4>cm</h4>}
                </div>
                <p>
                  Measure over the center of your head along the hairline of the
                  forehead to the hairline at the neck.
                </p>
              </div>
              <div className="HeadMeasurements-size-cards">
                <img src={Forehead} alt="Forehead" />
                <h5>Forehead (ear to ear)</h5>
                <div className="HeadMeasurements-select">
                  <select
                    value={(measurements.forehead || 0).toFixed(1)}
                    onChange={(e) => handleMeasurementChange(e, "forehead")}
                  >
                    {generateOptions(8, 56)}
                  </select>
                  {unit === "inch" ? <h4>inch</h4> : <h4>cm</h4>}
                </div>
                <p>Measure at the hairline of the forehead from ear to ear.</p>
              </div>
              <div className="HeadMeasurements-size-cards">
                <img src={Head} alt="Head" />
                <h5>Head (ear to ear)</h5>
                <div className="HeadMeasurements-select">
                  <select
                    value={(measurements.head || 0).toFixed(1)}
                    onChange={(e) => handleMeasurementChange(e, "head")}
                  >
                    {generateOptions(9, 56)}
                  </select>
                  {unit === "inch" ? <h4>inch</h4> : <h4>cm</h4>}
                </div>
                <p>Measure the hairline from ear to ear over the top head.</p>
              </div>
              <div className="HeadMeasurements-size-cards">
                <img src={Sitetosite} alt="Site to site" />
                <h5>Site to site</h5>
                <div className="HeadMeasurements-select">
                  <select
                    value={(measurements.siteToSite || 0).toFixed(1)}
                    onChange={(e) => handleMeasurementChange(e, "siteToSite")}
                  >
                    {generateOptions(9, 31)}
                  </select>
                  {unit === "inch" ? <h4>inch</h4> : <h4>cm</h4>}
                </div>
                <p>
                  Measure from the hairline at the temples up to the back of the
                  head.
                </p>
              </div>
              <div className="HeadMeasurements-size-cards">
                <img src={Neckwidth} alt="Neck width" />
                <h5>Neck width</h5>
                <div className="HeadMeasurements-select">
                  <select
                    value={(measurements.neckWidth || 0).toFixed(1)}
                    onChange={(e) => handleMeasurementChange(e, "neckWidth")}
                  >
                    {generateOptions(3, 31)}
                  </select>
                  {unit === "inch" ? <h4>inch</h4> : <h4>cm</h4>}
                </div>
                <p>Measure the width of the hairline in the neck.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadMeasurements;
