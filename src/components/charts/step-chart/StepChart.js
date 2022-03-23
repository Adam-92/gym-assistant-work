import './stepChart.css'
import { useEffect, useState, useRef } from 'react'
import { addToRef, percent } from './utils/utils'

const StepChart = () => {
 
    const containerRef = useRef([])
    containerRef.current = []

    const [changeRange, setChangeRange] = useState(false)
    const [target, setTarget] = useState(12000)
    const [data, setData] = useState([
    {
        day: 'Mon',
        steps: 6400,
    },
    {
        day: 'Tue',
        steps: 3560,
    },
    {
        day: 'Wed',
        steps: 820,
    },
    {
        day: 'Thur',
        steps: 8450,
    },
    {
        day: 'Fri',
        steps: 12050,
    },
    {
        day: 'Sat',
        steps: 16700,
    },
    {
        day: 'Sun',
        steps: 2200,
    }])


    useEffect( () => {
        /* --- Set the new progress height --- */
        containerRef.current.forEach( (bar, index) => {
            const steps = data[index].steps
            const ratio = percent(steps, target)
            
            if(ratio >= 100){
                bar.firstChild.firstChild.style.height = `${100}%`
                bar.firstChild.firstChild.firstChild.style.left = `${13}%`
            }
            if(ratio < 100 && ratio > 0 ){
                bar.firstChild.firstChild.firstChild.style.left = `${21}%`
                bar.firstChild.firstChild.style.height = `${ratio}%`

            }
        })

    },[data, changeRange])

    return(
        <article className='container-step-chart'>
            <header className='header-step-chart'>
                <h2>Steps</h2>
                <div className='options-step-chart'>
                    <button 
                        className={`${changeRange && 'active-step-chart'}`}
                        onClick={()=>setChangeRange(!changeRange)}
                    >
                        Daily
                    </button>
                    <button 
                        className={`${!changeRange && 'active-step-chart'}`}
                        onClick={()=>setChangeRange(!changeRange)}
                    >
                        monthly
                    </button>
                </div>
            </header>
            <div className='content-step-chart'>
                {data.map( ({ day,steps }) => {
                    const ratio  =  percent(steps, target)
                    return(
                        <div className='bar-container-step-chart' 
                            ref={el => addToRef(el, containerRef)} 
                            key={day} 
                        >
                          <div className="bar-step-chart ">
                            <div className={`${ratio >= 80 && 'position-static'} progress-step-chart`}>
                              <span className={`${ratio >= 80 && 'position-flat'} percent-step-chart`}>
                                {ratio}%
                              </span>    
                            </div>
                           </div>
                           <div className='day-month-step-chart'>
                              <span>{day}</span>
                            </div>
                        </div>
                    )
                  })
                }
            </div>
        </article>

    )
}

export default StepChart