import {minToHours} from '../../utils/Utils'

const Statistics = ( {target, current, name} ) =>{
    return(
        <div className="stats-statistics">
            <div className="target-statistics">
              {name.includes('Time') ?
                 <h4>Target: { minToHours(target) }</h4>
              :  <h4>Target: {target}</h4>
              }
            </div>
            <div className="target-statistics">
                <h4>Today:</h4>
             {name.includes('Time') ? 
                <h2>{minToHours(current)}</h2>
              : <h2>{current}</h2> 
             }
            </div>
        </div>
    )
}
export default Statistics