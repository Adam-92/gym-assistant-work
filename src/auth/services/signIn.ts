import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config/firebase";

export interface SignInCredentials {
  password: string;
  email: string;
}

export const signIn = (credentials: SignInCredentials) =>
  signInWithEmailAndPassword(auth, credentials.email, credentials.password);
