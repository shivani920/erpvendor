// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VendorLogin from "./Components/VendorLogin/VendorLogin";
import DashboardMain from "./Components/DashboardMain/DashboardMain";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<VendorLogin />} />
          <Route path="/dashboard" element={<DashboardMain />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
