import { useState } from "react";
import { UserSelectedData } from "../model/useAddExercise.model";
import { icons } from "../components/BodyIcon/Icons";
import { IconProps } from "src/model/BodyIcon.model";

const useAddExercise = () => {
  const [userSelectedData, setUserSelectedData] = useState<UserSelectedData>({
    choosenIcon: false,
  });

  const selectIcon = (pickedIcon: string) => {
    icons.forEach((icon: IconProps) => {
      if (icon.title === pickedIcon) {
        icon.active = true;
      } else {
        icon.active = false;
      }
    });
    setUserSelectedData({ ...userSelectedData, choosenIcon: pickedIcon });
  };
  
  return {
    userSelectedData,
    selectIcon,
  };
};

export default useAddExercise;
