import { useState } from "react";
import { signIn } from "src/firebase/services/Auth";
import { useNavigate } from "react-router";

const useSignIn = () => {
  const [firebaseError, setfirebaseError] = useState("");
  const navigate = useNavigate();
  const makeRequest = (password: string, email: string) =>
    signIn(password, email, navigate).catch((error) => {
      console.log(error);
      setfirebaseError(error.message);
    });

  return {
    makeRequest,
    firebaseError,
    setfirebaseError,
  };
};

export default useSignIn;
