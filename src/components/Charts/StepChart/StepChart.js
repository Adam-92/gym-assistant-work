import './StepChart.css'
import { useEffect, useState, useRef } from 'react'
import { addToRefContainer, changeToPercent } from '../../../utils/Utils'
import { getActivityData, setExampleData } from '../../../services/Activity'
import Bar from './Bar'
import Switch from './Switch'

const StepChart = () => {
    const containerRef = useRef([])
    containerRef.current = []

    const [switchTime, setSwitchTime] = useState(false)
    const [target, setTarget] = useState(12000)
    const [data, setData] = useState([])
    const [error, setError] = useState(false)

    useEffect( () => {
        getActivityData()
        .then((res) => setData(res))
        .catch((e) => {
            const exampleData = setExampleData()
            setData(exampleData)
            setError(true)
        })
    },[])

    useEffect( () => {
        /* --- Set the new progress height --- */
        containerRef.current.forEach( (bar, index) => {
            const steps = data[index].steps
            const ratio = changeToPercent(steps, target)
            
            if(ratio >= 100){
                bar.firstChild.firstChild.style.height = `${100}%`
                bar.firstChild.firstChild.firstChild.style.left = `${13}%`
            }
            if(ratio < 100 && ratio > 0 ){
                bar.firstChild.firstChild.firstChild.style.left = `${21}%`
                bar.firstChild.firstChild.style.height = `${ratio}%`
            }
        })

    },[data, switchTime, target])
    
    return(
        <article className='container-step-chart'>
            <header className='header-step-chart'>
                <h2>Steps</h2>
                <Switch switchTime={switchTime} setSwitchTime={setSwitchTime}/>
            </header> 
              <div className='content-step-chart'>
                {data.map( ({ day,steps }) => {
                   const ratio  =  changeToPercent(steps, target)
                    return(
                        <Bar 
                            key={day}
                            day={day} 
                            ratio={ratio} 
                            containerRef={containerRef} 
                            addToRefContainer={addToRefContainer}/>
                        )
                  })}
               </div>
               {error &&
                    <div className='error-step-chart'>
                         Unable to download the data...
                    </div>
               }
        </article>
    )
}

export default StepChart