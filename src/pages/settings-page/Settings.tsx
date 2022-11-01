import { useSettingsContext } from "src/contexts/SettingsContext/SettingsContext";
import ControlledSwitch from "src/components/ControlledSwitch/ControlledSwitch";

const Settings = () => {
  const { showCatalogueExercises, toggleShowCatalogueExercises } =
    useSettingsContext();

  return (
    <>
      <h4>Catalogue:</h4>
      <br></br>
      <h5>I want to see only exercises added by me </h5>
      <ControlledSwitch
        checked={!showCatalogueExercises}
        onChange={toggleShowCatalogueExercises}
      />
    </>
  );
};

export default Settings;
