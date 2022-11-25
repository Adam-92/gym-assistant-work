import BodyPartContainer from "./BodyPartContainer";
import DataStatusHandler from "../DataStatusHandler/DataStatusHandler";
import { BodyPart } from "./NextTraining.model";
import { useNextTraining } from "src/contexts/nextTraining/hooks/useNextTraining";
import HistoryPopover from "../Popovers/HistoryPopoover/HistoryPopover";
import "./NextTraining.css";

const NextTraining = () => {
  const { hookVariables, handleRequest } = useNextTraining();

  return (
    <DataStatusHandler
      isLoading={handleRequest.isLoading}
      isError={handleRequest.isError}
      data={handleRequest.data}
    >
      <article className="container-next-training">
        <header>
          <h2>Next Training:</h2>
        </header>
        <section>
          {handleRequest.data?.map((body: BodyPart) => {
            return (
              <BodyPartContainer
                bodyPart={body.part}
                exercises={body.exercises}
                key={body.part}
              />
            );
          })}
        </section>
        {hookVariables.selectedExercise ? <HistoryPopover /> : <></>}
      </article>
    </DataStatusHandler>
  );
};
export default NextTraining;
