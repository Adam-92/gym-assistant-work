import { loginValidation as nameValidation } from "../Validation/ValidationRules";
import { FormValues } from "src/model/ExerciseForm.model";
import { useForm, SubmitHandler } from "react-hook-form";
import { icons } from "./Icons";
import { Icon } from "../../../model/ExerciseForm.model";
import Tips from "src/components/Tips/Tips";
import "./ExerciseForm.css";

const ExerciseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <article className="container-exercise-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="col-exercise-form">
          <div className="field-exercise-form">
            <h1>Choose the body part:</h1>
            <div className="icons-exercise-form">
              {icons.map(({ icon, title }: Icon, index: number) => {
                return (
                  <div className="icon-exercise-form" key={index}>
                    <img src={icon} alt={title}></img>
                    <label htmlFor="part">{title}</label>
                    <input
                      type="radio"
                      key={index}
                      value={title}
                      {...register("part", { required: true })}
                    />
                  </div>
                );
              })}
            </div>
            {errors.part?.type === "required" && (
              <p className="error-login-panel">
                Choose please the body part
              </p>
            )}
          </div>
          <div className="field-exercise-form">
            <h1>Name:</h1>
            <div>
              <label htmlFor="name">
                <input {...register("name", nameValidation)} />
              </label>
            </div>
            {errors.name?.message && (
              <p className="error-login-panel">{errors.name.message}</p>
            )}
          </div>
          <div className="field-exercise-form">
            <h1>Secondary arrange muscles :</h1>
            {icons.map(({ title }: Icon, index: number) => {
              return (
                <div className="checkbox-exercise-form" key={index}>
                  <label htmlFor={"secondaryMuscle"}>{title}</label>
                  <input type="checkbox" {...register("secondaryMuscle")} />
                </div>
              );
            })}
          </div>
        </section>
        <section>
          <Tips />
        </section>
        <button className="btn-exercise-form"> ADD </button>
      </form>
    </article>
  );
};

export default ExerciseForm;
