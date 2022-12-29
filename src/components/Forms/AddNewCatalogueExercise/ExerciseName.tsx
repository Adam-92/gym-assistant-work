import { validationWithWhiteSpaces } from "../Validation/ValidationRules";
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
          <input
            className={errors.name?.message ? "error-add-new-catalogue" : ""}
            id="newExerciseName"
            {...register("name", validationWithWhiteSpaces(5, 26))}
          />
        </label>
      </div>
      {errors.name?.message && (
        <p className="error-login-panel">{errors.name.message}</p>
      )}
    </div>
  );
};

export default ExerciseName;
