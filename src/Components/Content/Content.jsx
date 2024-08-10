import React, { useState } from "react";
import Navbar from "../NavBar/Navbar"; // Adjust the import path as necessary
import "./Content.css"; // Add any specific styles for Content if needed

const Content = () => {
  const [showSidenav, setShowSidenav] = useState(false);

  const toggleSidenav = (state) => {
    setShowSidenav(state);
  };

  return (
    <div className={`content-container ${showSidenav ? "shifted" : ""}`}>
      <Navbar onToggleSidenav={toggleSidenav} />
      <main className="main-content">
        <h1>Hello World</h1>
      </main>
    </div>
  );
};

export default Content;
