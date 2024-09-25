import React from "react"
import ReactDom from "react-dom/client"
import tastyTrailsLogo from "../../public/images/tasty-trails-logo.png";

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={tastyTrailsLogo} alt="Tasty Trails Logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header