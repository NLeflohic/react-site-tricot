import React from "react";
import image from "../../images/banniere2.png";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="banner">
        <img src={image} alt="banniere" />
      </div>
    </header>
  );
};

export default Header;
