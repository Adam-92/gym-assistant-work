import { useEffect, useState } from "react";
import { getExerciseCards } from "../../services/Activity";
import { ExerciseCardsInterface} from "../../model/Model";
import { useParams, useLocation } from "react-router-dom";
import ExerciseCard from "../../components/ExerciseCard/ExerciseCard";
import NoDataMessage from "../../components/NoDataMessage/NoDataMessage";
import "./Exercises.css";

const Exercises = () => {
  const [data, setData] = useState<[] | null>([]);

  let { bodyPart } = useParams();
  const location = useLocation();

  useEffect(() => {
    getExerciseCards().then((res) => {
      const selectedExercises = res
        ? res.find((part: ExerciseCardsInterface) => part.bodyPart === bodyPart)
        : null;
      setData(selectedExercises?.exercises);
    });
  }, [location.pathname]);

  return (
    <>
      {data ? (
        <div className="cards-exercises">
          <ExerciseCard exercises={data} />
        </div>
      ) : (
        <NoDataMessage text={"No Exercises in the Database"} />
      )}
    </>
  );
};
export default Exercises;
