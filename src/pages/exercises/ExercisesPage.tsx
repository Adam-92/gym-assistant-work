import ExerciseCard from "./ExerciseCard/ExerciseCard";
import NoDataMessage from "./NoDataMessage/NoDataMessage";
import CarouselRoute from "src/pages/exercises/CarouselRoute/CarouselRoute";
import useExercises from "src/hooks/useExercises";
import DataStatusHandler from "src/components/DataStatusHandler/DataStatusHandler";
import Transition from "src/components/Transition/Transition";
import "./ExercisesPage.css";

const ExercisesPage= () => {
  const { data, isLoading, error } = useExercises();

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
