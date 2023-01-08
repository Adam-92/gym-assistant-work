import { AddedExerciseModalContext } from "../context/AddedExerciseModalContext";
import { AddedExerciseModalProviderProps } from "./AddedExerciseModalProvider.model";
import { AddedExerciseModalContextValue } from "../context/AddedExerciseModalContext.model";
import { useState } from "react";

export const AddedExerciseModalProvider = ({
  children,
}: AddedExerciseModalProviderProps) => {
  const [modalPartName, setModalPartName] = useState("");

  const closeModal = () => setModalPartName("");
  
  const value: AddedExerciseModalContextValue = {
    modalPartName,
    closeModal,
    setModalPartName,
  };

  return (
    <AddedExerciseModalContext.Provider value={value}>
      {children}
    </AddedExerciseModalContext.Provider>
  );
};
