import { useParams } from "react-router";
const SelectedExercise = () => {
  const param = useParams();
  console.log(param);
  return <h2>Choosen exercise: {param}</h2>;
};

export default SelectedExercise;
