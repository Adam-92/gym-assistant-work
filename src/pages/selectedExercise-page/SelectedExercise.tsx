import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import PerformanceChart from "src/components/Charts/PerformanceChart/PerformanceChart";
import ExercisePerformanceTable from "src/components/ExercisePerformanceTable/ExercisePerformanceTable";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import useSelectedExercise from "src/hooks/useSelectedExercise";
import { upperCaseAllWords } from "src/utils/Utils";
import NoPerformanceData from "src/components/NoPerformanceData/NoPerformanceData";
import DataStatusHandler from "src/components/DataStatusHandler/DataStatusHandler";
import DataDisplayWrapper from "src/components/DataDisplayWrapper/DataDisplayWrapper";
import Transition from "src/components/Transition/Transition";
import "./SelectedExercise.css";

const SelectedExercise = () => {
  const navigate = useNavigate();

  const { data, isLoading, error, rightDescriptionIcon } =
    useSelectedExercise();

  return (
    <DataStatusHandler data={data} isLoading={isLoading} error={error}>
      {(data) => (
        <Transition>
          <article className="content-selected-exercises">
            <article className="grid-selected-exercise">
              <header className="back-selected-exercise">
                <Link to="" onClick={() => navigate(-1)}>
                  <FontAwesomeIcon
                    icon={faLeftLong}
                    className="arrow-selected-exercise"
                  />
                </Link>
              </header>
              <div className="img-selected-exercise">
                {data.exampleImage ? (
                  <img src={`../${data.exampleImage}`} alt="picked exercise" />
                ) : (
                  <img src={data.urlImage} alt="picked exercise" />
                )}
              </div>
              <div className="desc-selected-exercise">
                <h2>{upperCaseAllWords(data.name)}</h2>
                <p>{data.exerciseDescription}</p>
                <div
                  className="desc-img-selected-exercise"
                  style={{
                    top: `${rightDescriptionIcon?.style?.topPosition}%`,
                    left: `${rightDescriptionIcon?.style?.leftPosition}%`,
                    width: `${rightDescriptionIcon?.style?.width}px`,
                  }}
                >
                  <img
                    src={rightDescriptionIcon?.pathImg}
                    alt={`${rightDescriptionIcon?.name} icon`}
                  />
                </div>
              </div>
              <div className="stats-selected-exercise">
                <DataDisplayWrapper
                  data={data.results}
                  displayComponent={PerformanceChart}
                  noDataComponent={<NoPerformanceData isChart={true} />}
                />
              </div>
              <div className="table-selected-exercise">
                <DataDisplayWrapper
                  data={data.results}
                  displayComponent={ExercisePerformanceTable}
                  noDataComponent={<NoPerformanceData isChart={false} />}
                />
              </div>
            </article>
          </article>
        </Transition>
      )}
    </DataStatusHandler>
  );
};

export default SelectedExercise;
