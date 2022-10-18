import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import PerformanceChart from "src/components/Charts/PerformanceChart/PerformanceChart";
import ExercisePerformanceTable from "src/components/ExercisePerformanceTable/ExercisePerformanceTable";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { NewExercise } from "src/firebase/Firebase.model";
import "./SelectedExercise.css";

const SelectedExercise = () => {
  const navigate = useNavigate();
  const location = useLocation();

  /* 
     Tutaj jest problem z błędem, kiedy wejdziesz głębiej w ćwieczenie w katalogu klikając na wybrane,
     otworzy się strona "SelectedExercise" i wyświetlą dane (póki co pobiera dane tylko lewej strony tj. zdjęcie, nazwa, opis).
     Kiedy chcesz cofnąć wyskoczy błąd location.state === null ...
  */

  const { exampleImage, exerciseDescription, urlImage, name } =
    location.state as NewExercise;

  return (
    <>
      {location.state && (
        <article className="content-selected-exercises">
          <article className="grid-selected-exercise">
            <header className="back-selected-exercise">
              {/* Hmm tutaj założe się, że jest lepszy patent na to  */}
              <Link to="" onClick={() => navigate(-1)}>
                <FontAwesomeIcon
                  icon={faLeftLong}
                  className="arrow-selected-exercise"
                />
              </Link>
            </header>
            <div className="img-selected-exercise">
              <img src={`../${exampleImage}`} alt="picked exercise" />
            </div>
            <div className="desc-selected-exercise">
              <h2>{name}</h2>
              <p>{exerciseDescription}</p>
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
