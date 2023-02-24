import { useState } from "react";
import { NewExercise } from "src/model/model";

type EditExercise = (data?: NewExercise) => {
  isActiveMode: boolean;
  setIsActiveMode: React.Dispatch<React.SetStateAction<boolean>>;
};


export const useEditExercise: EditExercise = (data) => {
  const [isActiveMode, setIsActiveMode] = useState(false);

  return {
    isActiveMode,
    setIsActiveMode,
  };
};
