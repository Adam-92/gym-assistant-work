import { User } from "firebase/auth";

export interface UserContextInterface {
  currentUser: User | null;
}

export interface SettingsContextInterface {
  showCatalogueExercises: boolean;
  toggleShowCatalogueExercises: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}
