import React from "react";
import { Link } from "react-router-dom";
import homeIcon from "../../images/home_icon.png";
import "./style.css";

const Menu = props => {
  const handleClick = () => {
    props.setHomePage(false);
  };

  return (
    <section className="menu wrapper">
      <Link to="/home" style={{ textDecoration: "none" }}>
        <img src={homeIcon} alt="icon" className="icon" onClick={handleClick} />
      </Link>
      <Link to="/hommes" style={{ textDecoration: "none" }}>
        <span className="menu-item" onClick={handleClick}>
          Hommes
        </span>
      </Link>
      <Link to="/femmes" style={{ textDecoration: "none" }}>
        <span className="menu-item">Femmes</span>
      </Link>
      <Link to="/enfants" style={{ textDecoration: "none" }}>
        <span className="menu-item">Enfants</span>
      </Link>
      <Link to="/accessoires" style={{ textDecoration: "none" }}>
        <span className="menu-item">Accessoires</span>
      </Link>
    </section>
  );
};

export default Menu;
