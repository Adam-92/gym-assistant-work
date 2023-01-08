import { createContext } from "react";
import { AddedExerciseModalContextValue } from "./AddedExerciseModalContext.model";

export const AddedExerciseModalContext = createContext<AddedExerciseModalContextValue | undefined>(undefined);
