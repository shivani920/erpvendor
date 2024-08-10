// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VendorLogin from "./Components/VendorLogin/VendorLogin";
import DashboardMain from "./Components/DashboardMain/DashboardMain";
import Navbar from "./Components/NavBar/Navbar";
import Content from "./Components/Content/Content";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<VendorLogin />} />
          <Route path="/dashboard" element={<DashboardMain />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/content" element={<Content />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
