import { useContext, createContext, useState, useEffect } from "react";
import { UserContextInterface } from "src/contexts/Contexts.model";
import { auth, db } from "../firebase/config/firebase";
import { User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const UserContext = createContext<UserContextInterface | undefined>(undefined);

const UserProvider = ({ children }: { children: JSX.Element }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      setCurrentUser(user);
      setPending(true);
    });
    return unsubscribe;
  }, []);

  /*   Do dodawania ćwiczeń dla wszystkich Userów - tak aby w apce nie było pustej bazy
  po rejestracji nowego użytkownika. Nie chciało mi się ręcznie wklepywać
  na Firebase. Więc korzystam z tego. ;-)  */

  const createDoc = async () => {
    try {
      const ref = doc(db, "forAllUsersExercises/Triceps");

      await setDoc(ref, {
        exercises: [
          {
            name: "TricepsExAllUsers",
            exerciseDescription: "TricepsExAllUsers",
            secondaryMuscle: [],
            exampleImage: "../assets/example3.jpg",
            urlImage: "",
            part: "Triceps",
          },
        ],
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    /*  createDoc(); */
  }, []);

  const value: UserContextInterface = {
    currentUser,
  };

  return (
    <UserContext.Provider value={value}>
      {pending ? children : null}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error("useUserContext can only be used inside UserProvider");
  }
  return ctx;
};

export { UserProvider, useUserContext, UserContext };
