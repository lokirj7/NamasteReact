import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Body from "../Components/Body";
import tastyTrailsLogo from "../../public/images/tasty-trails-logo.png";
import { MdStarRate } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import Header from "../Components/Header"
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Restaurant, Star Rating, cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */







// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <span>❤️</span>
      <a href="https://www.linkedin.com/in/bharat2044/" target="_blank">
        Loki
      </a>
      <span>&copy;</span>
      {year}
      <strong>
        Tasty <span>Trails</span>
      </strong>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
