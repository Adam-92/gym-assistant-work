import { useEffect, useState } from "react";
import {
  getUserExerciseCards,
  getExercisesForAllUsers,
} from "../../firebase/services/Activity";
import { useParams, useLocation, useOutlet, Outlet } from "react-router-dom";
import { useUserContext } from "src/contexts/UserContext/UserContext";
import ExerciseCard from "../../components/ExerciseCard/ExerciseCard";
import NoDataMessage from "../../components/NoDataMessage/NoDataMessage";
import CarouselRoute from "src/components/Carousels/CarouselRoute/CarouselRoute";
import { NewExercise } from "src/model/model";
import { useSettingsContext } from "src/contexts/SettingsContext/SettingsContext";
import "./Exercises.css";

const Exercises = () => {
  const [data, setData] = useState<NewExercise[]>([]);
  const { currentUser } = useUserContext();
  const { selectedBodyPart } = useParams();

  const location = useLocation();
  const outlet = useOutlet();

  const { showCatalogueExercises } = useSettingsContext();

  useEffect(() => {
    if (currentUser) {
      getUserExerciseCards(currentUser.uid).then((res) => {
        setData(
          res.filter(
            (exercise: NewExercise) =>
              exercise.part.toLowerCase() === selectedBodyPart
          )
        );
      });
    }
  }, [location.pathname, selectedBodyPart, currentUser]);

  useEffect(() => {
    if (currentUser && showCatalogueExercises) {
      getExercisesForAllUsers().then((res) => {
        setData((prev: NewExercise[]) => [
          ...prev,
          ...res.filter(
            (exercise: NewExercise) =>
              exercise.part.toLowerCase() === selectedBodyPart
          ),
        ]);
      });
    }
  }, [
    location.pathname,
    selectedBodyPart,
    currentUser,
    showCatalogueExercises,
  ]);

  return (
    <>
      {outlet ? (
        <Outlet />
      ) : (
        <div className="container-exercises">
          <div className="content-exercises">
            <CarouselRoute />
            <div className="cards-exercises">
              {data.map((exercise: NewExercise) => {
                return <ExerciseCard key={exercise.name} exercise={exercise} />;
              })}
            </div>
            {data.length === 0 && (
              <NoDataMessage text={"No Exercises in the Database"} />
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default Exercises;
