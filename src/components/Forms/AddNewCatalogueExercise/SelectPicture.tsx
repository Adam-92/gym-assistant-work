import React, { useEffect, useState } from "react";
import { ExamplePicturesAddCatalogue } from "src/components/Forms/Forms.model";
import { getExamplePicturesAddNew } from "../../../firebase/services/Activity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { useFormContext } from "react-hook-form";
import {
  isValidImageUrl,
  validateProposalImage,
} from "../../../validation/validationRules";

const SelectPicture = () => {
  const [data, setData] = useState<ExamplePicturesAddCatalogue[]>([]);

  useEffect(() => {
    getExamplePicturesAddNew().then((pictures: ExamplePicturesAddCatalogue[]) =>
      setData(pictures)
    );
  }, []);

  const {
    register,
    formState: { errors },
    clearErrors,
    watch,
  } = useFormContext();

  const addedImageUrl = watch("urlImage");

  const validationOfProposalImage = validateProposalImage(addedImageUrl);

  return (
    <div className="field-add-new-catalogue">
      <h2>Upload pictures:</h2>
      <article>
        <section className="url-add-new-catalogue">
          <label htmlFor="urlImage">
            <FontAwesomeIcon icon={faImage} size="2x" />
            <input
              id="urlImage"
              className={errors.urlImage?.message && "error-add-new-catalogue"}
              {...register("urlImage", {
                validate: (value: string) => isValidImageUrl(value),
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                  if (e.target.value) {
                    clearErrors("exampleImage");
                  }
                },
              })}
              placeholder="https://example.com/photo.jpg"
            />
          </label>
        </section>
        {errors.urlImage?.message && (
          <p className="error-login-panel">{errors.urlImage.message}</p>
        )}
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
                  addedImageUrl && "off-add-new-catalogue"
                } picture-files-add-new-catalogue`}
              >
                <img src={img} alt={name} />
                <input
                  id={id + name}
                  value={img}
                  type="radio"
                  {...register("exampleImage", validationOfProposalImage)}
                />
              </label>
            );
          })}
        </section>
      </article>
      {errors.exampleImage?.message && (
        <p className="error-login-panel">{errors.exampleImage?.message}</p>
      )}
    </div>
  );
};

export default SelectPicture;
