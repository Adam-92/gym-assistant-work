import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faUser,
  faEnvelope,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import { signUp } from "../../../services/Auth";
import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterInputs } from "./RegisterPanel.model";
import "./RegisterPanel.css";

const RegisterPanel = () => {
  const [firebaseError, setFirebaseError] = useState("");
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm<RegisterInputs>({
    mode: "onSubmit",
    reValidateMode: "onChange", //onSubmit
  });

  const validation = {
    required: "Please fill out this field",
    maxLength: {
      value: 26,
      message: "This field must have 8-26 characters",
    },
    minLength: {
      value: 8,
      message: "This field must have 8-26 characters",
    },
    setValueAs: (value: string) => value.split(" ").join(""),
  };

  const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
    signUp(data.password, data.email, setFirebaseError, navigate);
  };

  return (
    <article className="center-register-panel">
      <div className="container-register-panel">
        <section className="icon-register-panel">
          <FontAwesomeIcon icon={faDumbbell} color="white" size="8x" />
        </section>
        <section className="form-register-panel">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative-register-panel">
              <FontAwesomeIcon
                icon={faUser}
                color="white"
                className="absolute-register-panel"
              />
              <input
                type="text"
                {...register("username", validation)}
                placeholder="Username"
              ></input>
            </div>
            <h5 className="error-register-panel">{errors.username?.message}</h5>
            <div className="relative-register-panel">
              <FontAwesomeIcon
                icon={faEnvelope}
                color="white"
                className="absolute-register-panel"
              />
              <input
                type="email"
                placeholder="Email Adress"
                required
                {...register("email")}
              ></input>
            </div>
            <h5 className="error-register-panel">{errors.email?.message}</h5>
            <div className="relative-register-panel">
              <FontAwesomeIcon
                icon={faKey}
                color="white"
                className="absolute-register-panel"
              />
              <input
                type="password"
                {...register("password", validation)}
                placeholder="Password"
              ></input>
            </div>
            <h5 className="error-register-panel">{errors.password?.message}</h5>
            <div className="relative-register-panel">
              <FontAwesomeIcon
                icon={faKey}
                color="white"
                className="absolute-register-panel"
              />
              <input
                type="password"
                {...register("re_password", {
                  validate: {
                    matchesPreviousPassword: (value: string) => {
                      const { password } = getValues();
                      return password === value || "Passwords should match!";
                    },
                  },
                })}
                placeholder="Re - Password"
              ></input>
            </div>
            <h5 className="error-register-panel">
              {errors.re_password?.message}
            </h5>
            <h5 className="error-login-panel">
              {firebaseError ? firebaseError : null}
            </h5>
            <button className="submit-register-panel">Register</button>
          </form>
        </section>
        <div className="links-register-panel">
          <Link to="/login" className="link-register-panel">
            Sign in to your account!
          </Link>
        </div>
      </div>
    </article>
  );
};

export default RegisterPanel;
