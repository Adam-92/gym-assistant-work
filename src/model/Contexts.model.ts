import { User } from "firebase/auth";

export interface AppContextInterface {
  firebaseError: string | null;
  openModal: boolean;
  choosenFigure: string;
  setFirebaseError: React.Dispatch<React.SetStateAction<string | null>>;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setChoosenFigure: React.Dispatch<React.SetStateAction<string>>;
  currentUser: User | null;
}

export interface OutletExerciseCards {
  isOpenModal: boolean;
  openModal: () => void;
  closeModal: () => void;
  pickExercise: (exercise: string) => void;
}
