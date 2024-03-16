import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <h1>Ghibli Movie Ticket</h1>
      </div>
      <div className="items"> Book </div>
    </div>
  );
}

export default Navbar;
