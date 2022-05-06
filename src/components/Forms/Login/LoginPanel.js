import { useState } from "react";
import { handleChange } from "../../../services/Auth";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { handleSubmit, signInUser } from "../../../services/Auth";
import "./LoginPanel.css";

const LoginPanel = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    status: false,
    msg: "",
  });
  
  return (
    <article className="center-login-panel">
      <div className="container-login-panel">
        <section className="icon-login-panel">
          <FontAwesomeIcon icon={faDumbbell} color="white" size="8x" />
        </section>
        <section className="form-login-panel">
          <form onSubmit={(e) => handleSubmit(e, values, signInUser, setError)}>
            <div className="relative-login-panel">
              <FontAwesomeIcon
                icon={faUser}
                color="white"
                className="absolute-login-panel"
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={(e) => handleChange(e, values, setValues)}
              ></input>
            </div>
            <div className="relative-login-panel">
              <FontAwesomeIcon
                icon={faKey}
                color="white"
                className="absolute-login-panel"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => handleChange(e, values, setValues)}
              ></input>
            </div>
            <div className="checkbox-login-panel">
              <label className="remember-login-panel">
                <input type="checkbox"></input>
                Remember Me
              </label>
            </div>
            <button type="submit" className="submit-login-panel">
              Log In
            </button>
          </form>
        </section>
        {error.status && <h4 className="error-login-panel">{error.msg}</h4>}
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
