import { useState } from "react";
import { signIn } from "src/firebase/services/Auth";

const useSignIn = () => {
  const [firebaseError, setfirebaseError] = useState("");
  const makeRequest = (password: string, email: string) =>
    signIn(password, email).catch((error) => {
      setfirebaseError(error.message);
    });

  return {
    makeRequest,
    firebaseError,
    setfirebaseError,
  };
};

export default useSignIn;
