import { Exercise, ExerciseCardProps } from "src/model/ExerciseCards.model";
import "./ExerciseCard.css";

const ExerciseCard = ({
  exercises,
  pickExercise,
  closeModal,
}: ExerciseCardProps) => {
  return (
    <>
      {exercises?.map(({ name, arrangeMuscles, img, id }: Exercise) => {
        return (
          <article
            className="container-exercise-card"
            key={id}
            tabIndex={0}
            onBlur={closeModal}
            onClick={() => pickExercise(name)}
          >
            <div className="img-exercise-card">
              <img src={img} alt="exercise" />
            </div>
            <div className="information-exercise-card">
              <div className="parts-exercise-card">
                <span className="part-exercise-card">
                  {arrangeMuscles?.main}
                </span>
                {arrangeMuscles?.secondary?.map(
                  (muscle: string, index: number) => {
                    return (
                      <span className="part-exercise-card" key={index}>
                        {muscle}
                      </span>
                    );
                  }
                )}
              </div>
              <h2>{name}</h2>
              <div className="underline-exercise-card"></div>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default ExerciseCard;
