import { useContext } from "react";
import { NextTrainingContext } from "../context/NextTrainingContext";

export const useNextTraining = () => {
  const ctx = useContext(NextTrainingContext);
  if (!ctx) {
    throw new Error(
      "useNextTraining can only be used inside NextTrainingProvider"
    );
  }
  return ctx;
};
