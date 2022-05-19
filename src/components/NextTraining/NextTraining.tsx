import BodyPart from "./BodyPart";
import HistoryPopover from "../Popovers/HistoryPopoover/HistoryPopover";
import { useEffect, useState } from "react";
import { getNextTraining } from "../../services/Activity";
import "./NextTraining.css";


const NextTraining: React.FC = () => {
  
  interface Data {
    name: string,
    data: number
  }

  const [data, setData] = useState<Data[]>([]);
  const [lastTraining, setLastTraining] = useState({})
  const [coordinatesDOM, setCoordinatesDOM] = useState({});
  const [showHistoryPopover, setShowHistoryPopover] = useState(false);

  useEffect(() => {
    getNextTraining()
    .then((res) => setData(res));
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
        {data.map((body: any, index: number) => {
          return (
            <BodyPart
              part={body!.part}
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
          lastTraining={lastTraining}
          coordinatesDOM={coordinatesDOM}
        />
      ) : null}
    </article>
  );
};
export default NextTraining;
