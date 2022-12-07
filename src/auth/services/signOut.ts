import { signOut } from "firebase/auth";
import { auth } from "src/firebase/config/firebase";

//Chyba "await" powninenm dodać, jak i w innych useSign hookach, nie?"
//Wszędzie, gdzie Promis powinienem dać, zgadza się?
export const signOutUser = async () => signOut(auth);
