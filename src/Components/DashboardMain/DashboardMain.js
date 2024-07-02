import React from "react";
import "./DashboardMain.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const DashboardMain = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/"); // Redirect to login page
  };
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">Vendor ERP</div>
        <ul className="sidebar-menu">
          <li>Home</li>
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
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
          <p>Welcome to the Vendor ERP dashboard!</p>
          <p>Here you can manage your profile, settings, and more.</p>
        </div>
      </main>
    </div>
  );
};

export default DashboardMain;
