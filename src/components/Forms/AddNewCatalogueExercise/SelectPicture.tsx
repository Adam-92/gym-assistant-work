import { useEffect, useState } from "react";
import { ExamplePicturesAddCatalogue } from "src/model/Forms.model";
import { getExamplePicturesAddNew } from "../../../services/Activity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useFormContext } from "react-hook-form";
import {
  selectPictureValidation,
  uplodedPictureValidation,
} from "../Validation/ValidationRules";

const SelectPicture = () => {
  const [data, setData] = useState<ExamplePicturesAddCatalogue[]>([]);
  const [isFileExist, setIsFileExist] = useState(false);

  useEffect(() => {
    getExamplePicturesAddNew().then((pictures: ExamplePicturesAddCatalogue[]) =>
      setData(pictures)
    );
  }, []);

  const {
    register,
    formState: { errors },
    clearErrors,
  } = useFormContext();

  let validateProposedPicture = selectPictureValidation(isFileExist);
  let validateUploadedPicture = uplodedPictureValidation(
    isFileExist,
    setIsFileExist,
    clearErrors
  );

  return (
    <div className="field-add-new-catalogue">
      <h2>Upload pictures:</h2>
      <article>
        <section className="upload-files-add-new-catalogue">
          <label htmlFor="cataloguePicture" className="file-add-new-catalogue">
            <FontAwesomeIcon icon={faUpload} />
            <p>Catalogue Picture</p>
            <input
              id="cataloguePicture"
              type="file"
              {...register("cataloguePicture", validateUploadedPicture)}
            />
          </label>
        </section>
        <p className="error-login-panel">{errors.cataloguePicture?.message}</p>
        <p className="example-add-new-catalogue center-add-new-catalogue">
          Or use one from our example pictures
        </p>
        <section className="upload-files-add-new-catalogue">
          {data.map(({ id, img, name }: ExamplePicturesAddCatalogue) => {
            return (
              <label
                htmlFor={id + name}
                key={id}
                className={`${
                  isFileExist && "off-add-new-catalogue"
                } picture-files-add-new-catalogue`}
              >
                <img src={img} alt={name} />
                <input
                  id={id + name}
                  value={name}
                  type="radio"
                  {...register("exampleImage", validateProposedPicture)}
                />
              </label>
            );
          })}
        </section>
      </article>
      <p className="error-login-panel">{errors.exampleImage?.message}</p>
    </div>
  );
};

export default SelectPicture;
