import { nameValidation } from "../Validation/ValidationRules";
import { useFormContext } from "react-hook-form";

const ExerciseName = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <h2>Name:</h2>
      <div className="name-add-new-catalogue">
        <label htmlFor="newExerciseName">
          <input id="newExerciseName" {...register("name", nameValidation)} />
        </label>
      </div>
      <p className="error-login-panel">{errors.name?.message}</p>
    </div>
  );
};

export default ExerciseName;
