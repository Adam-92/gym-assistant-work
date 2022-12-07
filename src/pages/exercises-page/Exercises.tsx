import ExerciseCard from "../../components/ExerciseCard/ExerciseCard";
import NoDataMessage from "../../components/NoDataMessage/NoDataMessage";
import CarouselRoute from "src/components/CarouselRoute/CarouselRoute";
import useExercises from "src/hooks/useExercises";
import { NewExercise } from "src/model/model";
import "./Exercises.css";
import DataStatusHandler from "src/components/DataStatusHandler/DataStatusHandler";

const Exercises = () => {
  const { data, isLoading, isError } = useExercises();

  return (
    <DataStatusHandler isLoading={isLoading} isError={isError} data={data}>
      {(data) => (
        <div className="container-exercises">
          <div className="content-exercises">
            <CarouselRoute />
            <div className="cards-exercises">
              {data.map((exercise: NewExercise) => (
                <ExerciseCard key={exercise.name} exercise={exercise} />
              ))}
            </div>
            {data.length === 0 && (
              <NoDataMessage text={"No Exercises in the Database"} />
            )}
          </div>
        </div>
      )}
    </DataStatusHandler>
  );
};
export default Exercises;
