import { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import ErrorData from "../../components/ErrorData/ErrorData";
import ExerciseCard from "../../components/ExerciseCard/ExerciseCard";
import { getExerciseCards } from "../../services/Activity";
import "./Exercises.css";

const Exercises = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    getExerciseCards().then((res) => setData(res));
  }, []);

  //w przypadku pustego pliku json data to string
  //w przypadku usunietego pliku json data to undefined
  if (data && Array.isArray(data)) {
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
            );
          })}
        </article>
      </Container>
    );
  } else {
    return (
      <Container>
        <ErrorData />
      </Container>
    );
  }
};

export default Exercises;
