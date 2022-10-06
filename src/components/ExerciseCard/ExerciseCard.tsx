import { ExerciseCardProps } from "src/components/ExerciseCard/ExerciseCards.model";
import { RestructuredExerciseData } from "src/model/model";
import "./ExerciseCard.css";
/* 
Planowalem zapobiec dodakowym renderom tutaj.
Jak powinienem poprawnie użyc useCallback? 
Bezposrednio na ExerciseCards wyskoczy błąd ;d
*/
const ExerciseCard = ({ exercises }: ExerciseCardProps) => {
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
            <article className="container-exercise-card" key={name}>
              <div className="img-exercise-card">
                {exampleImage ? (
                  <img src={exampleImage} alt="exercise" />
                ) : (
                  <img src={urlImage} alt="exercise" />
                )}
              </div>
              <div className="information-exercise-card">
                <div className="parts-exercise-card">
                  {secondaryMuscle.map((muscle: string, index: number) => {
                    return (
                      <span className="part-exercise-card" key={muscle + index}>
                        {muscle}
                      </span>
                    );
                  })}
                </div>
                <h2>{name}</h2>
                <div className="underline-exercise-card"></div>
              </div>
            </article>
          );
        }
      )}
    </>
  );
};

export default ExerciseCard;
