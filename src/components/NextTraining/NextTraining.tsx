import BodyPart from "./BodyPart";
import HistoryPopover from "../Popovers/HistoryPopoover/HistoryPopover";
import { useEffect, useState } from "react";
import { getNextTraining } from "../../services/Activity";
import "./NextTraining.css";

export interface Maximum {
  repsMax: number,
  wieghtMax: number
}

export interface LastTraining {
  date: string,
  sets: SetsLastTraining[]
}

export interface SetsLastTraining {
  sets: {
    reps: string,
    weight: number
  }
}

export interface Exercises {
  exercises: {
    id: number,
    name: string,
    reps: number,
    sets: number,
    maximum: Maximum
    lastTraining: LastTraining | null 
  }[]
} 

export interface DataState {
  bodyPart: {
    part: string,
    exercises: Exercises[]
  }[]
}

export interface CoordinatesDOM {
  bottom: number,
  height: number,
  left: number,
  right: number,
  top: number,
  width: number,
  x: number,
  y: number
}

export interface LastTraining {
  exerciseName: string,
  training: LastTraining
} 

const NextTraining = () => {
  const [data, setData] = useState<DataState["bodyPart"]>([]);
  const [lastTraining, setLastTraining] = useState({
    exerciseName: "",
    training: 
  });
  const [coordinatesDOM, setCoordinatesDOM] = useState<CoordinatesDOM | {}>({});
  const [showHistoryPopover, setShowHistoryPopover] = useState(false);

  useEffect(() => {
    getNextTraining().then((res) => setData(res));
  }, []);

  return (
    <article
      className="container-next-training"
      onMouseLeave={() => setShowHistoryPopover(false)}
    >
      <header>
        <h1>Next Training:</h1>
      </header>
      <section>
        {data.map((body, index) => {
          return (
            <BodyPart
              part={body.part}
              exercises={body.exercises}
              setShowHistoryPopover={setShowHistoryPopover}
              setCoordinatesDOM={setCoordinatesDOM}
              setLastTraining={setLastTraining}
              data={data}
              key={index}
            />
          );
        })}
      </section>
      {showHistoryPopover ? (
        <HistoryPopover
          showHistoryPopover={showHistoryPopover}
          lastTraining={lastTraining}
          coordinatesDOM={coordinatesDOM}
        />
      ) : null}
    </article>
  );
};
export default NextTraining;
