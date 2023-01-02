import { useFormContext } from "react-hook-form";
import { validationWithWhiteSpaces } from "../../../../Validation/ValidationRules";

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
            }`}
            id="exerciseDescription"
            {...register(
              "exerciseDescription",
              validationWithWhiteSpaces(10, 250)
            )}
            placeholder="The bench press is a compound exercise that targets the muscles of the upper body. It involves lying on a bench and pressing weight upward using either a barbell or a pair of dumbbells"
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
