const Switch = ( {switchTime, setSwitchTime}) => {
    return(
    <div className='switch-step-chart'>
      <button 
        className={`${switchTime && 'active-step-chart'}`}
        onClick={()=>setSwitchTime(prev => !prev)}
    >
        Daily
      </button>
      <button 
        className={`${!switchTime && 'active-step-chart'}`}
        onClick={()=>setSwitchTime(prev => !prev)}
      >
        monthly
      </button>
    </div>
    )
}
export default Switch