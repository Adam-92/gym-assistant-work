import { ExerciseCardProps } from "src/components/ExerciseCard/ExerciseCards.model";
import { RestructuredExerciseData } from "src/model/model";
import { useLocation } from "react-router";
import "./ExerciseCard.css";
import { Link } from "react-router-dom";
/* 
Planowalem zapobiec dodakowym renderom tutaj.
Jak powinienem poprawnie użyc useCallback? 
Bezposrednio na ExerciseCards wyskoczy błąd ;d
*/
const ExerciseCard = ({ exercises }: ExerciseCardProps) => {
  const location = useLocation();
  const newAddedCard = location.state;

  return (
    <>
      {exercises?.map(
        ({
          name,
          secondaryMuscle,
          exampleImage,
          urlImage,
        }: RestructuredExerciseData) => {
          return (
            <Link
              to={name.toLowerCase()}
              className={`${
                newAddedCard && "active-exercise-card"
              } container-exercise-card`}
              key={name}
            >
              <div className="img-exercise-card">
                {exampleImage ? (
                  <img src={exampleImage} alt="exercise" />
                ) : (
                  <img src={urlImage} alt="exercise" />
                )}
              </div>
              <div className="information-exercise-card">
                <div className="parts-exercise-card">
                  {secondaryMuscle.map((muscle: string) => {
                    return (
                      <span className="part-exercise-card" key={muscle}>
                        {muscle}
                      </span>
                    );
                  })}
                </div>
                <h2>{name}</h2>
                <div className="underline-exercise-card"></div>
              </div>
            </Link>
          );
        }
      )}
    </>
  );
};

export default ExerciseCard;
