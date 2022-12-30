import { useSettingsContext } from "src/contexts/settings/hooks/useSettingsContext";
import ControlledSwitch from "src/components/ControlledSwitch/ControlledSwitch";

const SettingsPage = () => {
  const { showCatalogueExercises, toggleShowCatalogueExercises } =
    useSettingsContext();

  return (
    <div className="in-progress">
      <section>
        <h3>Catalogue:</h3>
        <br></br>
        <div className="flex-justify-start">
          <p className="m-r">I want to see only exercises added by me </p>
          <ControlledSwitch
            checked={!showCatalogueExercises}
            onChange={toggleShowCatalogueExercises}
          />
        </div>
      </section>
    </div>
  );
};

export default SettingsPage;
