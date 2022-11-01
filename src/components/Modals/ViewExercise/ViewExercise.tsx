/* import { RestructuredExerciseData } from "src/model/model";
import "./ViewExercise.css";

const ViewExercise = ({selectedExercises} : RestructuredExerciseData[] ) => {
  
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
      <h1 className="title-view-exercise">{""}</h1>
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
      </div>
    </article>
  );
};

export default ViewExercise;
 */