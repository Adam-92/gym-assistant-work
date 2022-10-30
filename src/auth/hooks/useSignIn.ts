import { useState } from "react";
import { parseError } from "src/errors/parseError";
import { signIn } from "../services/signIn";

const useSignIn = () => {
  const [error, setError] = useState("");

  const makeRequest = async (password: string, email: string) => {
    try {
      await signIn(password, email);
    } catch (error) {
      setError((parseError(error)));
    }
  };

  return {
    makeRequest,
    error,
  };
};

export default useSignIn;
