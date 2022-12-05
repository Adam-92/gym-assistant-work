import { User } from "firebase/auth";

export interface UserContextValue {
  /* Się zastnawiam dlaczego tutaj dla currentUser dajemy optional? */
  currentUser: User | null;
  pending: boolean;
}
