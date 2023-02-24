import ExerciseCard from "./components/ExerciseCard/ExerciseCard";
import NoDataMessage from "./components/NoDataMessage/NoDataMessage";
import CarouselRoute from "src/pages/exercises/components/CarouselRoute/CarouselRoute";
import useExercises from "src/pages/exercises/hooks/useExercises";
import DataStatusHandler from "src/components/DataStatusHandler/DataStatusHandler";
import Transition from "src/components/Transition/Transition";
import { useUser } from "src/contexts/user/hooks/useUser";
import "./ExercisesPage.css";

const ExercisesPage = () => {
  const { currentUser } = useUser();
  const { data, isLoading, error } = useExercises(currentUser);

  return (
    <DataStatusHandler isLoading={isLoading} error={error} data={data}>
      {(data) => (
        <Transition style={{ height: "100%" }}>
          <div className="container-exercises">
            <div className="content-exercises">
              <CarouselRoute />
              <div className="cards-exercises">
                {data.map((exercise) => (
                  <ExerciseCard key={exercise.name} exercise={exercise} />
                ))}
              </div>
              {data.length === 0 && (
                <NoDataMessage text={"No Exercises in the Database"} />
              )}
            </div>
          </div>
        </Transition>
      )}
    </DataStatusHandler>
  );
};
export default ExercisesPage;
