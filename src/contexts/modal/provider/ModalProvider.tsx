import { ModalContext } from "../context/ModalContext";
import { ModalProviderProps } from "./ModalProvider.model";
import { ModalContextValue } from "../context/ModalContext.model";
import { useState } from "react";

export const ModalProvider = ({
  children,
}: ModalProviderProps) => {
  const [modalPartName, setModalPartName] = useState("");

  const closeModal = () => setModalPartName("");

  const value: ModalContextValue = {
    modalPartName,
    closeModal,
    setModalPartName,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
