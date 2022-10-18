import Switch from "@mui/material/Switch";
import { ControlledSwitchInteface } from "./ControlledSwitch.model";

const ControlledSwitch = ({ checked, onChange }: ControlledSwitchInteface) => {
  return (
    <Switch
      checked={checked}
      onChange={onChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};

export default ControlledSwitch;
