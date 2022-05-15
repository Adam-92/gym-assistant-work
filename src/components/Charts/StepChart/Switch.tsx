const Switch = ( { changePeriod, setChangePeriod }) => {
  
  return(
    <div className='switch-step-chart'>
      <button 
        className={`${changePeriod && 'active-step-chart'}`}
        onClick={() => { setChangePeriod(true) }}
      >
        Daily
      </button>
      <button 
        className={`${!changePeriod && 'active-step-chart'}`}
        onClick={() => { setChangePeriod(false) }}
      >
        Monthly
      </button>
    </div>
    )
}
export default Switch