import React, { useState, useEffect } from "react";
import "./DashboardMain.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link, useNavigate } from "react-router-dom";
import { fetchVendorProfile } from "../../services/Api"; // Import the API function
import { Tab, Tabs, Container } from "react-bootstrap";

const DashboardMain = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/"); // Redirect to login page
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await fetchVendorProfile();
        setProfile(profileData);
        console.log(profileData);
      } catch (error) {
        setError("Failed to fetch profile data: " + error.message);
        console.error("Error fetching profile data:", error);
        if (error.message === "No authentication token found") {
          navigate("/"); // Redirect to login if no token is found
        }
      }
    };

    fetchProfile();
  }, [navigate]);

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">Vendor ERP</div>
        <ul className="sidebar-menu">
          <li>
            {" "}
            <Link to="/navbar" className="sidebar-link">
              Home
            </Link>
          </li>

          <li>Profile</li>
          <li>Settings</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </aside>
      <main className="main-content">
        <header className="header">
          <div className="row">
            <div className="col-md-6 text-start">
              <h1 className="text-start">Dashboard</h1>
            </div>
            <div className="col-md-6 text-end">
              <Link to={"/"} className="btn" onClick={handleLogout}>
                LogOut
              </Link>
            </div>
          </div>
        </header>
        <div className="content">
          {error && <div className="alert alert-danger">{error}</div>}
          <Container>
            <Tabs defaultActiveKey="general" id="profile-tabs" className="mb-3">
              <Tab eventKey="general" title="General">
                <div className="tab-content">
                  {profile ? (
                    <div className="row">
                      <div className="col-md-6">
                        <p>
                          <strong>Email:</strong> {profile.email}
                        </p>
                        <p>
                          <strong>Company Name:</strong> {profile.company_name}
                        </p>
                        <p>
                          <strong>MSME No:</strong> {profile.msme_no}
                        </p>
                        <p>
                          <strong>City:</strong> {profile.city}
                        </p>
                        <p>
                          <strong>Short Name:</strong> {profile.short_name}
                        </p>
                        <p>
                          <strong>Address:</strong> {profile.address}
                        </p>
                        <p>
                          <strong>Website:</strong>{" "}
                          <a
                            href={profile.website}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {profile.website}
                          </a>
                        </p>
                        <p>
                          <strong>VAT TIN:</strong> {profile.VAT_TIN}
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <strong>Contact No:</strong> {profile.contact_no}
                        </p>
                        <p>
                          <strong>Footer Message:</strong>{" "}
                          {profile.footer_message}
                        </p>
                        <p>
                          <strong>Director Name:</strong>{" "}
                          {profile.director_name}
                        </p>
                        <p>
                          <strong>Pin Code:</strong> {profile.pin_code}
                        </p>
                        <p>
                          <strong>State:</strong> {profile.state}
                        </p>
                        <p>
                          <strong>District Code:</strong>{" "}
                          {profile.district_code}
                        </p>
                        <p>
                          <strong>State No Numeric:</strong>{" "}
                          {profile.state_no_numeric}
                        </p>
                        <p>
                          <strong>State Code Alpha:</strong>{" "}
                          {profile.state_code_alpha}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
              </Tab>
              <Tab eventKey="data2" title="Data2">
                <div className="tab-content">
                  {profile ? (
                    <div className="row">
                      <div className="col-md-6">
                        <p>
                          <strong>CST TIN:</strong> {profile.CST_TIN}
                        </p>
                        <p>
                          <strong>Excise Range:</strong>{" "}
                          {profile.C_Excise_Range}
                        </p>
                        <p>
                          <strong>Commissionerate:</strong>{" "}
                          {profile.Commissionerate}
                        </p>
                        <p>
                          <strong>Excise Reg No:</strong>{" "}
                          {profile.C_Excise_Reg_No}
                        </p>
                        <p>
                          <strong>PLA No:</strong> {profile.PLA_No}
                        </p>
                        <p>
                          <strong>Service Tax No:</strong>{" "}
                          {profile.Service_Tax_No}
                        </p>
                        <p>
                          <strong>Import Export Code:</strong>{" "}
                          {profile.Import_Export_Code}
                        </p>
                        <p>
                          <strong>ARN No:</strong> {profile.ARN_No}
                        </p>
                        <p>
                          <strong>Export House No:</strong>{" "}
                          {profile.Export_House_No}
                        </p>
                        <p>
                          <strong>Udyog Aadhar No:</strong>{" "}
                          {profile.Udyog_Aadhar_No}
                        </p>
                        <p>
                          <strong>VAT Tin Date:</strong> {profile.Vat_Tin_Date}
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <strong>CST Tin Date:</strong> {profile.Cst_Tin_Date}
                        </p>
                        <p>
                          <strong>Subject To:</strong> {profile.Subject_To}
                        </p>
                        <p>
                          <strong>Division:</strong> {profile.Division}
                        </p>
                        <p>
                          <strong>GST No:</strong> {profile.GST_No}
                        </p>
                        <p>
                          <strong>ECC No:</strong> {profile.ECC_No}
                        </p>
                        <p>
                          <strong>PAN No:</strong> {profile.PAN_No}
                        </p>
                        <p>
                          <strong>CIN NO:</strong> {profile.CIN_NO}
                        </p>
                        <p>
                          <strong>Import Export Date:</strong>{" "}
                          {profile.Import_Export_Date}
                        </p>
                        <p>
                          <strong>ARN Date:</strong> {profile.ARN_Date}
                        </p>
                        <p>
                          <strong>LUT NO:</strong> {profile.LUT_NO}
                        </p>
                        <p>
                          <strong>LUT Date:</strong> {profile.LUT_Date}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
              </Tab>
              <Tab eventKey="logoImage" title="Logo/Image">
                <div className="tab-content">
                  {profile ? (
                    <div>
                      <p>
                        <strong>Login Logo:</strong>{" "}
                        <img
                          src={profile.login_logo}
                          alt="Login Logo"
                          style={{ maxWidth: "100px" }}
                        />
                      </p>
                      <p>
                        <strong>Home Logo:</strong>{" "}
                        <img
                          src={profile.home_logo}
                          alt="Home Logo"
                          style={{ maxWidth: "100px" }}
                        />
                      </p>
                      <p>
                        <strong>Company Logo:</strong>{" "}
                        <img
                          src={profile.company_logo}
                          alt="Company Logo"
                          style={{ maxWidth: "100px" }}
                        />
                      </p>
                      <p>
                        <strong>TUV Logo:</strong>{" "}
                        <img
                          src={profile.Tuv_logo}
                          alt="TUV Logo"
                          style={{ maxWidth: "100px" }}
                        />
                      </p>
                    </div>
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
              </Tab>
              <Tab eventKey="invoice" title="Invoice">
                <div className="tab-content">
                  <p>Invoice details will be shown here.</p>
                  {/* Implement the invoice details based on your requirements */}
                </div>
              </Tab>
            </Tabs>
          </Container>
        </div>
      </main>
    </div>
  );
};

export default DashboardMain;
