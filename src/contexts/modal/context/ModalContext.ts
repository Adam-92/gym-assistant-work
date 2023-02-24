import { createContext } from "react";
import { ModalContextValue } from "./ModalContext.model";

export const ModalContext = createContext<ModalContextValue | undefined>(undefined);
