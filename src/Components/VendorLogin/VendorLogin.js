import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./VendorLogin.css";

const VendorLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmailError("");
    setPasswordError("");

    const data = { email, password };

    try {
      const response = await fetch("http://13.201.136.34:8000/vendor/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.email) {
          setEmailError(errorData.email);
        }
        if (errorData.password) {
          setPasswordError(errorData.password);
        }
        throw new Error("Vendor Login failed");
      }

      const responseData = await response.json();
      console.log("Vendor Login successful:", responseData);
      navigate("/dashboard");
    } catch (error) {
      console.error("Vendor Login error:", error);
    }
  };

  return (
    <div className="Admin-login">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="adminmainlogin">
              <div className="Admin-form">
                <form onSubmit={handleSubmit}>
                  <div className="Adminform1">
                    <h6 className="text-center">Vendor Login</h6>
                    <div className="mb-3">
                      <label htmlFor="emailInput" className="form-label">
                        Email
                      </label>
                      <input
                        placeholder="Email"
                        type="email"
                        className={`form-control ${
                          emailError ? "is-invalid" : ""
                        }`}
                        id="emailInput"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {emailError && (
                        <div className="invalid-feedback">{emailError}</div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="passwordInput" className="form-label">
                        Password
                      </label>
                      <input
                        placeholder="Enter your password"
                        type="password"
                        className={`form-control ${
                          passwordError ? "is-invalid" : ""
                        }`}
                        id="passwordInput"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {passwordError && (
                        <div className="invalid-feedback">{passwordError}</div>
                      )}
                    </div>
                  </div>
                  <div className="mb-3">
                    <button type="submit" className="Adminbtn">
                      Log In
                    </button>
                  </div>
                </form>
              </div>
              <div className="Adminouter text-center">
                <p>Powered by clumpcoder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorLogin;