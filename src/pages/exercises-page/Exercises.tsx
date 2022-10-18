import { useEffect, useState } from "react";
import {
  getUserExerciseCards,
  getExercisesForAllUsers,
} from "../../firebase/services/Activity";
import { useParams, useLocation, useOutlet, Outlet } from "react-router-dom";
import { useUserContext } from "src/contexts/UserContext";
import ExerciseCard from "../../components/ExerciseCard/ExerciseCard";
import NoDataMessage from "../../components/NoDataMessage/NoDataMessage";
import CarouselRoute from "src/components/Carousels/CarouselRoute/CarouselRoute";
import { NewExercise } from "src/firebase/Firebase.model";
import { useSettingsContext } from "src/contexts/SettingsContext";
import "./Exercises.css";

const Exercises = () => {
  const [data, setData] = useState<NewExercise[]>([]);
  const { currentUser } = useUserContext();
  let { selectedBodyPart } = useParams();

  const location = useLocation();
  const outlet = useOutlet();

  const { showCatalogueExercises } = useSettingsContext();

  /* 
     Nie wiem, czy nie przekobinowałem z "łatwością" czytania tego kodu.
     To wynika z tego, jak wyglądają te funkcje w activity, bo funkcje są dosyć podobne.
     Masz może pomysł?
  */

  useEffect(() => {
    if (currentUser) {
      getUserExerciseCards(currentUser.uid).then((res) => {
        return res
          ? setData(
              res.filter(
                (exercise: NewExercise) =>
                  exercise.part.toLowerCase() === selectedBodyPart
              )
            )
          : setData([]);
      });
    }
  }, [location.pathname, selectedBodyPart, currentUser]);

  useEffect(() => {
    if (currentUser && showCatalogueExercises) {
      getExercisesForAllUsers().then((res) => {
        return res
          ? setData((prev: NewExercise[]) => [
              ...prev,
              ...res.filter(
                (exercise: NewExercise) =>
                  exercise.part.toLowerCase() === selectedBodyPart
              ),
            ])
          : setData((prev) => prev);
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
              {data &&
                data.length > 0 &&
                data.map(
                  ({
                    name,
                    exerciseDescription,
                    secondaryMuscle,
                    exampleImage,
                    urlImage,
                    part,
                  }: NewExercise) => {
                    return (
                      <ExerciseCard
                        key={name}
                        name={name}
                        exerciseDescription={exerciseDescription}
                        secondaryMuscle={secondaryMuscle}
                        exampleImage={exampleImage}
                        urlImage={urlImage}
                        part={part}
                      />
                    );
                  }
                )}
            </div>
            {data && data.length === 0 && (
              <NoDataMessage text={"No Exercises in the Database"} />
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default Exercises;
