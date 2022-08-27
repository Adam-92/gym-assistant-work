import { useFormContext } from "react-hook-form";
import { validation } from "../Validation/ValidationRules";

const ExerciseDescription = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  console.log("🚀 ~ errors", errors);

  return (
    <div>
      <h2>Description:</h2>
      <div>
        <textarea
          id={"descriptionExercise"}
          {...register("description", validation(5, 120))}
          className={
            errors.description?.message ? "error-add-new-catalogue" : ""
          }
          rows={5}
          cols={65}
          placeholder={`
          For Example: 
          Set machine seat on 4 height, departure 6.
          Remember to straight arms while ending repetition.
          Remember to straight arms while ending repetition.`}
        />
      </div>
      <p className="error-login-panel">{errors.description?.message}</p>
    </div>
  );
};

export default ExerciseDescription;
