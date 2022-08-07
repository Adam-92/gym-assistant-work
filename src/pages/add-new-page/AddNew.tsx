import ExerciseForm from "../../components/Forms/ExerciseForm/ExerciseForm";
import IlustrationSelection from "../../components/IlustrationSelection/IlustrationSelection"
import "./AddNew.css";

const Modify = () => {
  return (
    <article className="container-add-new">
      <ExerciseForm />
      <IlustrationSelection />
    </article>
  );
};

export default Modify;
