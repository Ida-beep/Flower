import React from "react";
import { useState } from "react";

function MonthlyFlower() {
  const container = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "500px",
    padding: "20px",
  };
  return (
    <div style={container}>
      <h1>Your beautiful life</h1>
    </div>
  );
}

export default MonthlyFlower;
