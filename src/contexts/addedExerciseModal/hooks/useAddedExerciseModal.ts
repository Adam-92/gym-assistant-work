import { useContext } from "react";
import { AddedExerciseModalContext } from "../context/AddedExerciseModalContext";

export const useAddedExerciseModal = () => {
  const ctx = useContext(AddedExerciseModalContext);
  if (!ctx) {
    throw new Error(
      "useAddedExerciseModal can only be used inside useAddedExerciseModalProvider"
    );
  }
  return ctx;
};
