import { ResultsExercise, ResultSets } from "src/model/model";
import "./ExercisePerformanceTable.css";

//Destruktyryzacja tutaj tyczy się props, więc nie do końca rozumiem to co pisałeś w GitLab ? ;d
//Ostatecznie "results" jest arrayem więc powinno to być ok

//W każdym razię korzystając z importu modeli powyzej nie działa tutaj przypisanie typu do props ;/
//Help ;d

const ExercisePerformanceTable = ({ results }: any) => {
  return (
    <div className="container-ex-table">
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-1">Nr</div>
          <div className="col col-2">Date</div>
          <div className="col col-3">Series</div>
        </li>
        {results &&
          results.map((result: ResultsExercise, index: number) => {
            return (
              <li key={result.label} className="table-row">
                <div className="col col-1">{index + 1}.</div>
                <div className="col col-2">{result.label}</div>
                <div className="col col-3">
                  {result.sets.map((set: ResultSets, index: number) => {
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
