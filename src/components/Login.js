// Login.js

import React, { useState } from "react";
import { Link, useNavigate ,} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/actions/UserActions";
// import "./Login.css"; // Import the CSS file for styling

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const loggedInUser = useSelector((state) => state.UserReducer.loggedInUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    let valid = true;

    if (username.trim() === "") {
      setUsernameError("Username is required");
      valid = false;
    } else {
      setUsernameError("");
    }

    if (password.trim() === "") {
      setPasswordError("Password is required");
      valid = false;
    } else {
      setPasswordError("");
    }

    return valid;
  };

  const doLogin = () => {
    if (validateForm()) {
      const payload = {
        username: username,
        password: password,
      };
      dispatch(loginUser(payload))
        .then((resp) => {
          if (resp.data) {
            localStorage.setItem("myUser", JSON.stringify(resp.data));
            setError(""); // Clear any previous errors
            window.location.href = "/";
          }
        })
        .catch(() => {
          setError("Invalid username or password"); // Set error message on catch
        });
    }
  };

  


  return (
    <div className="login-page" style={{ height: "100vh" }}>
      {loggedInUser !== null ? (
        navigate("/")
      ) : (
        <section className="vh-100 d-flex align-items-center">
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-md- col-lg-8">
                <div
                  className="card p-4"
                  style={{ borderRadius: "1rem", width: "750px", height: "600px" }}
                >
                  <div className="row g-0">
                    <div className="col-md-5 d-none d-md-block">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                        alt="login form"
                        className="img-fluid"
                        style={{ borderRadius: "1rem 0 0 1rem" }}
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <span className="h1 fw-bold mb-0" style={{ color: "white" }}>
                          Logo
                        </span>
                      </div>

                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px", fontWeight: "bold" }}
                      >
                        Sign into your account
                      </h5>

                      <div className="form-outline mb-4">
                        <input
                          type="username"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          Username
                        </label>
                        {usernameError && (
                          <div className="text-danger">{usernameError}</div>
                        )}
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type={showPassword ? "text" : "password"} 
                          id="form2Example27"
                          className="form-control form-control-lg"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                        {passwordError && (
                          <div className="text-danger">{passwordError}</div>
                        )}
                        {/* Toggle password visibility icon */}
                        <span
                          className={`password-toggle-icon ${showPassword ? "show" : ""}`}
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
                        </span>
                      </div>
                      {error && <div className="text-danger">{error}</div>}
                      <div className="pt-1 mb-4">
                        <button
                          onClick={doLogin}
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                          style={{ backgroundColor: "#000" }}
                        >
                          Login
                        </button>
                      </div>

                      <div className="d-flex justify-content-between">
                        <a className="small text-muted" href="#!">
                          {/* Forgot password? */}
                        </a>
                        <p className="mb-0">
                          Don't have an account?{" "}
                          <Link to="/register">
                            <a href="#!" className="small" style={{ color: "#393f81", fontSize: "20px" }}>
                              Register here
                            </a>
                          </Link>
                        </p>
                      </div>

                      <div className="d-flex justify-content-between mt-4">
                        <a href="#!" className="small text-muted">
                          Terms of use.
                        </a>
                        <a href="#!" className="small text-muted">
                          Privacy policy
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Login;
