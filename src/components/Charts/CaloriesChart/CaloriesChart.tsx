import { addDataToConfig } from "../../../utils/Utils";
import { config } from "./config/config";
import Chart from "chart.js/auto";
import { useEffect, useRef, useState } from "react";

interface CaloriesInterface {
    0: number[],
    1: number[]
}

const CaloriesChart: React.FC = () => {
  let chartRef = useRef<null | HTMLCanvasElement>(null);
  
  const [data, setData] = useState<CaloriesInterface>({
    0: [2000, 2000, 2000, 2000, 2000, 2000, 2000],
    1: [1500, 3200, 2000, 1200, 3500, 800, 2900],
  });

  const configWithData = addDataToConfig(data, config);

  useEffect(() => {
    if(chartRef.current !== null){
      let ctx = chartRef.current.getContext("2d")
      if(ctx){
        new Chart(ctx, configWithData);        
      }
    }
  }, [data]);

  return (
    <canvas
      ref={chartRef}
      id="myChart"
      aria-label="Hello ARIA World"
      role="img"
      style={{ height: "100%", width: "100%" }}
    >
      Chart not supported by your browser.
    </canvas>
  );
};
export default CaloriesChart;
