import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { auth } from "../../firebase/config/firebase";

export const signIn = async (
  password: string,
  email: string
): Promise<UserCredential> => signInWithEmailAndPassword(auth, email, password);
