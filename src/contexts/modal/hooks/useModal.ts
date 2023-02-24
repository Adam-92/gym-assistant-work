import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error(
      "useModal can only be used inside ModalProvider"
    );
  }
  return ctx;
};
