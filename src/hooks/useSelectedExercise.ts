import {
  getAllUsersDataSelectedExercise,
  getUserDataSelectedExercise,
} from "src/firebase/services/Activity";
import { useUserContext } from "src/contexts/UserContext/UserContext";
import { useParams } from "react-router";
import { NewExercise } from "src/model/model";
import { iconsDescription } from "src/pages/selectedExercise-page/iconsDescription";
import { IconsDescription } from "src/pages/selectedExercise-page/SelectedExercise.model";
import { useState, useEffect } from "react";

const useSelectedExercise = () => {
  const [data, setData] = useState<NewExercise | undefined>(undefined);
  const { currentUser } = useUserContext();
  const { selectedBodyPart, selectedExercise } = useParams();

  const rightDescriptionIcon = iconsDescription.find(
    ({ name }: IconsDescription) => name === selectedBodyPart
  );

  useEffect(() => {
    if (selectedExercise && currentUser && selectedBodyPart) {
      getUserDataSelectedExercise(
        selectedExercise,
        selectedBodyPart,
        currentUser.uid
      ).then((data) => {
        if (!data) {
          getAllUsersDataSelectedExercise(
            selectedExercise,
            selectedBodyPart
          ).then((data) => setData(data));
        } else {
          setData(data);
        }
      });
    }
  }, [selectedExercise, selectedBodyPart, currentUser]);

  return {
    data,
    rightDescriptionIcon,
  };
};

export default useSelectedExercise;
