import "./NoPerformanceData.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faTable } from "@fortawesome/free-solid-svg-icons";
import { NoPerformanceDataProps } from "./NoPerformanceData.model";

const NoPerformanceData = ({ isChart }: NoPerformanceDataProps) => {
  return (
    <article className="no-performance-container">
      <section
        className={`no-performance-content flex-justify-center flex-direction-column ${
          isChart && "no-performance-chart"
        }`}
      >
        <div>
          {isChart ? (
            <FontAwesomeIcon
              icon={faChartLine}
              className="no-performance-icon"
            />
          ) : (
            <FontAwesomeIcon icon={faTable} className="no-performance-icon" />
          )}
        </div>
        <div className="no-performance-underline">
          {isChart ? (
            <>
              <h2>Chart Statistics</h2>
              <p>Make your first trainings to see the chart statistics</p>
            </>
          ) : (
            <>
              <h2>History Table</h2>
              <p>Make your first trainings to see the history of you results</p>
            </>
          )}
        </div>
      </section>
    </article>
  );
};

export default NoPerformanceData;
