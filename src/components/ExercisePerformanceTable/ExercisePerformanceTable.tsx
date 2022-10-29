import "./ExercisePerformanceTable.css";
const ExercisePerformanceTable = () => {
  return (
    <div className="container-ex-table">
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-1">Nr</div>
          <div className="col col-2">Date</div>
          <div className="col col-3">Series</div>
          <div className="col col-4">Payment Status</div>
        </li>
        <li className="table-row">
          <div className="col col-1">1.</div>
          <div className="col col-2">12.05</div>
          <div className="col col-3">
            <p>90 x 5</p>
            <p>110 x 5</p>
            <p>115 x 5</p>
          </div>
          <div className="col col-4">Pending</div>
        </li>
        <li className="table-row">
          <div className="col col-1">2.</div>
          <div className="col col-2">12.07</div>
          <div className="col col-3">
            <p>120 x 5</p>
            <p>125 x 5</p>
            <p>130 x 3</p>
          </div>
          <div className="col col-4">Pending</div>
        </li>
        <li className="table-row">
          <div className="col col-1">3.</div>
          <div className="col col-2">08.09</div>
          <div className="col col-3">
            <p>120 x 5</p>
            <p>125 x 5</p>
            <p>130 x 3</p>
          </div>
          <div className="col col-4">Pending</div>
        </li>
        <li className="table-row">
          <div className="col col-1">4.</div>
          <div className="col col-2">12.11</div>
          <div className="col col-3">
            <p>120 x 5</p>
            <p>125 x 5</p>
            <p>130 x 3</p>
          </div>
          <div className="col col-4">Pending</div>
        </li>
      </ul>
    </div>
  );
};

export default ExercisePerformanceTable;
