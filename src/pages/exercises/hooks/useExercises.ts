import { useCallback, useState, useEffect } from "react";
import {
  getExercisesForAllUsers,
  getExercisesForUser,
} from "src/firebase/services/catalogueActivity";
import { useParams } from "react-router";
import { useSettings } from "src/contexts/settings/hooks/useSettings";
import { availableBodyParts } from "src/pages/catalogue/availableBodyParts";
import { assertBodyPartFromParamsIsValid } from "src/pages/exercises/components/CarouselRoute/assertBodyPartFromParamsIsValid";
import { NewExercise } from "src/model/model";
import { parseError } from "src/errors/parseError";
import { handleResponse } from "../utils/utils";
import { User } from "firebase/auth";

const useExercises = (currentUser: User) => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<NewExercise[]>([]);

  const { selectedBodyPart } = useParams();

  const { showCatalogueExercises } = useSettings();

  const initialBodyPart = selectedBodyPart ?? availableBodyParts[0];
  assertBodyPartFromParamsIsValid(initialBodyPart);

  const fetchUserExercises = useCallback(async () => {
    const response = await getExercisesForUser(currentUser.uid);
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
