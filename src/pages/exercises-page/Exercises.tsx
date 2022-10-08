import { useEffect, useState } from "react";
import { getExerciseCards } from "../../firebase/services/Activity";
import { useParams, useLocation } from "react-router-dom";
import { RestructuredExerciseData } from "../../model/model";
import { useGlobalContext } from "src/contexts/GlobalContext";
import ExerciseCard from "../../components/ExerciseCard/ExerciseCard";
import NoDataMessage from "../../components/NoDataMessage/NoDataMessage";
import CarouselRoute from "src/components/Carousels/CarouselRoute/CarouselRoute";
import "./Exercises.css";

const Exercises = () => {
  // Jeżeli usunę undefined, wtedy pojawi się błąd w activity - zobacz proszę, czy tak może zostać?
  const [data, setData] = useState<RestructuredExerciseData[] | undefined>([]);

  const { currentUser } = useGlobalContext();
  let { selectedBodyPart } = useParams();

  const location = useLocation();

  useEffect(() => {
    if (currentUser) {
      getExerciseCards(currentUser.uid).then((res) => {
        const selectedExercises = res?.filter(
          (exercise) => exercise.part === selectedBodyPart
        );
        setData(selectedExercises);
      });
    }
  }, [location.pathname, selectedBodyPart, currentUser]);

  return (
    <div className="container-exercises">
      <div className="content-exercises">
        <CarouselRoute />
        {data && data.length > 0 ? (
          <div className="cards-exercises">
            <ExerciseCard exercises={data} />
          </div>
        ) : (
          <NoDataMessage text={"No Exercises in the Database"} />
        )}
      </div>
    </div>
  );
};
export default Exercises;
