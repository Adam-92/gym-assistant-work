import { useCallback, useState, useEffect } from "react";
import {
  getUserExerciseCards,
  getExercisesForAllUsers,
} from "src/firebase/services/Activity";
import { useUserContext } from "src/contexts/user/hooks/useUserContext";
import { useParams } from "react-router";
import { useSettingsContext } from "src/contexts/settings/hooks/useSettingsContext";
import { availableBodyParts } from "src/pages/catalogue-page/availableBodyParts";
import { assertBodyPartFromParamsIsValid } from "src/components/CarouselRoute/assertBodyPartFromParamsIsValid";
import { NewExercise } from "src/model/model";
import { parseError } from "src/errors/parseError";

const useExercises = () => {
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<NewExercise[]>();
  const { currentUser } = useUserContext();
  const { selectedBodyPart } = useParams();

  const { showCatalogueExercises } = useSettingsContext();

  const initialBodyPart = selectedBodyPart ?? availableBodyParts[0];
  assertBodyPartFromParamsIsValid(initialBodyPart);

  const fetchUserExercises = useCallback(async () => {
    try {
      const allRequests = await getUserExerciseCards(currentUser);
      const allExercises = allRequests
        .filter((response) => (response.exists() ? response : false))
        .map((snap) => {
          const exercisesObject = snap.data();
          if (exercisesObject) {
            return exercisesObject.exercises;
          }
          return [];
        });

      return allExercises.flat();
    } catch (error) {
      console.log(error);
      setIsError(parseError(error));
    } finally {
      setIsLoading(false);
    }
  }, [currentUser]);

  const fetchAllUserExercises = useCallback(async () => {
    try {
      const allRequests = await getExercisesForAllUsers();
      const allExercises = allRequests
        .filter((response) => (response.exists() ? response : false))
        .map((snap) => {
          const exercisesObject = snap.data();
          if (exercisesObject) {
            return exercisesObject.exercises;
          }
          return [];
        });

      return allExercises.flat();
    } catch (error) {
      console.log(error);
      setIsError(parseError(error));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      fetchUserExercises().then((res) => {
        setData(
          res?.filter(
            (exercise: NewExercise) =>
              exercise.part.toLowerCase() === initialBodyPart
          )
        );
      });
    }
  }, [currentUser, initialBodyPart, fetchUserExercises]);

  useEffect(() => {
    if (currentUser && showCatalogueExercises) {
      fetchAllUserExercises().then((res) => {
        setData((prev) => {
          if (prev && res) {
            return [
              ...prev,
              ...res.filter(
                (exercise: NewExercise) =>
                  exercise.part.toLowerCase() === initialBodyPart
              ),
            ];
          }
          if (!prev && res) return res;

          return undefined;
        });
      });
    }
  }, [
    currentUser,
    showCatalogueExercises,
    initialBodyPart,
    fetchAllUserExercises,
  ]);

  return { data, isLoading, isError };
};

export default useExercises;
