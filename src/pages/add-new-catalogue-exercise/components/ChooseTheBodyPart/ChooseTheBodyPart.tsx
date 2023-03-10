import { bodyParts } from "./bodyParts";
import { useFormContext } from "react-hook-form";
import { firstBigLetter } from "src/utils/Utils";

const ChooseTheBodyPart = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="field-add-new-catalogue">
      <h2>Choose the body part:</h2>
      <div className="icons-add-new-catalogue">
        {bodyParts.map(({ id, icon, name }) => {
          return (
            <div className="icon-add-new-catalogue" key={id}>
              <label htmlFor={name} className="noSelect">
                <img src={icon} alt={name} />
                {firstBigLetter(name)}
                <input
                  id={name}
                  type="radio"
                  value={name}
                  {...register("part", {
                    required: "Choose please the body part",
                  })}
                />
              </label>
            </div>
          );
        })}
      </div>
      <p className="error-login-panel">{errors.part?.message}</p>
    </div>
  );
};

export default ChooseTheBodyPart;
