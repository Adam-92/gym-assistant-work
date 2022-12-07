import { useState } from "react";
import { signOutUser } from "../services/signOut";
import { useNavigate } from "react-router";
import { parseError } from "src/errors/parseError";

const useSignOut = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const makeRequest = async () => {
    try {
      await signOutUser();
      console.log("logOut");
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(parseError(error));
    }
  };

  return {
    makeRequest,
    error,
  };
};

export default useSignOut;
