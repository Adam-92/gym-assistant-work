import { useSettingsContext } from "src/contexts/SettingsContext";
import ControlledSwitch from "src/components/ControlledSwitch/ControlledSwitch";

const Settings = () => {
  const { showCatalogueExercises, toggleShowCatalogueExercises } =
    useSettingsContext();
  /* 

    Zdaje sobie sprawę, że tutaj będzie musiało być pobieranie danych z Firebase o aktulanych ustawieniach Usera
    Inaczej po odświeżeniu ustawienia wraz z SettingsContext się resetują.
    Czy dobre podejście z tym utworzeniem SettingsContext?

    Czy taki checkbox może pozostać tutaj bez formularza? 
    Jeżeli pełni funkcję przełącznika tylko?

    Wcześniej przy StepChart -> Switch zrobiłem po prostu 'button'.. 

    */
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
