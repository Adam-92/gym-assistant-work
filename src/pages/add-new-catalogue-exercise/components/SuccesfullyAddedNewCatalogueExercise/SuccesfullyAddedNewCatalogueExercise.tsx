import { PartNameSuccesfullyAdded } from "./SuccesfullyAddedNewCatalogueExercise.model";
import { Link } from "react-router-dom";
import "./SuccesfullyAddedNewCatalogueExercise.css";

const SuccesfullyAddedNewCatalogueExercise = ({
  partName,
}: PartNameSuccesfullyAdded) => {
  return (
    <article className="container-succesfully-added">
      <div className="content-succesfully-added">
        <h2>Thanks, </h2>
        <h2>You have succesfully added new exercise</h2>
        <Link to={`/catalogue/${partName}`} state={true}>
          Go To The Catalogue
        </Link>
      </div>
    </article>
  );
};

export default SuccesfullyAddedNewCatalogueExercise;
