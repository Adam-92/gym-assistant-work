import { createContext } from "react";
import { NextTrainingContextValue } from "./NextTrainingContext.model";

export const NextTrainingContext = createContext<
  NextTrainingContextValue | undefined
>(undefined);
