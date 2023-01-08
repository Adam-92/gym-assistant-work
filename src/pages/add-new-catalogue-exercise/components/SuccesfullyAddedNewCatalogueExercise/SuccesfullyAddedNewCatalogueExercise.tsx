import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Transition from "src/components/Transition/Transition";
import { useAddedExerciseModal } from "src/contexts/addedExerciseModal/hooks/useAddedExerciseModal";
import "./SuccesfullyAddedNewCatalogueExercise.css";

const SuccesfullyAddedNewCatalogueExercise = () => {
  const { modalPartName, closeModal } = useAddedExerciseModal();
  return (
    <Transition duration={0.5}>
      <article className="container-succesfully-added">
        <div className="content-succesfully-added">
          <h2>Congratulation!</h2>
          <h2>You have successfully added a new exercise</h2>
          <FontAwesomeIcon
            icon={faCircleCheck as IconProp}
            size="9x"
            fill="blue"
          />
          <Link
            to={`/catalogue/${modalPartName}`}
            state={true}
            onClick={closeModal}
          >
            Go To The Catalogue
          </Link>
        </div>
      </article>
    </Transition>
  );
};

export default SuccesfullyAddedNewCatalogueExercise;
