import ExerciseCard from "../../components/ExerciseCard/ExerciseCard";
import NoDataMessage from "../../components/NoDataMessage/NoDataMessage";
import CarouselRoute from "src/components/CarouselRoute/CarouselRoute";
import useExercises from "src/hooks/useExercises";
import DataStatusHandler from "src/components/DataStatusHandler/DataStatusHandler";
import Transition from "src/components/Transition/Transition";
import "./Exercises.css";

const Exercises = () => {
  const { data, isLoading, error } = useExercises();

  return (
    <DataStatusHandler isLoading={isLoading} error={error} data={data}>
      {(data) => (
        <Transition>
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
export default Exercises;
