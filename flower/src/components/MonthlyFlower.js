import React from "react";
import Styles from "../Styles.css";
import { useState } from "react";
import Calendar from "./Calendar";
import Details from "./Details";

function MonthlyFlower() {
  const container = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "500px",
    padding: "20px",
  };
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState(null);

  const showDetailsHandle = (dayStr) => {
    setData(dayStr);
    setShowDetails(true);
  };

  return (
    <div style={container}>
      <br />
      <h1>Your beautiful life</h1>
      <Calendar showDetailsHandle={showDetailsHandle} />
      <br />
    </div>
  );
}

export default MonthlyFlower;
