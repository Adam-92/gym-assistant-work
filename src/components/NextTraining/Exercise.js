const Exercise = ({ id, name, reps, sets, repsMax, weightMax }) => { 
  return (
    <div className="exercise-next-training">
      <span>{id}</span>
      <div>
        <span>{name}</span>
        <span>
          {reps} x {sets}
        </span>
      </div>
      <div>
        {(repsMax && weightMax) ? (
          <span>
            BEST RECORD: {repsMax} x {weightMax}
          </span> 
        )        
        : <span>NOT REGISTERED</span>}
      </div>
    </div>
  );
};

export default Exercise