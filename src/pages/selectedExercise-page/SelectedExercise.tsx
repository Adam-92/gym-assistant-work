import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import PerformanceChart from "src/components/Charts/PerformanceChart/PerformanceChart";
import ExercisePerformanceTable from "src/components/ExercisePerformanceTable/ExercisePerformanceTable";
import { useLocation, useNavigate, useParams } from "react-router";
import { takeBodyPartfromUrl } from "src/utils/Utils";
import {
  getAllUsersDataSelectedExercise,
  getUserDataSelectedExercise,
} from "src/firebase/services/Activity";
import { useUserContext } from "src/contexts/UserContext/UserContext";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./SelectedExercise.css";
import { NewExercise } from "src/model/model";

const SelectedExercise = () => {
  const [data, setData] = useState<NewExercise | undefined>(undefined);

  const { currentUser } = useUserContext();

  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;

  const { selectedExercise } = useParams();

  const bodyPartName = takeBodyPartfromUrl(pathName);

  useEffect(() => {
    if (selectedExercise && currentUser) {
      getUserDataSelectedExercise(
        selectedExercise,
        bodyPartName,
        currentUser.uid
      ).then((data) => {
        if (!data) {
          getAllUsersDataSelectedExercise(selectedExercise, bodyPartName).then(
            (data) => setData(data)
          );
        } else {
          setData(data);
        }
      });
    }
  }, [selectedExercise, bodyPartName, currentUser]);

  return (
    <>
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
              {/* Tutaj mógłbym zrobić Ternary u góry, ale też trzeba zadbać o ścieżkę dla img lokalnych. 
                 Bez "../" w exampleImage nie pójdzie */}
              {data.exampleImage ? (
                <img src={`../${data.exampleImage}`} alt="picked exercise" />
              ) : (
                <img src={data.urlImage} alt="picked exercise" />
              )}
            </div>
            <div className="desc-selected-exercise">
              <h2>{data.name}</h2>
              <p>{data.exerciseDescription}</p>
            </div>
            <div className="stats-selected-exercise">
              <PerformanceChart />
            </div>
            <div className="table-selected-exercise">
              <ExercisePerformanceTable />
            </div>
          </article>
        </article>
      )}
    </>
  );
};

export default SelectedExercise;
