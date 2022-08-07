import BodyIcon from "src/components/BodyIcon/BodyIcon";
import useAddExercise from "src/hooks/useAddExercise";
import Tips from "../../Tips/Tips";
import { loginValidation as nameValidation } from "../Validation/ValidationRules";
import { IconProps } from "src/model/BodyIcon.model";
import { FormValues } from "src/model/ExerciseForm.model";
import { useForm, SubmitHandler } from "react-hook-form";
import { icons } from "../../BodyIcon/Icons";
import "./ExerciseForm.css";

const ExerciseForm = () => {
  const { selectIcon, userSelectedData } = useAddExercise();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {};

  return (
    <article className="container-exercise-form">
      <div className="section-exercise-form">
        <div className="choose-exercise-form">
          <div className="header-exercise-form">
            <header>Choose the body part</header>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="icons-exercise-form">
            {icons.map(({ icon, title, active }: IconProps, index: number) => {
              return (
                <BodyIcon
                  key={index}
                  icon={icon}
                  title={title}
                  active={active}
                  selectIcon={selectIcon}
                />
              );
            })}
          </div>
          <div className="question-exercise-form">
            <label>Name of the exercise : </label>
            <input type="text" {...register("name", nameValidation)} />
            <h5 className="error-login-panel">{errors.name?.message}</h5>
          </div>
          <div className="question-exercise-form">
            <label>Secondary arrange muscles : </label>
            <input type="text" {...register("name", nameValidation)} />
            <h5 className="error-login-panel">{errors.name?.message}</h5>
          </div>
          <button className="btn-exercise-form"> ADD </button>
        </form>
        <Tips />
      </div>
      <div></div>
    </article>
  );
};

export default ExerciseForm;
