import { ControlledSwitchProps } from "./ControlledSwitch.model";
import "./ControlledSwitch.css";

const ControlledSwitch = ({ checked, onChange }: ControlledSwitchProps) => {
  return (
    <>
      <input
        className="react-switch-checkbox"
        id="seeUserExercise"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label
        className={`${checked && "react-switch-active"} react-switch-label`}
        htmlFor="seeUserExercise"
      >
        <span className="react-switch-button" />
      </label>
    </>
  );
};

export default ControlledSwitch;
