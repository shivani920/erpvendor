import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap"; // Import Modal and Button
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./VendorLogin.css";
import { loginVendor } from "../../services/Api.jsx";

const VendorLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      navigate("/dashboard"); // Redirect to dashboard if already logged in
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmailError("");
    setPasswordError("");

    const data = { email, password };

    try {
      const responseData = await loginVendor(data);

      console.log("Vendor Login successful:", responseData);
      const { token } = responseData;

      // Save the authentication token in local storage
      localStorage.setItem("refreshToken", token.refresh);
      localStorage.setItem("authToken", responseData.token.access);

      setModalContent("Vendor Login successful");
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate("/dashboard");
      }, 2000); // Redirect to dashboard after 2 seconds
    } catch (error) {
      const errorData = JSON.parse(error.message);
      if (errorData.email) {
        setEmailError(errorData.email);
      }
      if (errorData.password) {
        setPasswordError(errorData.password);
      }
      setModalContent("Vendor Login failed");
      setShowModal(true);
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

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default VendorLogin;
