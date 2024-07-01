// src/Components/Dashboard/Dashboard.js
import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
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
          <h1>Dashboard</h1>
        </header>
        <div className="content">
          <p>Welcome to the Vendor ERP dashboard!</p>
          <p>Here you can manage your profile, settings, and more.</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
