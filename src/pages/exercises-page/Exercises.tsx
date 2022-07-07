import { useEffect, useState } from "react";
import { getExerciseCards } from "../../services/Activity";
import { ExerciseCardsInterface, Exercise } from "../../model/Model";
import { useParams, useLocation } from "react-router-dom";
import CarouselRoute from "../../components/Carousels/CarouselRoute/CarouselRoute";
import ExerciseCard from "../../components/ExerciseCard/ExerciseCard";
import NoDataMessage from "../../components/NoDataMessage/NoDataMessage";
import "./Exercises.css";

const Exercises = () => {
  const [data, setData] = useState<Exercise[]>([]);
  const [routeIndex, setRouteIndex] = useState(0);
  
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
        <article className="bg-exercises">
          <section>
            <CarouselRoute
              bodyPart={bodyPart}
              routeIndex={routeIndex}
              setRouteIndex={setRouteIndex}
            />
            <div className="cards-exercises">
              <ExerciseCard exercises={data} />
            </div>
          </section>
        </article>
      ) : (
        <NoDataMessage
          text={"No Exercises in the Database"}
          bodyPart={bodyPart}
          routeIndex={routeIndex}
          setRouteIndex={setRouteIndex}
        />
      )}
    </>
  );
};
export default Exercises;
