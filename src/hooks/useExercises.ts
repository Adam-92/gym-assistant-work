import { useCallback, useState, useEffect } from "react";
import {
  getExercisesForUser,
  getExercisesForAllUsers,
} from "src/firebase/services/activity";
import { useUserContext } from "src/contexts/user/hooks/useUserContext";
import { useParams } from "react-router";
import { useSettingsContext } from "src/contexts/settings/hooks/useSettingsContext";
import { availableBodyParts } from "src/pages/catalogue-page/availableBodyParts";
import { assertBodyPartFromParamsIsValid } from "src/components/CarouselRoute/assertBodyPartFromParamsIsValid";
import { NewExercise } from "src/model/model";
import { parseError } from "src/errors/parseError";
import { DocumentSnapshot } from "firebase/firestore";
import { CreateNewArrayExercises } from "src/firebase/Firebase.model";

const useExercises = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<NewExercise[]>([]);
  const { currentUser } = useUserContext();
  const { selectedBodyPart } = useParams();

  const { showCatalogueExercises } = useSettingsContext();

  const initialBodyPart = selectedBodyPart ?? availableBodyParts[0];
  assertBodyPartFromParamsIsValid(initialBodyPart);

  const handleResponse = (
    responses: DocumentSnapshot<CreateNewArrayExercises>[]
  ) => {
    const checkResponses = responses.filter((response) =>
      response.exists() ? response : null
    );
    const exercises = checkResponses.map((exercise) =>
      exercise.exists() ? exercise.data().exercises : []
    );
    return exercises.flat();
  };

  const fetchUserExercises = useCallback(async () => {
    const response = await getExercisesForUser(currentUser);
    return handleResponse(response);
  }, [currentUser]);

  const fetchAllUsersExercises = useCallback(async () => {
    const response = await getExercisesForAllUsers();
    return handleResponse(response);
  }, []);

  const getAllExercisesToDisplay = useCallback(async () => {
    const [userExercises = [], globalExercises = []] = await Promise.all(
      showCatalogueExercises
        ? [fetchUserExercises(), fetchAllUsersExercises()]
        : [fetchUserExercises()]
    );

    const allExercises = [...userExercises, ...globalExercises].filter(
      (exercise) => exercise.part.toLowerCase() === initialBodyPart
    );

    setData(allExercises);
  }, [
    fetchUserExercises,
    fetchAllUsersExercises,
    showCatalogueExercises,
    initialBodyPart,
  ]);

  useEffect(() => {
    try {
      getAllExercisesToDisplay();
    } catch (error) {
      setError(parseError(error));
    } finally {
      setIsLoading(false);
    }
  }, [getAllExercisesToDisplay]);

  return { data, isLoading, error };
};

export default useExercises;
