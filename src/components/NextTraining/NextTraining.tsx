import BodyPartContainer from "./BodyPartContainer";
import DataStatusHandler from "../DataStatusHandler/DataStatusHandler";
import { BodyPart } from "./NextTraining.model";
import { useNextTraining } from "src/contexts/nextTraining/hooks/useNextTraining";
import HistoryPopover from "../Popovers/HistoryPopoover/HistoryPopover";
import "./NextTraining.css";

const NextTraining = () => {
  const { isLoading, isError, data, selectedExercise } = useNextTraining();

  return (
    <DataStatusHandler isLoading={isLoading} isError={isError} data={data}>
      {(data) => (
        <article className="container-next-training">
          <header>
            <h2>Next Training:</h2>
          </header>
          <section>
            {data.map((bodyParts: BodyPart) => (
              <BodyPartContainer
                bodyPart={bodyParts.bodyPart}
                exercises={bodyParts.exercises}
                key={bodyParts.bodyPart}
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
