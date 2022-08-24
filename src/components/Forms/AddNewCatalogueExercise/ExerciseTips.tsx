import { useState } from "react";
import { useFormContext } from "react-hook-form";

const ExerciseTips = () => {
  const [tips, setTips] = useState<string[]>([]);

  const {
    register,
    formState: { errors },
    trigger,
    watch,
    setError,
    resetField,
  } = useFormContext();

  const inputValue = watch("tips", "");

  const triggerSubmit = () => {
    if (!inputValue || inputValue.length === 0) {
      setError("tips", { type: "empty", message: "This field is empty" });
    } else if (!inputValue || inputValue.length < 6) {
      setError("tips", {
        type: "minLength",
        message: "Minimum number of characters is not less than 6",
      });
    } else if (tips.length > 2) {
      setError("tips", {
        type: "maxSize",
        message: "You can add only 3 tips",
      });
    } else {
      trigger("tips");
      setTips([...tips, inputValue]);
      resetField("tips");
    }
  };

  return (
    <div>
      <h2>Enter tips - optional:</h2>
      <div className="enter-add-new-catalogue">
        <input type="text" {...register("tips")} />
        <button type="button" onClick={triggerSubmit}>
          ADD
        </button>
      </div>
      <ul className="add-add-new-catalogue">
        {tips.map((tip: string, index: number) => {
          return <li key={index}>{tip}</li>;
        })}
      </ul>
      {tips.length === 0 && (
        <ul className="example-add-new-catalogue">
          For Example:
          <li>Set machine seat on 4 height, departure 6</li>
          <li>Remember to straight arms while ending repetition </li>
          <li>Remember to straight arms while ending repetition </li>
        </ul>
      )}
      <p className="error-login-panel">{errors.tips?.message}</p>
    </div>
  );
};

export default ExerciseTips;
