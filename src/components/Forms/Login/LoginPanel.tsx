import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormLogin } from "./LoginPanel.model";
import "./LoginPanel.css";
import { signIn } from "../../../services/Auth";

const LoginPanel = () => {
  const [firebaseError, setFirebaseError] = useState("");
  const navigate = useNavigate();
  
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormLogin>({
    mode: "onSubmit",
    reValidateMode: "onChange", //onSubmit
  });

  const validation = {
    required: "Please fill out this field",
    setValueAs: (value: string) => value.split(" ").join(""),
  };

  const onSubmit: SubmitHandler<FormLogin> = (data) => {
    signIn(data.password, data.email, setFirebaseError, navigate);
  };

  return (
    <article className="center-login-panel">
      <div className="container-login-panel">
        <section className="icon-login-panel">
          <FontAwesomeIcon icon={faDumbbell} color="white" size="8x" />
        </section>
        <section className="form-login-panel">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative-login-panel">
              <FontAwesomeIcon
                icon={faUser}
                color="white"
                className="absolute-login-panel"
              />
              <input
                type="email"
                {...register("email", validation)}
                placeholder="Email"
              ></input>
            </div>
            <h5 className="error-login-panel">{errors.email?.message}</h5>
            <div className="relative-login-panel">
              <FontAwesomeIcon
                icon={faKey}
                color="white"
                className="absolute-login-panel"
              />
              <input
                type="password"
                {...register("password", validation)}
                placeholder="Password"
              ></input>
            </div>
            <h5 className="error-login-panel">{errors.password?.message}</h5>
            <h5 className="error-login-panel">
              {firebaseError ? firebaseError : null}
            </h5>
            <button type="submit" className="submit-login-panel">
              Log In
            </button>
          </form>
        </section>
        <section className="links-login-panel">
          <Link to="/register" className="link-login-panel">
            Create new account
          </Link>
          <Link to="" className="link-login-panel">
            Forgot your password ?
          </Link>
        </section>
      </div>
    </article>
  );
};

export default LoginPanel;
