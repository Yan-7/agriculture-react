// VirtualFarmPlot.js
import React from "react";
import "./VirtualFarmPlot.css";
import lettuceImage from "./images/lettuce.bmp";
import tomatoImage from "./images/tomato.bmp";
import basilImage from "./images/basil.bmp";
import carrotImage from "./images/carrots.bmp";

const plantTypeToImage = {
  Lettuce: lettuceImage,
  Tomato: tomatoImage,
  Carrot: carrotImage,
  Basil: basilImage,
};

const calculatePlantHealth = (waterLevel, phLevel) => {
  let score = 0;
  if (waterLevel >= 70 && waterLevel <= 90) score += 1;
  else if (waterLevel >= 50 && waterLevel < 70) score += 2;
  else if (waterLevel < 50) score += 3;

  if (phLevel >= 6.5 && phLevel <= 7.5) score += 1;
  else if (
    (phLevel > 7.5 && phLevel <= 8.5) ||
    (phLevel >= 5.5 && phLevel < 6.5)
  )
    score += 2;
  else if (phLevel < 5.5 || phLevel > 8.5) score += 3;

  return score / 2; // Average the scores for simplicity or adjust logic as needed
};

const getPlotColor = (plantHealthScore) => {
  if (plantHealthScore <= 1.5) return "green";
  if (plantHealthScore <= 2.5) return "yellow";
  return "red";
};

const VirtualFarmPlot = ({ plots }) => (
  <div className="farm-plot">
    {/* summary */}
    <div className="plot-summary">
      <h2>Summary Information</h2>
      {plots.map((plot, index) => (
        <div
          key={index}
          className="plot-box"
          style={{
            backgroundColor: getPlotColor(
              calculatePlantHealth(plot.waterLevel, plot.phLevel)
            ),
          }}
        >
          {plot.id} : {plot.plantType}
        </div>
      ))}
    </div>
    {plots.map((plot, index) => {
      const plantHealth = calculatePlantHealth(plot.waterLevel, plot.phLevel);
      const plotColor = getPlotColor(plantHealth);

      return (
        <div key={index} className="plot" style={{ borderColor: plotColor }}>
          <img src={plantTypeToImage[plot.plantType]} alt={plot.plantType} />
          <div>{plot.id}</div>
          <div>
            {plot.plantType} - {plot.growthStage}
          </div>
          <div>Water Level: {plot.waterLevel}%</div>
          <div>pH Level: {plot.phLevel}</div>
          <div>Plant Health: {plantHealth}</div>
        </div>
      );
    })}
  </div>
);

export default VirtualFarmPlot;
