import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import "./ExercisePerformanceTable.css";

const ExercisePerformanceTable = () => {
  return (
    <div className="container-performance-table">
      <div className="top-performance-table">
        <FontAwesomeIcon icon={faLeftLong} size="2x" />
        <h2>Bench Press</h2>
        <div>
          <p>Personal Record:</p>
          <h3>135kg / 6 </h3>
        </div>
      </div>
      <div className="bottom-performance-table">
        <table className="table-performance-table">
          <thead>
            <tr>
              <th>NR</th>
              <th>DATE:</th>
              <th>RESULT:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>22.05</td>
              <td>
                <p>100kg x 5</p>
                <p>102kg x 5</p>
                <p>105kg x 3</p>
              </td>
            </tr>
            <tr>
              <td>2.</td>
              <td>27.05</td>
              <td>
                <p>110kg x 5</p>
                <p>112kg x 5</p>
                <p>120kg x 1</p>
              </td>
            </tr>
            <tr>
              <td>3.</td>
              <td>02.06</td>
              <td>
                <p>132kg x 1</p>
                <p>140kg x 1</p>
                <p>155kg x 1</p>
              </td>
            </tr>
            <tr>
              <td>4.</td>
              <td>08.06</td>
              <td>
                <p>132kg x 1</p>
                <p>140kg x 1</p>
                <p>155kg x 1</p>
                <p>165kg x 1</p>
              </td>
            </tr>
            <tr>
              <td>5.</td>
              <td>08.06</td>
              <td>
                <p>132kg x 1</p>
                <p>140kg x 1</p>
                <p>155kg x 1</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExercisePerformanceTable;
