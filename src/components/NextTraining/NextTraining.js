import BodyPart from "./BodyPart";
import HistoryPopover from "../Popovers/HistoryPopoover/HistoryPopover";
import { useEffect, useState } from "react"
import { getNextTraining } from "../../services/Activity"
import "./NextTraining.css";

const NextTraining = () => {
  const [data, setData] = useState([])
  const [lastTraining, setLastTraining] = useState(null)
  const [coordinatesDOM, setCoordinatesDOM] = useState({})
  const [showHistoryPopover, setShowHistoryPopover] = useState(false)
  
  useEffect(()=>{
    getNextTraining()
    .then( res => setData(res))
  },[])

  return (
    <article className="container-next-training"
      onMouseLeave={() => setShowHistoryPopover(false)}
    >
      <header>
        <h1>Next Training:</h1>
      </header>
      <section>
        {data.map( (bodyPart, index) => {
          const part  = bodyPart.part 
          const exercises = bodyPart.exercises
          return(
            <BodyPart 
              part={part}
              exercises={exercises}
              setShowHistoryPopover={setShowHistoryPopover}
              setCoordinatesDOM={setCoordinatesDOM}
              setLastTraining={setLastTraining}
              data={data}
              key={index}
            />
          )
        })}
      </section>
      {showHistoryPopover ? (
        <HistoryPopover
          showHistoryPopover={showHistoryPopover}
          lastTraining={lastTraining} 
          coordinatesDOM={coordinatesDOM}
        />
      )  
      : null}
    </article>
  );
};
export default NextTraining;
