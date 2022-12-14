import BodyPartContainer from "./BodyPartContainer";
import DataStatusHandler from "../DataStatusHandler/DataStatusHandler";
import { useNextTraining } from "src/contexts/nextTraining/hooks/useNextTraining";
import HistoryPopover from "../Popovers/HistoryPopoover/HistoryPopover";
import "./NextTraining.css";

const NextTraining = () => {
  const { isLoading, error, data, hidePopover, selectedExercise } =
    useNextTraining();

  return (
    <DataStatusHandler isLoading={isLoading} error={error} data={data}>
      {(data) => (
        <article className="container-next-training" onMouseLeave={hidePopover}>
          <header>
            <h2>Next Training:</h2>
          </header>
          <section>
            {data.map(({ bodyPart, exercises }, index) => (
              <BodyPartContainer
                bodyPart={bodyPart}
                exercises={exercises}
                key={index}
              />
            ))}
          </section>
          {selectedExercise && <HistoryPopover />}
        </article>
      )}
    </DataStatusHandler>
  );
};
export default NextTraining;
