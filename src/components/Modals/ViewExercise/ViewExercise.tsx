import { useEffect, useState } from "react";
import { DataViewExercise, ViewExerciseIterface } from "./ViewExercise.model";
import { getViewExercise } from "src/services/Activity";
import "./ViewExercise.css";

const ViewExercise: React.FC<ViewExerciseIterface> = ({ name }) => {
  const [data, setData] = useState<DataViewExercise | null>(null);

  useEffect(() => {
    getViewExercise().then((data) => {
      const selectedData = data
        ? data.find((exercise: DataViewExercise) => exercise.name === name)
        : null;
      setData(selectedData);
    });
  }, [name]);

  return (
    <article className="view-exercise">
      <div className="img-view-exercise">
        <img
          src={
            "https://thumbs.dreamstime.com/b/exercising-close-grip-barbell-bench-press-target-muscles-marked-red-initial-final-steps-67126548.jpg"
          }
          alt={"exercise-selected"}
        />
      </div>
      <h1 className="title-view-exercise">{name}</h1>
      <div className="information-view-exercise">
        <section>
          <ol className="tips-view-exercise">
            TIPS:
            {data &&
              data.tips &&
              data.tips.map((tip: string, index: number) => {
                return <li key={index}>{tip}</li>;
              })}
          </ol>
        </section>
        <section></section>
      </div>
    </article>
  );
};

export default ViewExercise;
