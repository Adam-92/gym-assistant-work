import { useOutletContext } from "react-router";
import { OutletExerciseCards} from "src/model/Model";

export const useModal = () => {
  return useOutletContext<OutletExerciseCards>();
};
