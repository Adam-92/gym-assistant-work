import { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import ErrorData from "../../components/ErrorData/ErrorData";
import ExerciseCard from "../../components/ExerciseCard/ExerciseCard";
import { getExerciseCards } from "../../services/Activity";
import { ExerciseCardsInterface, Exercise } from "../../model/Model";
import { useParams } from "react-router";
import "./Exercises.css";

const Exercises = () => {
  const [data, setData] = useState<ExerciseCardsInterface[]>([]);

  let { bodyPart } = useParams();
  console.log(bodyPart);

  useEffect(() => {
    getExerciseCards().then((res) => {
      const selectedExercises = res
        ? res.find((part: ExerciseCardsInterface) => part.bodyPart === bodyPart)
        : [];
      setData(selectedExercises.exercises);
    });
  }, []);

  return (
    <>
      {data ? (
        <article className="bg-exercises">
          <section>
            <header className="header-exercises">
              <h1>{bodyPart}</h1>
            </header>
            <div className="cards-exercises">
              <ExerciseCard exercises={data} />
            </div>
          </section>
        </article>
      ) : (
        <ErrorData />
      )}
    </>
  );
};
export default Exercises;
