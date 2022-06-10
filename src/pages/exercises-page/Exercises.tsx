import { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import ExerciseCard from "../../components/ExerciseCard/ExerciseCard";
import { getExerciseCards } from "../../services/Activity";
import "./Exercises.css";

const Exercises = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    getExerciseCards().then((res) => setData(res));
  }, []);

  return (
    <Container>
      <article className="bg-exercises">
        {data.map((card: any, index: number) => {
          const { bodyPart, exercises } = card;
          return (
            <section key={index}>
              <header className="header-exercises">
                <h1>{bodyPart}</h1>
              </header>
              <div className="cards-exercises">
                <ExerciseCard exercises={exercises} />
              </div>
            </section>
          )
        })}
      </article>
    </Container>
  );
};

export default Exercises;
