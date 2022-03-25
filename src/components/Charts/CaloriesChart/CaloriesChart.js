import { addDataToConfig } from '../../../utils/Utils'
import { config } from './config/config';
import Chart from 'chart.js/auto';
import { useEffect, useRef, useState } from 'react';

const CaloriesChart = () => {
    /* --- Chart Ref --- */
    const chartRef = useRef(null)
    /* --- Data --- */
    const [data, setData] = useState({
        0 : [2000, 2000, 2000, 2000, 2000, 2000, 2000],
        1 : [1500, 3200, 2000, 1200, 3500, 800, 2900]
    })

    /* --- Implement Data --- */
    const configWithData = addDataToConfig(data,config)

    useEffect( () => {   
        const ctx = chartRef.current.getContext("2d")
        new Chart(ctx, configWithData)
    },[data])

    return (
        <canvas
             ref={chartRef} 
             id="myChart"
             aria-label="Hello ARIA World" 
             role="img"
             >
            Chart not supported by your browser.
        </canvas>
    )
}
export default CaloriesChart