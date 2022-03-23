import './time.css'
import { useEffect, useState } from 'react'
const Time = () => {    
  
    /* ---Set Real time---- */
    const [date, setDate] = useState(new Date())
    
    useEffect( () => {
        const time = setInterval( () => {
            setDate(new Date())
        },1000)
        return () => {
            clearInterval(time)
        }
    },[])
    
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

      const days = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
      ]

    return(
        <div className='flex-time'>
            <span>{ date.getDate()  }</span>
            <span>{ months[date.getMonth()] }</span>
            <span>{ date.getFullYear()},</span>
            <span>{ date.toLocaleTimeString() }</span>
        </div>
    )
}

 
  


export default Time;