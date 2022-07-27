import { useOutletContext } from "react-router";
import { OutletExerciseCards} from "src/model/Contexts.model";

export const useModal = () => {
  return useOutletContext<OutletExerciseCards>();
};
