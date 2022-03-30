const Switch = ( {changePeriod, setChangePeriod}) => {
  
  return(
    <div className='switch-step-chart'>
      <button 
        className={`${changePeriod && 'active-step-chart'}`}
        onClick={()=>setChangePeriod(prev => !prev)}
    >
        Daily
      </button>
      <button 
        className={`${!changePeriod && 'active-step-chart'}`}
        onClick={()=>setChangePeriod(prev => !prev)}
      >
        Monthly
      </button>
    </div>
    )
}
export default Switch