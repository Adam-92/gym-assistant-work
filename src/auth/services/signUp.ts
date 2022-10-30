import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "src/firebase/config/firebase";

export const signUp = async (
  name: string,
  password: string,
  email: string
): Promise<void> =>
  createUserWithEmailAndPassword(auth, email, password).then(({ user }) =>
    setDoc(doc(db, "users", user.uid), {
      userInformation: {
        name: name,
        email: email,
      },
    })
  );
