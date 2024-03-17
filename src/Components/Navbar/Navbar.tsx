import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <h1>Ghibli Movie Ticket</h1>
      </div>
      <button className="items"> Book </button>
    </div>
  );
}

export default Navbar;
