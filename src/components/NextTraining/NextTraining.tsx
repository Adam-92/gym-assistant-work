import BodyPart from "./BodyPartContainer";
import HistoryPopover from "../Popovers/HistoryPopoover/HistoryPopover";
import { useEffect, useState } from "react";
import { getNextTraining } from "../../firebase/services/Activity";
import "./NextTraining.css";

const NextTraining = () => {
  const [data, setData] = useState([]);
  const [lastTraining, setLastTraining] = useState({});
  const [coordinatesDOM, setCoordinatesDOM] = useState({});
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
        <h2>Next Training:</h2>
      </header>
      <section>
        {data?.map((body: any, index: number) => {
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
