import { PerformanceProps } from "src/model/model";
import "./ExercisePerformanceTable.css";

const ExercisePerformanceTable = ({ results }: PerformanceProps) => {
  return (
    <div className="container-ex-table">
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-1">Nr</div>
          <div className="col col-2">Date</div>
          <div className="col col-3">Series</div>
        </li>
        {results?.map((result, index) => {
          return (
            <li key={result.label} className="table-row">
              <div className="col col-1">{index + 1}.</div>
              <div className="col col-2">{result.label}</div>
              <div className="col col-3">
                {result.sets.map((set, index) => {
                  return (
                    <p key={index}>
                      {set.weight} x {set.reps}
                    </p>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExercisePerformanceTable;
