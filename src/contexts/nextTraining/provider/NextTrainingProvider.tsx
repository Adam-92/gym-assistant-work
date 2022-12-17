import { useCallback, useMemo, useState } from "react";
import { NextTrainingContext } from "../context/NextTrainingContext";
import {
  NextTrainingProviderProps,
  SelectedExercise,
} from "./NextTrainingProvider.model";
import { getNextTraining } from "src/firebase/services/activity";
import useFetchData from "src/hooks/useFetchData";
import {
  BodyPart,
  ExerciseInformation,
} from "src/components/NextTraining/NextTraining.model";
import { NextTrainingContextValue } from "../context/NextTrainingContext.model";

export const NextTrainingProvider = ({
  children,
}: NextTrainingProviderProps) => {
  const { isLoading, error, data } = useFetchData(getNextTraining);
  const [selectedExercise, setSelectedExercise] = useState<SelectedExercise>();

  const selectExercise = useCallback(
    (newSelectedExercise: SelectedExercise) =>
      setSelectedExercise(newSelectedExercise),
    []
  );

  const hidePopover = useCallback(() => setSelectedExercise(undefined), []);

  const lastTraining = useMemo(() => {
    if (!data || !selectedExercise) return undefined;

    const bodyPart: BodyPart | undefined = data.find(
      ({ bodyPart }) => bodyPart === selectedExercise.bodyPart
    );

    const exercise = bodyPart?.exercises.find(
      (exercise: ExerciseInformation) =>
        exercise.name === selectedExercise?.name
    );
    return exercise?.lastTraining;
  }, [data, selectedExercise]);

  const value: NextTrainingContextValue = useMemo(
    () => ({
      isLoading,
      error,
      data,
      selectedExercise,
      selectExercise,
      hidePopover,
      lastTraining,
    }),
    [
      data,
      isLoading,
      error,
      lastTraining,
      selectExercise,
      selectedExercise,
      hidePopover,
    ]
  );

  return (
    <NextTrainingContext.Provider value={value}>
      {children}
    </NextTrainingContext.Provider>
  );
};
