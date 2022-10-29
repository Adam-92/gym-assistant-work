import { Link } from "react-router-dom";
import { NewExercise } from "src/model/model";
import "./ExerciseCard.css";

const ExerciseCard = ({ exercise }: { exercise: NewExercise }) => {
  const imgUrl = exercise.exampleImage
    ? exercise.exampleImage
    : exercise.urlImage;

  /* 
    Się zastanawiam, czy nie ma problemu by adres URL był z dużą literą po ukośniku..(na zasadzie nazywania zmiennej)
    http://localhost:3000/catalogue/biceps/BicepsAllUsers
  
    Gdy wszystko idzie z małej, wtedy psuje mi wyszukiwanie nazw takich jak powyżej - łączonych wyrazów

  */

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
        <h2>{exercise.name}</h2>
        <div className="underline-exercise-card"></div>
      </div>
    </Link>
  );
};

export default ExerciseCard;
