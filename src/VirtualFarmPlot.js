// VirtualFarmPlot.js
import React from "react";
import "./VirtualFarmPlot.css"; // Assuming you might want to add some specific styles
import lettuceImage from "./images/lettuce.bmp";
import tomatoImage from "./images/tomato.bmp";
import basilImage from "./images/basil.bmp";
import carrotImage from "./images/carrots.bmp"

const plantTypeToImage = {
    Lettuce: lettuceImage,
    Tomato: tomatoImage,
    Carrot: carrotImage,
    Basil: basilImage,
};

const VirtualFarmPlot = ({ plots }) => (
  <div className="farm-plot">
    {plots.map((plot, index) => (
      <div key={index} className="plot">
        <img src={plantTypeToImage[plot.plantType]} alt={plot.plantType} />
        <p>
          {plot.plantType} - {plot.growthStage}
        </p>
        <p>Water Level: {plot.waterLevel}%</p>
        <p>pH Level: {plot.phLevel}</p>
        <p>plant health: {plot.plantHealth}</p>
      </div>
    ))}
  </div>
);


export default VirtualFarmPlot;
