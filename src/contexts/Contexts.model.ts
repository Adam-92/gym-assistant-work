import { User } from "firebase/auth";

export interface AppContextInterface {
  currentUser: User | null;
}
