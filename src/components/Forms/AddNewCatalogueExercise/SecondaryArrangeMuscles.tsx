import { secondaryArrange } from "../secondaryArrange";
import { SecondaryMuscles } from "src/components/Forms/Forms.model";
import { useFormContext } from "react-hook-form";

const SecondaryArrangeMuscles = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="field-add-new-catalogue">
      <h2>Secondary arrange muscles - optional:</h2>
      <div className="secondary-add-new-catalogue">
        {secondaryArrange.map(({ id, name }: SecondaryMuscles) => {
          return (
            <div key={id}>
              <label htmlFor={id + name} className="noSelect hover-label">
                {name}
                <input
                  id={id + name}
                  value={name}
                  type="checkbox"
                  {...register("secondaryMuscle", {
                    validate: {
                      maxChecked: (value: false | string[]) =>
                        !value ||
                        value.length <= 3 ||
                        "You can mark only 3 secondary muscles",
                    },
                  })}
                />
              </label>
            </div>
          );
        })}
      </div>
      <p className="error-login-panel">{errors.secondaryMuscle?.message}</p>
    </div>
  );
};

export default SecondaryArrangeMuscles;
