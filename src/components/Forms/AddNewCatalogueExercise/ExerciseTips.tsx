import { useFormContext, useFieldArray } from "react-hook-form";
import { validationWithWhiteSpaces } from "../Validation/ValidationRules";

const ExerciseTips = () => {
  const {
    control,
    register,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tips",
  });

  return (
    <div>
      <h2>Tips:</h2>
      <div>
        {fields.map((field, index) => {
          return (
            <div key={field.id}>
              <div>
                <input
                  placeholder="Put here a guidline or description"
                  {...register(
                    `tips.${index}.tip` as const,
                    validationWithWhiteSpaces(10, 120)
                  )}
                  className={
                    errors?.tips?.[index]?.tip
                      ? "error-add-new-catalogue tip-add-new-catalogue"
                      : "tip-add-new-catalogue"
                  }
                />
                <button
                  type="button"
                  className="add-tip-btn-add-new-catalogue"
                  onClick={() =>
                    fields.length <= 2
                      ? append(index)
                      : setError("customTipsError", {
                          type: "maxTips",
                          message: "You can add only 3 Tips",
                        })
                  }
                >
                  Add
                </button>
                {fields.length > 1 && (
                  <button
                    className="subtract-tip-btn-add-new-catalogue"
                    type="button"
                    onClick={() => {
                      clearErrors("customTipsError");
                      remove(index);
                    }}
                  >
                    Delete
                  </button>
                )}
              </div>
              <p className="error-login-panel">
                {errors?.tips?.[index]?.tip.message}
              </p>
            </div>
          );
        })}
      </div>
      {fields.length === 1 && (
        <ul className="example-add-new-catalogue">
          <li>For Example:</li>
          <li>Set machine seat on 4 height, departure 6.</li>
          <li> Remember to straight arms while ending repetition.</li>
        </ul>
      )}
      <p className="error-login-panel">
        {errors.customTipsError?.message}
      </p>
    </div>
  );
};

export default ExerciseTips;
