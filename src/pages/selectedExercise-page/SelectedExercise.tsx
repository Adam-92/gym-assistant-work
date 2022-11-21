import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import PerformanceChart from "src/components/Charts/PerformanceChart/PerformanceChart";
import ExercisePerformanceTable from "src/components/Tables/ExercisePerformanceTable/ExercisePerformanceTable";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import useSelectedExercise from "src/hooks/useSelectedExercise";
import { upperCaseAllWords } from "src/utils/Utils";
import NoPerformanceData from "src/components/NoPerformanceData/NoPerformanceData";
import DataStatusHandler from "src/components/DataStatusHandler/DataStatusHandler";
import ChartWrapper from "../../components/Charts/ChartWrapper/ChartWrapper";
import PerformanceTableWrapper from "src/components/Tables/PerformanceTableWrapper/PerformanceTableWrapper";
import "./SelectedExercise.css";

const SelectedExercise = () => {
  const navigate = useNavigate();

  /* Pytanko - Gdy tworzę hook - jest on przypisany do danego komponentu.
     Tworzę go w sposób -> useNazwaKomponentu.

     Czy mogę z takiego hook'a korzystać również w innych komponentach?

     Na przykład:

     hook useSelectedExercise() w komponencie Dashboard ?

     (czasem, chciałbym się podzielić w większej liczbie miejsc tym co przechowuje hook)
  */

  const { data, isLoading, isError, rightDescriptionIcon } =
    useSelectedExercise();

  return (
    <DataStatusHandler data={data} isLoading={isLoading} isError={isError}>
      {/* 
        Korzystam z tego warunku tutaj, bo inaczej w kliku miejscach 
        muszę dopisać data &&, to chyba lepiej tak zrobić, jak poniżej 
       */}
      {data && (
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
              <ChartWrapper
                data={data.results}
                chartComponent={PerformanceChart}
                noDataComponent={<NoPerformanceData isChart={true} />}
              />
            </div>
            <div className="table-selected-exercise">
              <PerformanceTableWrapper
                data={data.results}
                tableComponent={ExercisePerformanceTable}
                noDataComponent={<NoPerformanceData isChart={false} />}
              />
            </div>
          </article>
        </article>
      )}
    </DataStatusHandler>
  );
};

export default SelectedExercise;
