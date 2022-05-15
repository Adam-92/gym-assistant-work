import { useState } from "react";
import { Link } from "react-router-dom";
import { handleChange } from "../../../services/Auth";
import { createUser, handleSubmit } from "../../../services/Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faUser,
  faEnvelope,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import "./RegisterPanel.css";

const RegisterPanel = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [error, setError] = useState({
    status: false,
    msg: "",
  });
  console.log(error);
  return (
    <article className="center-register-panel">
      <div className="container-register-panel">
        <section className="icon-register-panel">
          <FontAwesomeIcon icon={faDumbbell} color="white" size="8x" />
        </section>
        <section className="form-register-panel">
          <form
            onSubmit={(e) => {
              handleSubmit(e, values, createUser, setError);
            }}
          >
            <div className="relative-register-panel">
              <FontAwesomeIcon
                icon={faUser}
                color="white"
                className="absolute-register-panel"
              />
              <input
                type="text"
                name="username"
                value={values.username}
                placeholder="Username"
                onChange={(e) => handleChange(e, values, setValues)}
              ></input>
            </div>
            <div className="relative-register-panel">
              <FontAwesomeIcon
                icon={faEnvelope}
                color="white"
                className="absolute-register-panel"
              />
              <input
                type="text"
                name="email"
                value={values.email}
                placeholder="Email Adress"
                onChange={(e) => handleChange(e, values, setValues)}
              ></input>
            </div>
            <div className="relative-register-panel">
              <FontAwesomeIcon
                icon={faKey}
                color="white"
                className="absolute-register-panel"
              />
              <input
                type="password"
                name="password"
                value={values.password}
                placeholder="Password"
                onChange={(e) => handleChange(e, values, setValues)}
              ></input>
            </div>
            <div className="relative-register-panel">
              <FontAwesomeIcon
                icon={faKey}
                color="white"
                className="absolute-register-panel"
              />
              <input
                type="password"
                name="confirm_password"
                value={values.confirm_password}
                placeholder="Re - Password"
                onChange={(e) => handleChange(e, values, setValues)}
              ></input>
            </div>
            <button className="submit-register-panel">Register</button>
          </form>
        </section>
        {error.status && 
          <h4 className="error-register-panel">
            {error.msg}
          </h4>
        }
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
