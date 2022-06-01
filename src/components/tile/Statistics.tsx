import {minToHours} from '../../utils/Utils'

const Statistics = ( {target, current, name}: any ) =>{
    if(name === 'Training Time') {
        current = minToHours(current)
        target = minToHours(target)
    }

    return(
        <div className="stats-statistics">
            <div className="total-statistics">
                <h3>Target: { target } </h3>
            </div>
            <div className="total-statistics">
                <h3>Today:</h3>
                <span className='positive-statistics'>{ current }</span> 
            </div>
        </div>
    )
}
export default Statistics