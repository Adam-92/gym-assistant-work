import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import PerformenceChart from "src/components/Charts/PerformenceChart/PerformenceChart";
import "./Plan.css";

const Plan = () => {
  return (
    <article className="content-selected-exercises">
      <article className="grid-selected-exercise">
        <header className="back-selected-exercise">
          <FontAwesomeIcon
            icon={faLeftLong}
            className="arrow-selected-exercise"
          />
        </header>
        <div className="img-selected-exercise">
          <img src="assets/example6.jpg" alt="picked" />
        </div>
        <div className="desc-selected-exercise">
          <h2>Bench press</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            temporibus sequi saepe perspiciatis maiores magnam.
          </p>
        </div>
        <div className="stats-selected-exercise">
          <PerformenceChart />
        </div>
        <div className="history-selected-exercise">
          <div className="top-selected-exercise">
            <FontAwesomeIcon
              icon={faLeftLong}
              className="arrow-selected-exercise"
            />
            <h2>Bench Press</h2>
            <div>
              <p>Personal Record:</p>
              <h3>135kg / 6 </h3>
            </div>
          </div>
          <div className="bottom-selected-exercise">
            NR
            DATE
            RESULT
          </div>
        </div>
      </article>
    </article>
  );
};

export default Plan;
