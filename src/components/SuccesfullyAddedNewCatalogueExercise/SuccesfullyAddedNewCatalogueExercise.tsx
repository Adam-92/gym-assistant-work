import { PartNameSuccesfullyAdded } from "./SuccesfullyAddedNewCatalogueExercise.model";
import { Link } from "react-router-dom";
import "./SuccesfullyAddedNewCatalogueExercise.css";

const SuccesfullyAddedNewCatalogueExercise = ({
  partName,
}: PartNameSuccesfullyAdded) => {
  return (
    <article className="container-succesfully-added">
      <h2>Thanks, you have succesfully added new exercise</h2>
      <Link to={`/catalogue/${partName}`} state={true}>
        Go To Catalogue
      </Link>
    </article>
  );
};

export default SuccesfullyAddedNewCatalogueExercise;
