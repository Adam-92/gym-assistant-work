export interface ModalContextValue {
  modalPartName: string;
  closeModal: () => void;
  setModalPartName: React.Dispatch<React.SetStateAction<string>>;
}
