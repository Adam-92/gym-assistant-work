import BodyPartContainer from "./BodyPartContainer";
import DataStatusHandler from "../../../components/DataStatusHandler/DataStatusHandler";
import { useNextTraining } from "src/contexts/nextTraining/hooks/useNextTraining";
import HistoryPopover from "./HistoryPopover/HistoryPopover";
import Transition from "../../../components/Transition/Transition";
import "./NextTraining.css";

const NextTraining = () => {
  const { isLoading, error, data, selectedExercise, closePopover } =
    useNextTraining();

  return (
    <DataStatusHandler isLoading={isLoading} error={error} data={data}>
      {(data) => (
        <Transition>
          <article
            className="container-next-training"
            onMouseLeave={closePopover}
          >
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
        </Transition>
      )}
    </DataStatusHandler>
  );
};
export default NextTraining;
