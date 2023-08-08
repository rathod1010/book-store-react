import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/actions/UserActions";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const dispatch = useDispatch();

  const validateForm = () => {
    let valid = true;

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.(?:com)$/i;

    if (!emailPattern.test(email)) {
      setEmailError("Invalid email address");
      valid = false;
    } else {
      setEmailError("");
    }

    // Password validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and contain at least one symbol, one capital alphabet, and one number"
      );
      valid = false;
    } else {
      setPasswordError("");
    }

    // Username validation
    const usernamePattern = /^[a-zA-Z]{3,}$/;
    if (!usernamePattern.test(username)) {
      setUsernameError("Username can only contain alphabets and  at least 3 letters");
      valid = false;
    } else {
      setUsernameError("");
    }

    return valid;
  };

  const doSignIN = () => {
    if (validateForm()) {
      const payload = {
        email: email,
        username: username,
        password: password,
      };
      dispatch(registerUser(payload));
    }
  };

  const passwordStrength = () => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (passwordPattern.test(password)) {
      return <i className="fas fa-check-circle text-success"></i>;
    } else {
      return <i className="fas fa-times-circle text-danger"></i>;
    }
  };

  return (
    <div className="login-page" style={{ height: "100vh" }}>
      <section className="vh-100 d-flex align-items-center">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md- col-lg-8">
              <div className="card p-4" style={{ borderRadius: "1rem", width: "750px", height: "690px", position: "relative" }}>
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
                      <span className="h1 fw-bold mb-0" style={{ color: "white" }}></span>
                    </div>

                    <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px", fontWeight: "bold" }}>
                      Create your account
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
                      {usernameError && <div className="text-danger">{usernameError}</div>}
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form2Example17"
                        className="form-control form-control-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form2Example17">
                        Email
                      </label>
                      {emailError && <div className="text-danger">{emailError}</div>}
                    </div>

                    <div className="form-outline1 mb-4">
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
                      {passwordError && <div className="text-danger">{passwordError}</div>}
                      <div className="password-toggle-icon1" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
                      </div>
                      <div className="password-strength-icon">{passwordStrength()}</div>
                    </div>

                    <div className="pt-1 mb-4">
                      <button onClick={doSignIN} className="btn btn-dark btn-lg btn-block" type="submit" style={{ backgroundColor: "#000" }}>
                        Register
                      </button>
                    </div>

                    <div className="d-flex justify-content-between">
                      <a className="small text-muted" href="#!">
                        {/* Forgot password? */}
                      </a>
                      <p className="mb-0">
                        Already have an account?{" "}
                        <Link to="/login">
                          <a href="#!" className="small" style={{ color: "#393f81", fontSize: "20px" }}>
                            Login here
                          </a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
