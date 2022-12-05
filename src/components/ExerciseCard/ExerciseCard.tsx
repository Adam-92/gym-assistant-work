import { Link } from "react-router-dom";
import { ExerciseCardProps } from "./ExerciseCards.model";
import { upperCaseAllWords } from "src/utils/Utils";
import "./ExerciseCard.css";

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  const imgUrl = exercise.exampleImage
    ? exercise.exampleImage
    : exercise.urlImage;

  return (
    <Link to={exercise.name} className="container-exercise-card">
      <div
        className={`img-exercise-card ${exercise.allUsers && "img-all-user"}`}
      >
        <img src={imgUrl} alt="exercise" />
      </div>
      <div className="information-exercise-card">
        <div className="parts-exercise-card">
          {exercise.secondaryMuscle.map((muscle: string) => {
            return (
              <span className="part-exercise-card" key={muscle}>
                {muscle}
              </span>
            );
          })}
        </div>
        <h2>{upperCaseAllWords(exercise.name)}</h2>
        <div className="underline-exercise-card"></div>
      </div>
    </Link>
  );
};

export default ExerciseCard;
