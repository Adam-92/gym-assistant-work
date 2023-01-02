import { signOut } from "firebase/auth";
import { auth } from "src/firebase/config/firebase";

export const signOutUser = () => signOut(auth);
