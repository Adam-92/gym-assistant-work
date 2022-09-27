import React, { useEffect, useState } from "react";
import { ExamplePicturesAddCatalogue } from "src/model/Forms.model";
import { getExamplePicturesAddNew } from "../../../services/Activity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { useFormContext } from "react-hook-form";
import {
  validateUrl,
  validateProposalImage,
} from "../Validation/ValidationRules";

const SelectPicture = () => {
  const [data, setData] = useState<ExamplePicturesAddCatalogue[]>([]);
  const [userNotAddUrl, setUserNotAddUrl] = useState(true);

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
  console.log("🚀 ~ errors ", errors);
  const validationOfUrl = validateUrl(setUserNotAddUrl, clearErrors);
  const validationOfProposalImage = validateProposalImage(userNotAddUrl);

  return (
    <div className="field-add-new-catalogue">
      <h2>Upload pictures:</h2>
      <article>
        <section className="url-add-new-catalogue">
          <label htmlFor="urlImage">
            <FontAwesomeIcon icon={faImage} size="2x" />
            <input
              id="urlImage"
              className={
                errors.urlImage?.message ? "error-add-new-catalogue" : ""
              }
              {...register("urlImage", validationOfUrl)}
              placeholder="https://example.com/photo.jpg"
            />
          </label>
        </section>
        <p className="error-login-panel">{errors.urlImage?.message}</p>
        <p className="example-add-new-catalogue center-add-new-catalogue">
          Or use one from our example pictures
        </p>
        <section className="upload-files-add-new-catalogue">
          {data?.map(({ id, img, name }: ExamplePicturesAddCatalogue) => {
            return (
              <label
                htmlFor={id + name}
                key={id}
                className={`${
                  !userNotAddUrl && "off-add-new-catalogue"
                } picture-files-add-new-catalogue`}
              >
                <img src={img} alt={name} />
                <input
                  id={id + name}
                  value={name}
                  type="radio"
                  {...register("exampleImage", validationOfProposalImage)}
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
