import {minToHours} from '../../utils/Utils'

const Statistics = ( {target, current, name} ) =>{
    if(name === 'Total Training Time') {
        current = minToHours(current)
        target = minToHours(target)
    }
    return(
        <div className="stats-statistics">
            <div className="total-statistics">
                <h3>Target: </h3>
                <h4>{ target }</h4>
            </div>
            <div className="total-statistics">
                <h3>Today:</h3>
                <h4 className='positive-statistics'>+{ current }</h4> 
            </div>
        </div>
    )
}
export default Statistics