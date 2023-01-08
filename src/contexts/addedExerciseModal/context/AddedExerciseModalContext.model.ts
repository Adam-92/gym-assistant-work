export interface AddedExerciseModalContextValue {
  modalPartName: string;
  closeModal: () => void;
  setModalPartName: React.Dispatch<React.SetStateAction<string>>;
}
