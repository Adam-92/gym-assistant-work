const ContentPopover = ({ lastTraining }: any) => {
    const { exerciseName, training } = lastTraining
    const { date } = training

    return(
      <ul className="header-history-popover">
        {exerciseName}
        <li> Date: {date} </li>
        {training.sets.map((set: any, index: number) => {
          const weight = set.weight
          const reps = set.reps  
          return (
            <li key={index}>
              {index + 1} set - {weight}kg x {reps}
            </li>
          )})}
      </ul>
    )
}
export default ContentPopover