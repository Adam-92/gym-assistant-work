import { useEffect, useState } from "react";
import { auth } from "src/firebase/config/firebase";
import { User } from "firebase/auth";

export const useAuthListener = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  console.log("🚀  currentUser:", currentUser);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  return {
    currentUser,
    isLoading,
  };
};
