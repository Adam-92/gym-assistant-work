import { User } from "firebase/auth";

export interface UserContextValue {
  currentUser: User;
  pending: boolean;
}
