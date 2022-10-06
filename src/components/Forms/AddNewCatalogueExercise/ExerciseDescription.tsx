import { useFormContext } from "react-hook-form";
import { validationWithWhiteSpaces } from "../Validation/ValidationRules";

const ExerciseDescription = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <h2>Description: </h2>
      <div className="name-add-new-catalogue">
        <label htmlFor="exerciseDescription">
          <textarea
            className={`${
              errors.exerciseDescription?.message && "error-add-new-catalogue"
            }  area-exercise-description`}
            id="exerciseDescription"
            {...register(
              "exerciseDescription",
              validationWithWhiteSpaces(10, 150)
            )}
            placeholder="For Example:
            Set machine seat on 4 height, departure 6.
            Remember to straight arms while ending repetition."
            rows={5}
            cols={60}
          />
        </label>
      </div>

      {errors.exerciseDescription?.message && (
        <p className="error-login-panel">
          {errors.exerciseDescription.message}
        </p>
      )}
    </div>
  );
};

export default ExerciseDescription;
