interface IProps {
  changePeriod: boolean,
  setChangePeriod: React.Dispatch<React.SetStateAction<boolean>>
}

const Switch: React.FC<IProps> = ( { changePeriod, setChangePeriod }) => {
  
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