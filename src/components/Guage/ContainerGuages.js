import { useEffect, useState } from 'react'
import { getGauges } from '../../services/Activity'
import Guage from "./Guage"
import "./Guage.css"

const ContainerGuages = () => {
    const [data, setData] = useState([])

    useEffect(() => {
      getGauges()
      .then(res => setData(res))
    },[])
   
    return(
        <article className="container-guages">
          {data.map((guage, index) => {
              const {target, current, units} = guage
              return(
                <Guage target={target} current={current} units={units} key={index}/>
              )
          })}    
        </article>
    )
}
export default ContainerGuages