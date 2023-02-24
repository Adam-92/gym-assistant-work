import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import PerformanceChart from "src/components/Charts/PerformanceChart/PerformanceChart";
import ExercisePerformanceTable from "src/pages/selected-exercise/components/ExercisePerformanceTable/ExercisePerformanceTable";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import useSelectedExercise from "src/pages/selected-exercise/hooks/useSelectedExercise";
import { upperCaseAllWords } from "src/utils/Utils";
import NoPerformanceData from "src/pages/selected-exercise/components/NoPerformanceData/NoPerformanceData";
import DataStatusHandler from "src/components/DataStatusHandler/DataStatusHandler";
import DataDisplayWrapper from "src/components/DataDisplayWrapper/DataDisplayWrapper";
import Transition from "src/components/Transition/Transition";
import { useEditExercise } from "./hooks/useEditExercise";
import "./SelectedExercisePage.css";

const SelectedExercisePage = () => {
  const navigate = useNavigate();

  const { data, isLoading, error, rightDescriptionIcon } =
    useSelectedExercise();

  const { isActiveMode, setIsActiveMode } = useEditExercise(data);

  return (
    <DataStatusHandler data={data} isLoading={isLoading} error={error}>
      {(data) => (
        <Transition style={{ height: "100%" }}>
          <article className="content-selected-exercises">
            <article className="responsive-selected-exercise">
              <header className="back-selected-exercise">
                <Link to="" onClick={() => navigate(-1)}>
                  <FontAwesomeIcon
                    icon={faLeftLong}
                    className="arrow-selected-exercise"
                  />
                </Link>
                <button
                  onClick={() => setIsActiveMode((prev) => !prev)}
                  className={`btn-edit ${isActiveMode && "btn-active-edit"}`}
                >
                  EDIT
                </button>
              </header>
              <div className="img-selected-exercise">
                {isActiveMode && (
                  <button className="btn-active-edit">Change Picture</button>
                )}
                {data.exampleImage ? (
                  <img src={`../${data.exampleImage}`} alt="picked exercise" />
                ) : (
                  <img src={data.urlImage} alt="picked exercise" />
                )}
              </div>
              <div className="desc-selected-exercise">
                {isActiveMode && (
                  <button className="btn-active-edit">Change Name</button>
                )}
                <h2>{upperCaseAllWords(data.name)}</h2>
                {isActiveMode && (
                  <button className="btn-active-edit">Change Description</button>
                )}
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

export default SelectedExercisePage;
