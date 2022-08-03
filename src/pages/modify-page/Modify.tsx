import ExerciseForm from "../../components/Forms/ExerciseForm/ExerciseForm";
import IlustrationSelection from "../../components/IlustrationSelection/IlustrationSelection"
import "./Modify.css";

const Modify = () => {
  return (
    <article className="container-modify">
      <ExerciseForm />
      <IlustrationSelection />
    </article>
  );
};

export default Modify;
