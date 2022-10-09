import { useState } from "react";
import { signOutUser } from "src/firebase/services/Auth";
import { useNavigate } from "react-router";

const useSignOut = () => {
  const [firebaseError, setfirebaseError] = useState("");
  const navigate = useNavigate();

  const makeRequest = () =>
    signOutUser()
      .then(() => navigate("/"))
      .catch((error) => {
        setfirebaseError(error.message);
      });

  return {
    makeRequest,
    firebaseError,
    setfirebaseError,
  };
};

export default useSignOut;
