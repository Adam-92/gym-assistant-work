import {
  getAllUsersDataSelectedExercise,
  getUserDataSelectedExercise,
} from "src/firebase/services/Activity";
import { useUserContext } from "src/contexts/UserContext/UserContext";
import { takeBodyPartfromUrl } from "src/utils/Utils";
import { useLocation } from "react-router";
import { NewExercise } from "src/model/model";
import { iconsDescription } from "src/pages/selectedExercise-page/iconsDescription";
import { IconsDescription } from "src/pages/selectedExercise-page/SelectedExercise.model";
import { useState, useEffect } from "react";

const useSelectedExercise = (selectedExercise: string | undefined) => {
  const [data, setData] = useState<NewExercise | undefined>(undefined);
  const { currentUser } = useUserContext();

  const location = useLocation();
  const pathName = location.pathname;

  const bodyPartName = takeBodyPartfromUrl(pathName);

  const rightDescriptionIcon = iconsDescription.find(
    ({ name }: IconsDescription) => name === bodyPartName
  );

  useEffect(() => {
    if (selectedExercise && currentUser) {
      getUserDataSelectedExercise(
        selectedExercise,
        bodyPartName,
        currentUser.uid
      ).then((data) => {
        if (!data) {
          getAllUsersDataSelectedExercise(selectedExercise, bodyPartName).then(
            (data) => setData(data)
          );
        } else {
          setData(data);
        }
      });
    }
  }, [selectedExercise, bodyPartName, currentUser]);

  return {
    data,
    rightDescriptionIcon,
  };
};

export default useSelectedExercise;
