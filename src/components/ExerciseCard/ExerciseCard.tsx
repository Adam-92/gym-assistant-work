import { Link } from "react-router-dom";
import { NewExercise } from "src/firebase/Firebase.model";
import "./ExerciseCard.css";

const ExerciseCard = ({
  name,
  secondaryMuscle,
  exampleImage,
  urlImage,
  exerciseDescription,
}: NewExercise) => {
  return (
    <Link
      to={name.toLowerCase()}
      className="container-exercise-card"
      state={{
        name: name,
        exampleImage: exampleImage,
        urlImage: urlImage,
        exerciseDescription: exerciseDescription,
      }}
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
};

export default ExerciseCard;
